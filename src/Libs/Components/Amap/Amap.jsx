/**
 * 高德地图
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { List, Radio, NavBar, Icon } from "antd-mobile";

const RadioItem = Radio.RadioItem;
import Layout from "Components/Layout/Layout";

const ContainerView = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const AmapView = styled.div`
    width: 100%;
    height: 200px;
    min-height: 200px;
`;

const ListView = styled.div`
    width: 100%;
    flex: 1;
    overflow-y: auto;
`;

export default class Amap extends Component {
    static defaultProps = {
        center: [109.485746, 30.269809]
    };
    constructor() {
        super();
        this.state = {
            data: {}
        };
        window.global_InitAmap = this.global_InitAmap;
    }
    componentDidMount() {
        YSSJ.getMapNew({ callback: "global_InitAmap" });
    }
    global_InitAmap = lngt => {
        // let { center } = this.props;
        // let lnglat = center.join(",");
        this.handleReqLocData(lngt.longitude + "," + lngt.latitude);
        this.map = new AMap.Map("amap", {
            resizeEnable: true,
            zoom: 16,
            center: [lngt.longitude, lngt.latitude]
        });
        this.marker1 = new AMap.Marker({
            map: this.map,
            offset: new AMap.Pixel(-3, -3),
            content: "<div style='background:#f00;width:6px;height:6px;border-radius:6px;z-index:300;'></div>"
        });
        this.marker2 = new AMap.Marker({
            map: this.map
        });
        this.map.on("moveend", this.handleMoveEnd);
        this.map.plugin("AMap.Geolocation", () => {
            let geolocation = new AMap.Geolocation({
                enableHighAccuracy: true, //是否使用高精度定位，默认:true
                timeout: 10000, //超过10秒后停止定位，默认：无穷大
                buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition: "RB"
            });
            this.map.addControl(geolocation);
            // geolocation.getCurrentPosition();
            // AMap.event.addListener(geolocation, "complete", this.handleComplete); //返回定位信息
            // AMap.event.addListener(geolocation, "error", this.handleError); //返回定位出错信息
        });
    };
    handleMoveEnd = e => {
        let center = this.map.getCenter();
        this.marker2.moveTo(center, 2500);
        // this.handleReqLocData(data.location);
    };
    //解析定位结果
    handleComplete = data => {
        console.log("data", data);
        alert(JSON.stringify(data.position));
    };
    //解析定位错误信息
    handleError = data => {
        console.log(data);
        alert(JSON.stringify(data));
    };
    handleReqLocData = async lnglat => {
        let address = await axios("http://restapi.amap.com/v3/geocode/regeo", {
            params: {
                key: "db710fd09062025649756820d9e1769e",
                location: lnglat,
                extensions: "all",
                radius: 200
            }
        });
        if (address.status == 200 && address.data.infocode == 10000) {
            let { addressList } = this.state;
            this.setState({
                addressList: addressList ? addressList : address.data.regeocode.aois[0] || {},
                pois: address.data.regeocode.pois
            });
        }
    };

    handleChange = data => {
        let location = data.location.split(",");
        let center = new AMap.LngLat(location[0], location[1]);
        this.map.setCenter(center);
        this.marker2.moveTo(center, 2500);
        this.setState({
            addressList: data
        });
        this.handleReqLocData(data.location);
    };
    handleRightClick = () => {
        let { addressList } = this.state;
        let { onRightClick } = this.props;
        onRightClick && onRightClick(addressList);
    };
    render() {
        let { pois, addressList } = this.state;
        let selected = addressList ? addressList.id : "";
        return ReactDOM.createPortal(
            <Layout>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" size="lg" />}
                    onLeftClick={() => window.history.back()}
                    rightContent={<div onClick={this.handleRightClick}>完成</div>}
                >
                    选择地点
                </NavBar>
                <ContainerView>
                    <AmapView style={this.props.amapstyle} id="amap" />
                    {pois && (
                        <ListView>
                            <List renderHeader={() => "位置"}>
                                {pois.map((i, index) => (
                                    <RadioItem
                                        key={index}
                                        checked={selected == i.id}
                                        onClick={() => this.handleChange(i)}
                                    >
                                        {i.name}
                                    </RadioItem>
                                ))}
                            </List>
                        </ListView>
                    )}
                </ContainerView>
            </Layout>,
            document.getElementById("app")
        );
    }
}
