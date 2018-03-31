import React, { Component } from "react";
import Warper from "./Warper";
import datajson from "Components/FormTable/PickerCityJson";

// import asyncComponent from "Extended/asyncComponent";
// const datajson = asyncComponent(() => import("Components/FormTable/PickerCityJson"));

const City = props => {
    let citys = JSON.parse(props.filedValue);
    let city = findCity(citys, datajson);
    return (
        <Warper title={props.filedTitle}>
            <div>{city.join("，")}</div>
        </Warper>
    );
};

export default City;

const findCity = (data, datajson, index = 0) => {
    let length = data.length;
    let res = [];
    if (length > index) {
        let curdata = data[index];
        let i = datajson.findIndex(djson => {
            return djson.value == curdata.toString();
        });
        res = res.concat([datajson[i].label]);
        let children = findCity(data, datajson[i].children, ++index);
        res = res.concat(children);
    }
    return res;
};
