const datajson = [{
    listTitle: '基础信息',
    fields: [{
        title: '姓名',
        name: 'username',
        type: 'text',
        placeholder: '必填',
        defaultValue: 'sdsds',
        rules: [
            { required: true, message: '必须填写姓名' },
        ],
        ext: {

        }
    }, {
        title: '开始时间',
        name: 'startTime',
        type: 'datepicker',
        mode: 'date',
        rules: [
            { required: true, message: '必须选择开始时间' }
        ],
    }, {
        type: 'WhiteSpace',
    }, {
        title: '图片上传',
        name: 'images',
        type: 'images',
        rules: [
            { required: true, message: '必须选择附件' }
        ],
    },{
        type: 'WhiteSpace',
    }, {
        title: '附件上传',
        name: 'attachment',
        type: 'attachment',
        rules: [
            { required: true, message: '必须选择附件' }
        ],
    }, {
        type: 'WhiteSpace',
    }, {
        title: '请假事由',
        name: 'reason',
        type: 'textarea',
        placeholder: '必填',
        count: 100,
        rules: [
            { required: true, message: '必须填写请假事由' }
        ],
    }, {
        title: '请假类型',
        name: 'select',
        type: 'select',
        placeholder: '必填',
        opts: [
            { value: 0, label: '病假' },
            { value: 1, label: '事假' },
            { value: 2, label: '调休' },
            { value: 3, label: '产假' },
            { value: 4, label: '陪产假' },
            { value: 5, label: '婚假' },
            { value: 6, label: '例假' },
            { value: 7, label: '丧假' },
        ],
        rules: [
            { required: true, message: '必须选择请假类型' }
        ],
    }, {
        title: '请假事由',
        name: 'switch',
        type: 'switch',
        placeholder: '必填',
        rules: [
            { required: true, message: '必须填写请假事由' }
        ],
    }, {
        title: 'slider',
        name: 'slider',
        type: 'slider',
        placeholder: '必填',
        rules: [
            { required: true, message: '必须填写请假事由' }
        ],
    }, {
        title: 'radio',
        name: 'radio',
        type: 'radio',
        placeholder: '必填',
        count: 100,
        rules: [
            { required: true, message: '必须填写请假事由' }
        ],
        opts: [
            { value: 0, label: 'doctor' },
            { value: 1, label: 'bachelor' },
        ],
    }, {
        title: '审批人',
        name: 'organizations',
        type: 'organizations',
        repeat: true,
        rules: [
            { required: true, message: '必须选择审批人' }
        ],
    }, {
        type: 'WhiteSpace',
    }, {
        title: '抄送人',
        name: 'organizations2',
        type: 'organizations',
        step: false,
        tip: '审批通过后，通知抄送人',
        rules: [
            { required: true, message: '必须选择抄送人' }
        ],
    }],
}, {
    listTitle: '高阶信息',
    fields: [{
        title: '结束时间',
        name: 'endTime',
        type: 'datepicker',
        rules: [
            { required: true, message: '必须选择结束时间' }
        ],
    }],
}, {
    type: 'WhiteSpace',
}, {
    fields: [{
        title: '抄送人',
        name: 'organizations2',
        type: 'organizations',
        step: false,
        tip: '审批通过后，通知抄送人',
        rules: [
            { required: true, message: '必须选择抄送人' }
        ],
    }],
}]

export default datajson