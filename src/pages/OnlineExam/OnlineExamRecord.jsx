import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavBar, Icon, List, Flex, WhiteSpace, Tabs, Toast } from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

import formatDate from "Utils/formatDate";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import AnswerSheet from "./Compontents/AnswerSheet";
import Steps from "./Compontents/Steps";
import Options from "./Compontents/Options";
import Btn from "./Mincomp/Btn";
import Footer from "./Mincomp/Footer";

import styles from "./OnlineExamDetail.scss";

export default class OnlineExamRecord extends Component {
    constructor(props) {
        super(props);
        let id = props.match.params.ExamId;
        this.state = {
            cur: 0,
            list: [],
            answer: {}
        };
    }
    async componentWillMount() {
        let res = await Request("answer/detail", {
            params: {
                id: this.props.match.params.ExamId
            }
        });
        if (res.success) {
            let { detail } = res.data;
            this.setState({
                timeout: detail.examtime * 1,
                list: detail.detailInfoList,
                score: detail.score
                // answers: detail.detailInfoList,
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
    render() {
        let { match } = this.props;
        let id = match.params.ExamId;
        let { cur, list, answer, showSheet, score } = this.state;
        if (list.length == 0) {
            return null;
        }
        let curItem = list[cur];
        let curAnswer = curItem.answer;
        if (curItem.type * 1 == 2) {
            curAnswer = curAnswer.split(",") || [];
        }
        let subjecanswertList = curItem.subjecanswertList.map(d => {
            return d.answerTitle;
        });
        let arr = ["A", "B", "C", "D", "E", "F"];
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>
                    得分：{score || 0}
                </NavBar>
                <Content className={styles.content}>
                    <Steps cur={cur} curItem={curItem} list={list} totalscore={10} />
                    <div className={styles.topic}>{curItem.content}</div>
                    <Options curItem={curItem} curAnswer={curAnswer} onChange={this.handleChange} />
                    <WhiteSpace />
                    <List>
                        <Item>
                            正确答案：
                            {curItem.sureanswerArr.map(d => {
                                return <span key={d}>{arr[subjecanswertList.indexOf(d)]} </span>;
                            })}
                        </Item>
                        <Item>
                            解析：
                            <Brief>{curItem.remarks}</Brief>
                        </Item>
                    </List>
                </Content>
                <Footer>
                    <Btn border disabled={cur == 0} onClick={this.handlePre}>
                        上一题
                    </Btn>
                    <Btn disabled={cur + 1 == list.length} onClick={this.handleNext}>
                        下一题
                    </Btn>
                </Footer>
            </Layout>
        );
    }
}
