import React, { Component } from "react";

import AttendanceAddTime from "./AttendanceAddTime";

import ModalComponents from "../ModalComponents/ModalComponents";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query
}))
@ModalComponents
export default class AttendanceTimeModal extends Component {
    render() {
        return <AttendanceAddTime {...this.props} />;
    }
}
