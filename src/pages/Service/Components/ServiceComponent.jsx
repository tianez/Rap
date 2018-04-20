import React, { Component } from "react";
import styled from "styled-components";
import { Grid, WhiteSpace } from "antd-mobile";

const GridView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

const IconView = styled.div`
    width: 0.48rem;
    height: 0.48rem;
    line-height: 0.48rem;
    font-size: 0.4rem;
    text-align: center;
    margin: 0 auto;
    display: block;
    color: #000;
`;

const TitleView = styled.div`
    font-size: 0.16rem;
    color: #000;
    line-height: 0.24rem;
`;

const data = [
    {
        icon: "iconfont icon-baidu1",
        title: "百度",
        url: "https://www.baidu.com/"
    },
    {
        icon: "iconfont icon-logo-weibo",
        title: "微博",
        url: "https://weibo.com/"
    },
    {
        icon: "iconfont icon-tongxun",
        title: "电话归属地查询",
        url: "https://weibo.com/"
    }
];
export default class ServiceComponent extends Component {
    handleClick = ({ url }) => {
        if (url.indexOf("https://") == 0 || url.indexOf("http://") == 0) {
            return this.props.history.push(`/iframe?outlink=${url}`);
        }
        this.props.history.replace(`/${url}`);
    };
    render() {
        return (
            <div>
                <WhiteSpace />
                <Grid
                    data={data}
                    columnNum={3}
                    // hasLine={false}
                    onClick={this.handleClick}
                    renderItem={dataItem => (
                        <GridView>
                            <IconView className={dataItem.icon} />
                            <TitleView>{dataItem.title}</TitleView>
                        </GridView>
                    )}
                />
            </div>
        );
    }
}
