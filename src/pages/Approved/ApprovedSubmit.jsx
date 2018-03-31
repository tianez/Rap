/**
 * 提交审批
 */
import React, { Component } from "react";
import { Toast } from "antd-mobile";
import asyncComponent from "Extended/asyncComponent";
const FormTable = asyncComponent(() => import("Components/FormTable/FormTable"), true);

const formlist = {
    chuchai: {
        title: "出差",
        formCode: "form-chuchai-1",
        custfields: "custfields1"
    },
    waichu: {
        title: "外出",
        formCode: "form-waichu-1",
        custfields: "custfields1"
    },
    jiaban: {
        title: "加班",
        formCode: "form-jiaban-1",
        custfields: "custfields1"
    },
    leave: {
        title: "请假",
        formCode: "form-leave-1",
        custfields: "custfields1"
    },
    ribao: {
        title: "日志",
        formCode: "form-ribao-1",
        custfields: "custfields2"
    },
    zhoubao: {
        title: "周报",
        formCode: "form-zhoubao-1",
        custfields: "custfields2"
    },
    yuebao: {
        title: "月报",
        formCode: "form-yuebao-1",
        custfields: "custfields2"
    },
    grjh: {
        title: "个人周计划",
        formCode: "form-grjh-1",
        custfields: "custfields2"
    },
    bmjh: {
        title: "部门月计划",
        formCode: "form-bmjh-1",
        custfields: "custfields2"
    }
};

const custfields = {
    custfields1: [
        {
            type: "WhiteSpace"
        },
        {
            title: "审批人",
            id: "approved",
            name: "approved",
            type: "organizations",
            step: true,
            multiple: false,
            rules: [{ required: true, message: "必须选择审批人" }]
        },
        {
            type: "WhiteSpace"
        },
        {
            title: "抄送人",
            id: "cc",
            name: "cc",
            type: "organizations",
            tip: "审批通过后，通知抄送人"
        }
    ],
    custfields2: [
        {
            type: "WhiteSpace"
        },
        {
            title: "抄送人",
            id: "cc",
            name: "cc",
            type: "organizations",
            step: false,
            rules: [{ required: true, message: "必须选择抄送人" }]
        }
    ]
};

import { contextConsumers } from "Libs/ContextRudex";

@contextConsumers((state, props) => {
    let { moduleId } = props.match.params;
    let mod = formlist[moduleId];
    let formCode = mod ? mod.formCode : null;
    return {
        jsondata: state.getIn(["FormFields", localStorage.organizationId, formCode]),
        formCode: formCode,
        moduleId: moduleId,
        mod: mod
    };
})
export default class ApprovedSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentWillMount() {
        let { jsondata, moduleId, formCode, history, mod } = this.props;
        if (jsondata || !formCode) {
            return;
        }
        let organizationId = localStorage.organizationId;
        let res = await Request("form/getForm", {
            params: {
                formCode: mod.formCode,
                userId: localStorage.userId
            }
        });
        if (res.success) {
            if (!res.data.form) {
                Toast.info("未发现该模块表单数据");
                return;
            }
            let fields = res.data.form.fields.map(field => {
                let controlItems = {};
                if (field.controlItems && field.controlItems.length > 0) {
                    let fids = field.controlItems;
                    controlItems = JSON.parse(fids);
                }
                field = {
                    name: field.id + "," + field.filedName,
                    title: field.filedTitle,
                    type: field.controlType,
                    placeholder: field.controlTips,
                    rules: field.controlCheckRule ? JSON.parse(field.controlCheckRule) : null,
                    ...controlItems
                };
                return field;
            });
            let data = {
                ...res.data.form,
                fields: fields.concat(custfields[mod.custfields])
            };
            this.props.dispatch.setIn(["FormFields", localStorage.organizationId, formCode], data);
        } else {
            Toast.info(res.message);
        }
    }
    handleSubmit = async data => {
        let { jsondata, mod, history } = this.props;
        if (!jsondata) {
            return;
        }
        let reqData = {};
        for (const key in data) {
            if (typeof data[key] == "object") {
                reqData[key] = JSON.stringify(data[key]);
            } else {
                reqData[key] = data[key];
            }
        }
        // if (mod.custfields == "custfields1") {
        //     if (!data.approved || data.approved.length == 0) {
        //         return Toast.info("必须选择审批人", 2);
        //     }
        // } else if (mod.custfields == "custfields2") {
        //     if (!data.cc || data.cc.length == 0) {
        //         return Toast.info("必须选择抄送人", 2);
        //     }
        // }
        let postdata = {
            orgId: localStorage.organizationId,
            userId: localStorage.userId,
            formId: jsondata.id,
            data: reqData
        };
        let res = await Request("form/save", {
            method: "post",
            data: postdata
        });
        if (res.success) {
            if (mod.custfields == "custfields2") {
                Toast.info("日志提交成功");
                history.replace("/");
            } else {
                Toast.info("审批提交成功");
                history.replace("/originates");
            }
        } else {
            Toast.info(res.message);
        }
    };
    render() {
        let { jsondata, mod, moduleId } = this.props;
        let rightTitle = mod ? "提交" : "";
        let title = mod ? mod.title : "该模块不存在";
        let fields = jsondata ? jsondata.fields : $arr;
        return (
            <FormTable
                onSubmit={this.handleSubmit}
                rightTitle={rightTitle}
                headerTitle={title}
                moduleId={moduleId}
                fields={fields}
                datajson={jsondata}
            />
        );
    }
}
