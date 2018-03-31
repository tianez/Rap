import React, { Component } from "react";

import AttendanceTime from "./AttendanceTime";

import ModalComponents from "../ModalComponents/ModalComponents";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query
}))
@ModalComponents
export default class AttendanceTimeModal extends Component {
    render() {
        return <AttendanceTime {...this.props} />;
    }
}
