import React, { Component } from "react";

import AttendanceDate from "./AttendanceDate";

import ModalComponents from "../ModalComponents/ModalComponents";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query
}))
@ModalComponents
export default class AttendanceDateModal extends Component {
    render() {
        return <AttendanceDate {...this.props} />;
    }
}
