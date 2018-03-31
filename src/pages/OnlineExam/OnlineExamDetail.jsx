import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavBar, Icon, List, Checkbox, Flex, WhiteSpace, Tabs, Toast } from "antd-mobile";

const CheckboxItem = Checkbox.CheckboxItem;
const Item = List.Item;
const Brief = Item.Brief;

import formatDate from "Utils/formatDate";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import AnswerSheet from "./Compontents/AnswerSheet";
import CountDown from "./Compontents/CountDown";
import Steps from "./Compontents/Steps";
import Options from "./Compontents/Options";
import Btn from "./Mincomp/Btn";

import styles from "./OnlineExamDetail.scss";

const Footer = styled.div`
    display: flex;
    line-height: 0.44rem;
    height: 0.44rem;
`;

export default class OnlineExamDetail extends Component {
    constructor(props) {
        super(props);
        let id = props.match.params.ExamId;
        this.state = {
            cur: 0,
            list: [],
            answer: localStorage["onlineexam_answer_" + id] ? JSON.parse(localStorage["onlineexam_answer_" + id]) : {},
            timeout: 0,
            istimeover: false,
            showSheet: false,
            showScore: false,
            score: null
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
                timeout: detail.examtime * 1,
                list: detail.infos
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
            showSheet: false,
            showScore: false
        });
    };
    handleShowSheet = () => {
        let { showSheet } = this.state;
        this.setState({
            showSheet: !showSheet
        });
    };
    handleShowScore = () => {
        let { showScore } = this.state;
        this.setState({
            showScore: !showScore
        });
    };
    handleSubmit = async () => {
        let { answer, list, istimeover } = this.state;
        let arr = Object.keys(answer);
        if (!istimeover && arr.length < list.length) {
            return Toast.info("你还有" + (list.length - arr.length) + "道问题没有回答");
        }
        let paperid = this.props.match.params.ExamId;
        let examstarttime = formatDate(localStorage["onlineexam_time_" + paperid] * 1).fulldate;
        let examendtime = formatDate().fulldate;
        console.log(examendtime);
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
        console.log(res);
        // this.setState({
        //     score: answer,
        //     isover: true,
        // })
        console.log(answer);
    };
    handleChange = val => {
        let id = this.props.match.params.ExamId;
        let { cur, list, data, answer } = this.state;
        let curItem = list[cur];
        if (curItem.type * 1 == 1) {
            answer[curItem.id] = val;
        } else {
            let curAnswer = answer[curItem.id] || [];
            let index = curAnswer.indexOf(val);
            if (index == -1) {
                curAnswer.push(val);
            } else {
                curAnswer.splice(index, 1);
            }
            answer[curItem.id] = curAnswer;
        }
        localStorage["onlineexam_answer_" + id] = JSON.stringify(answer);
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
    render() {
        let { match } = this.props;
        let id = match.params.ExamId;
        let { cur, list, answer, timeout, istimeover, showSheet, showScore, score, isover } = this.state;
        if (list.length == 0) {
            return null;
        }
        let curItem = list[cur];
        let curAnswer = answer[curItem.id];
        return (
            <Layout>
                <NavBar
                    mode="light"
                    icon={<LeftIcon />}
                    rightContent={
                        score ? (
                            <div onClick={this.handleShowScore}>成绩单</div>
                        ) : (
                            <div onClick={this.handleShowSheet}>答题卡</div>
                        )
                    }
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
                <Content>
                    <Steps cur={cur} curItem={curItem} list={list} />
                    <div className={styles.topic}>{curItem.subjectname}</div>
                    <Options curItem={curItem} curAnswer={curAnswer} onChange={this.handleChange} />
                    <WhiteSpace />
                    {score && (
                        <List>
                            <Item>正确答案：A，B</Item>
                        </List>
                    )}
                    {istimeover && <div className={styles.timeover} />}
                    {showSheet && <AnswerSheet list={list} answer={answer} onClick={this.handleChangeSheet} />}
                    {showScore && <AnswerSheet list={list} answer={answer} onClick={this.handleChangeSheet} />}
                </Content>
                {istimeover && !score ? (
                    <Footer>
                        <Btn onClick={this.handleSubmit}>提交答案</Btn>
                    </Footer>
                ) : (
                    <Footer>
                        <Btn border disabled={cur == 0} onClick={this.handlePre}>
                            上一题
                        </Btn>
                        {cur + 1 != list.length || score ? (
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
