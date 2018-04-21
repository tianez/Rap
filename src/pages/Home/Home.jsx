import React, { Component } from "react";
import { NavBar, TabBar } from "antd-mobile";

import { Link } from "react-router-dom";

import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";

import reqTest from "Hoc/reqTest";
import Apicloud2 from "Utils/Apicloud2";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Switch, Redirect, Route } from "react-router-dom";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    init: state.init
}))
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            fullScreen: false,
            show: false,
            items: [
                { id: 1, text: "Buy eggs" },
                { id: 2, text: "Pay bills" },
                { id: 3, text: "Invite friends over" },
                { id: 4, text: "Fix the TV" }
            ]
        };
    }
    async componentDidMount() {
        // this.handleDb();
        let filter = {
            where: {},
            skip: 0,
            limit: 20
        };
        Apicloud2.get(
            "article",
            filter,
            function(err, res) {
                let data = JSON.parse(res.text);
                console.log(data);
            }.bind(this)
        );

        // let res = await Apicloud("article", {
        //     params: {
        //         filter
        //     }
        // });
        // console.log(res);
    }
    handleDb = async () => {
        let res = await db.friends.add({
            name: "Camilla",
            age: 25
        });
        console.log(res);
        let res2 = await db.friends.put({ id: 100, name: "Foo22", age: 43 });
        console.log(res2);
        let res3 = await db.friends
            .where("age")
            .above(25)
            .toArray();
        console.log(res3);
    };
    render() {
        let { init, history, location } = this.props;
        const { items, show } = this.state;
        return (
            <Layout title="首页" selectedTab="home">
                <ContentView style={{ height: "100%", background: "#fff" }}>
                    首页
                    <button
                        className="remove-btn"
                        onClick={() => {
                            this.setState(state => ({
                                show: !state.show
                            }));
                        }}
                    >
                        点击
                    </button>
                    {/* <img src="http://yyyweb.qiniudn.com/uploads/2014/06/ff46474bd73acfd4295da9213b3d3e1b.jpg" alt="" /> */}
                    <Link to="/home/1">home1</Link>
                    <div>
                        <Link to="/login">登录</Link>
                    </div>
                    <Link to="/home/2">home2</Link>
                    <TransitionGroup className="todo-list">
                        {show && (
                            <CSSTransition key={"show"} timeout={5000} classNames="fade">
                                <div>show</div>
                            </CSSTransition>
                        )}
                        {items.map(({ id, text }) => (
                            <CSSTransition key={id} timeout={5000} classNames="fade">
                                <div>
                                    <button
                                        className="remove-btn"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >
                                        &times;
                                    </button>
                                    {text}
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    <input type="file" name="" id="" />
                </ContentView>
            </Layout>
        );
    }
}

const Home1 = () => {
    return <div>Home1</div>;
};

const Home2 = () => {
    return <div>Home2</div>;
};
