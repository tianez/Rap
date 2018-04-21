import React, { Component } from "react";
import { List, WhiteSpace, Toast } from "antd-mobile";
const Item = List.Item;
import ContentView from "Views/Layout/ContentView";

import styles from "./Friend.scss";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    friends: state.friends
}))
export default class FriendComponent extends Component {
    state = {
        friends: []
    };
    componentDidMount() {
        let { friends } = this.props;
        if (!friends) {
            this.getFriends();
        }
    }
    getFriends = async () => {
        let filter = {
            where: {
                userid: localStorage.userId || ""
            },
            skip: 0,
            limit: 20
        };
        let res = await Apicloud("Friend", {
            params: {
                filter
            }
        });
        if (res.success) {
            this.props.dispatch.set({
                friends: res.data
            });
        }
        // let friends = await db.friends.toArray();
        // this.setState({
        //     friends
        // });
    };
    deleteFriend = async id => {
        let res = await Apicloud.delete("Friend/" + id);
        console.log(res);

        if (res.success) {
            let friends = this.props.friends.filter(d => {
                return d.id !== id;
            });
            this.props.dispatch.set({
                friends
            });
            Toast.info("好友删除成功！");
        }
        // let res = await db.friends.delete(id);
        // this.getFriends();
    };
    render() {
        let { history, match, friends = $arr } = this.props;
        return (
            <ContentView>
                <WhiteSpace />
                <List>
                    <Item onClick={() => history.push(`${match.url}/add`)}>新增好友</Item>
                </List>
                <div className={styles.title}>DB</div>
                <List>
                    {friends.map(d => {
                        return (
                            <Item key={d.id} onClick={() => this.deleteFriend(d.id)}>
                                <img className={styles.avatar} src="./public/images/avatar/0.jpg" />
                                <span>{d.username}</span>
                            </Item>
                        );
                    })}
                </List>
                <div className={styles.title}>A</div>
                <List>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/0.jpg" />
                        <span>情诗和</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/1.jpg" />
                        <span>哈耶克</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/2.jpg" />
                        <span>乌拉拉</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/3.jpg" />
                        <span>可见光</span>
                    </Item>
                </List>
                <div className={styles.title}>B</div>
                <List>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/4.jpg" />
                        <span>情诗和</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/5.jpg" />
                        <span>哈耶克</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/6.jpg" />
                        <span>乌拉拉</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/3.jpg" />
                        <span>可见光</span>
                    </Item>
                </List>
                <div className={styles.title}>C</div>
                <List>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/0.jpg" />
                        <span>情诗和</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/1.jpg" />
                        <span>哈耶克</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/2.jpg" />
                        <span>乌拉拉</span>
                    </Item>
                    <Item onClick={() => {}}>
                        <img className={styles.avatar} src="./public/images/avatar/3.jpg" />
                        <span>可见光</span>
                    </Item>
                </List>
            </ContentView>
        );
    }
}
