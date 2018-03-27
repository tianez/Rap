import React, { Component } from "react";
import axios from "axios";

import styles from "./home.scss";

import asyncComponent from "Extended/asyncComponent";
const Header = asyncComponent(() => import("../Layout/Header"));

import { AuthComponent } from "Hoc/Authorized";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    logoText: state._logoText,
    logoText2: state
}))
export default class Home extends Component {
    async componentDidMount() {
        let db = new Dexie("friend_database3");
        db.version(6).stores({
            friends: "++id, name,shoeSize",
            users: "++id, name,sex,age"
        });
        db.users.put({ name: "Nicolas2", shoeSize: 8, age: 30, sex: "man" }).catch(function(error) {
            console.log("Ooops: " + error);
        });
        db.friends
            .put({ name: "Nicolas", shoeSize: 8, age: 30 })
            .then(function() {
                //
                // Then when data is stored, read from it
                //
                return db.friends.get("Nicolas");
            })
            .then(function(friend) {
                console.log("Nicolas has shoe size " + friend.shoeSize);
            })
            .catch(function(error) {
                console.log("Ooops: " + error);
            });
        // let res = await db.users.get("Nicolas2");
        // console.log(res);
    }
    handleClick = () => {
        this.props.dispatch.set({ _logoText: "logoText2" });
        this.props.dispatch.callBack(this.reqData);
    };
    reqData = async state => {
        let res = await axios("http://yapi.demo.qunar.com/mock/209/te/1111");
        return res.data;
    };
    render() {
        return (
            <div className={styles.content}>
                <Header />
                <AuthComponent auth="ids">
                    <h1>欢迎使用云上视界后台管理系统</h1>
                </AuthComponent>
                <h1 onClick={this.handleClick}>使用的技术</h1>
                <h2>包管理：npm</h2>
                <h2>代码管理：Git</h2>
                <h2>打包编译：nodejs+webpack</h2>
                <h2>推荐IDE编辑器：Visual Studio Code</h2>
                <h2>技术栈：</h2>
                <h3>核心：react + react-dom</h3>
                <h3>路由：react-router4</h3>
                <h3>网络请求：axios</h3>
                <h3>全局状态管理：seamless-immutable（不可变数据）</h3>
                <h3>样式解决方案：styled-components + css modules </h3>
                <h3>UI：Antd（阿里蚂蚁金服开源）</h3>
                <h1>开发人员：tianez</h1>
            </div>
        );
    }
}
