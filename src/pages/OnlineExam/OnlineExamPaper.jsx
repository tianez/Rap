import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavBar, Icon, List, Checkbox, Flex, WhiteSpace, Tabs, Toast, Modal } from "antd-mobile";

const CheckboxItem = Checkbox.CheckboxItem;
const Item = List.Item;
const Brief = Item.Brief;

const alert = Modal.alert;

import formatDate from "Utils/formatDate";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import AnswerSheet from "./Compontents/AnswerSheet";
import CountDown from "./Compontents/CountDown";
import Steps from "./Compontents/Steps";
import Options from "./Compontents/Options";
import Btn from "./Mincomp/Btn";
import Footer from "./Mincomp/Footer";

import styles from "./OnlineExamDetail.scss";

export default class OnlineExamDetail extends Component {
    constructor(props) {
        super(props);
        let id = props.match.params.ExamId;
        this.state = {
            cur: 0,
            detail: {},
            list: [],
            // answer: localStorage['onlineexam_answer_' + id] ? JSON.parse(localStorage['onlineexam_answer_' + id]) : {},
            answer: {},
            timeout: 0,
            istimeover: false,
            showSheet: false,
            score: null,
            isover: false
        };
    }
    async componentWillMount() {
        let res = await Request("paper/detail", {
            params: {
                id: this.props.match.params.ExamId
            }
        });
        if (res.success) {
            let { detail } = res.data;
            this.setState({
                timeout: detail.examtime * 60,
                list: detail.infos,
                detail: detail
            });
        }
    }
    handlePre = () => {
        let { cur } = this.state;
        if (cur == 0) {
            return;
        }
        this.setState({
            cur: cur - 1
        });
    };
    handleNext = () => {
        let { cur, list } = this.state;
        if (cur == list.length - 1) {
            return;
        }
        this.setState({
            cur: cur + 1
        });
    };
    handleChangeSheet = index => {
        this.setState({
            cur: index,
            showSheet: false
        });
    };
    handleShowSheet = () => {
        let { showSheet } = this.state;
        this.setState({
            showSheet: !showSheet
        });
    };

    handleChange = val => {
        console.log(val);
        let id = this.props.match.params.ExamId;
        let { cur, list, data, answer } = this.state;
        let curItem = list[cur];
        if (curItem.type * 1 == 1) {
            answer[curItem.subjectid] = val;
        } else {
            let curAnswer = answer[curItem.subjectid] || [];
            let index = curAnswer.indexOf(val);
            if (index == -1) {
                curAnswer.push(val);
            } else {
                curAnswer.splice(index, 1);
            }
            answer[curItem.subjectid] = curAnswer;
        }
        console.log(answer);
        // localStorage['onlineexam_answer_' + id] = JSON.stringify(answer)
        this.setState({
            answer
        });
    };

    handleTimeOut = () => {
        this.setState({
            istimeover: true
        });
        console.log("out");
    };
    handleSubmit = async () => {
        Toast.loading("答案提交中...", 0);
        let { answer, list, istimeover, isover } = this.state;
        if (isover) {
            return Toast.info("你已经提交过答案了");
        }
        // let arr = Object.keys(answer);
        // if (!istimeover && arr.length < list.length) {
        //     return Toast.info('你还有' + (list.length - arr.length) + '道问题没有回答')
        // }
        let paperid = this.props.match.params.ExamId;
        let examstarttime = formatDate(localStorage["onlineexam_time_" + paperid] * 1).fulldate;
        let examendtime = formatDate().fulldate;
        let res = await Request("answer/save", {
            method: "post",
            data: {
                paperid: paperid,
                orgId: localStorage.organizationId,
                answerperson: localStorage.userId,
                examstarttime,
                examendtime,
                answers: answer
            }
        });
        if (res.success) {
            Toast.hide();
            this.setState({ isover: true });
            let { history } = this.props;
            const alertInstance = alert("答题得分", res.data.sum + "分", [
                { text: "关闭", onPress: () => console.log("cancel"), style: "default" },
                { text: "前往查看答案", onPress: () => history.replace("/onlineexam/record/" + res.data.seno) }
            ]);
        } else {
            Toast.info(res.message);
        }
    };
    render() {
        let { match } = this.props;
        let id = match.params.ExamId;
        let { cur, list, answer, timeout, istimeover, showSheet, isover, detail } = this.state;
        if (list.length == 0) {
            return null;
        }
        let curItem = list[cur];
        let curAnswer = answer[curItem.subjectid];
        return (
            <Layout>
                <NavBar
                    mode="light"
                    icon={<LeftIcon />}
                    rightContent={<div onClick={this.handleShowSheet}>答题卡</div>}
                >
                    {timeout != 0 && (
                        <CountDown
                            time={timeout}
                            id={id}
                            onTimeOut={this.handleTimeOut}
                            isover={isover}
                            overtitle={isover ? "答题结束" : null}
                        />
                    )}
                </NavBar>
                <Content className={styles.content}>
                    <Steps cur={cur} curItem={curItem} totalscore={detail.totalscore} list={list} />
                    <div className={styles.topic}>{curItem.subjectname}</div>
                    <Options curItem={curItem} curAnswer={curAnswer} onChange={this.handleChange} />
                    {istimeover && <div className={styles.timeover} />}
                    {showSheet && <AnswerSheet list={list} answer={answer} onClick={this.handleChangeSheet} />}
                </Content>
                {istimeover ? (
                    <Footer>
                        <Btn onClick={this.handleSubmit}>提交答案</Btn>
                    </Footer>
                ) : (
                    <Footer>
                        <Btn border disabled={cur == 0} onClick={this.handlePre}>
                            上一题
                        </Btn>
                        {cur + 1 != list.length ? (
                            <Btn disabled={cur + 1 == list.length} onClick={this.handleNext}>
                                下一题
                            </Btn>
                        ) : (
                            <Btn onClick={this.handleSubmit}>提交答案</Btn>
                        )}
                    </Footer>
                )}
            </Layout>
        );
    }
}
