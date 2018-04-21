import React, { Component } from "react";
import { Link } from "react-router-dom";

import LazyWarper from "Components/Layout/LazyWarper";
import Loading from "Components/Layout/Loading";
import styles from "./List.scss";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers((state, props) => ({
    data: state.getIn([localStorage.site_id, "news", props.tab.id]) || $obj
}))
export default class List extends Component {
    componentDidMount() {
        let { tab, data } = this.props;
        if (data.loaded) {
            return;
        }
        this.getData();
    }
    getData = async () => {
        console.time("testForEach2");
        let { tab, dispatch, data } = this.props;
        let res = await Request("http://cloudhubei.estv.com.cn/api/front/content/list", {
            params: {
                channelIds: tab.id
            }
        });
        console.timeEnd("testForEach2");
        if (res.success) {
            data = data.set("loaded", true);
            data = data.set("list", res.body);
            dispatch.setIn([localStorage.site_id, "news", tab.id], data);
        }
    };
    render() {
        let { tab, data, match } = this.props;
        if (tab.id == 6) {
            return (
                <LazyWarper className={styles.list}>
                    <Loading loading={true}>sdsds</Loading>
                    <p>
                        　　新华社北京４月１５日电（记者黎云、刘济美）中央军委主席习近平日前签署命令，发布新修订的《中国人民解放军内务条令（试行）》《中国人民解放军纪律条令（试行）》《中国人民解放军队列条令（试行）》（统称共同条令），自２０１８年５月１日起施行。
                    </p>
                    <p>
                        　　新修订的共同条令，全面贯彻习近平强军思想，坚持党对人民军队的绝对领导，全面深入贯彻军委主席负责制，贯彻新形势下军事战略方针，坚持“五个更加注重”战略指导，适应军委管总、战区主战、军种主建新格局，把全面从严治军要求体现在条令的各个方面，增强了时代性、科学性、精准性和操作性，是新时代军队正规化建设的基本法规和全体军人共同遵守的行为准则。新修订的共同条令颁布施行，对在新的历史起点上坚定不移走中国特色强军之路，全面推进国防和军队现代化，实现党在新时代的强军目标、把人民军队全面建成世界一流军队具有重要意义。
                    </p>
                    <p>
                        　　新修订的《内务条令（试行）》，由原来的２１章４２０条，调整为１５章３２５条，明确了内务建设的指导思想和原则，坚持政治建军、改革强军、科技兴军、依法治军，聚焦备战打仗，着眼新体制新要求，调整规范军队单位称谓和军人职责，充实日常战备、实战化军事训练管理内容要求；着眼从严管理科学管理，修改移动电话和互联网使用管理、公车使用、军容风纪、军旗使用管理、人员管理等方面规定，新增军人网络购物、新媒体使用等行为规范；着眼保障官兵权益，调整休假安排、人员外出比例和留营住宿等规定，新增训练伤防护、军人疗养、心理咨询等方面要求。
                    </p>
                    <p>
                        　　新修订的《纪律条令（试行）》，由原来的７章１７９条，调整为１０章２６２条，围绕听党指挥、备战打仗和全面从严治军，提出了政治纪律、组织纪律、作战纪律、训练纪律、工作纪律、保密纪律、廉洁纪律、财经纪律、群众纪律、生活纪律等１０个方面纪律的内容要求；充实思想政治建设、实战化训练、执行重大任务、科技创新等奖励条件；新增表彰管理规范，对表彰项目、审批权限、时机等作出规范，同时取消表彰与奖励挂钩的相应条款；充实违反政治纪律、违规选人用人、降低战备质量标准、训风演风考风不正、重大决策失误、监督执纪不力等处分条件；调整奖惩项目设置、奖惩权限和承办部门，增加奖惩特殊情形的处理原则和规定。
                    </p>
                    <p>
                        　　新修订的《队列条令（试行）》，由原来的１１章７１条，调整为１０章８９条，着眼进一步激励官兵士气、展示我军良好形象、激发爱国爱军热情，新增誓师、组建、凯旋、迎接烈士等１４种仪式，规范完善各类仪式的时机、场合、程序和要求；调整细化阅兵活动的组织程序、方队队形、动作要领；调整队列生活的基准单位和武器装备操持规范，统一营门卫兵执勤动作等内容。
                    </p>
                </LazyWarper>
            );
        }
        return (
            <LazyWarper className={styles.list}>
                <div style={{ height: "100%" }}>
                    {data.list &&
                        data.list.map(d => {
                            return (
                                <Link to={`${match.url}/${d.id}`} key={d.id} className={styles.item}>
                                    {d.titleImg && (
                                        <div className={styles.img} style={{ backgroundImage: `url(${d.titleImg})` }} />
                                    )}
                                    <div className={styles.detail}>
                                        <div className={styles.title}>{d.title}</div>
                                        <div className={styles.info}>{d.releaseDate}</div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </LazyWarper>
        );
    }
}
