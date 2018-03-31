import React, { Component } from "react";

import Amap from "./Amap";
import ModalComponents from "../ModalComponents/ModalComponents";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query
}))
@ModalComponents
export default class AmapModal extends Component {
    render() {
        return <Amap {...this.props} />;
    }
}
