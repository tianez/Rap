import React, { Component } from "react";

import Amap from "./Amap";
import ModalComponents from "../ModalComponents/ModalComponents";

@ModalComponents
export default class AmapModal extends Component {
    render() {
        return <Amap {...this.props} />;
    }
}

// export default class AmapModal extends Component {
//     /**
//      * 显示modal
//      */
//     handleShowModal = () => {
//         let { id, melocation } = this.props;
//         let { query, onPushQuery } = melocation;
//         let newquery = {};
//         newquery[id + "_visible"] = true;
//         onPushQuery({
//             visible: true,
//             ...newquery,
//             ...query
//         });
//     };
//     render() {
//         let { children, style, className, id, melocation, ...props } = this.props;
//         let visible = melocation.query[id + "_visible"];
//         return (
//             <div onClick={this.handleShowModal} style={style} className={className || ""}>
//                 {children}
//                 {visible && <Amap {...props} />}
//             </div>
//         );
//     }
// }
