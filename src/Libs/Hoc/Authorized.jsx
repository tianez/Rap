/**
 * 权限验证
 */
import React, { Component } from "react";
import { contextConsumers } from "Libs/ContextRudex";

const NoAuth = ({ tip }) => {
    return <div>{tip || "对不起，你无权访问该模块"}</div>;
};

export const AuthHoc = (auth, tip) => Component =>
    class extends Component {
        render() {
            if (!auto) {
                return <Component {...this.props} />;
            }
            let isok = auths.indexOf(auth);
            if (isok == -1) {
                if (typeof tip == "object") {
                    return tip;
                }
                return <NoAuth tip={tip} />;
            }
            return <Component {...this.props} />;
        }
    };

export const AuthComponent = ({ children, auth, show = false, ...props }) => {
    if (!auth) {
        return children;
    }
    let isok = auths.indexOf(auth);
    if (isok == -1) {
        if (show) {
            return <NoAuth {...props} />;
        }
        return null;
    }
    return children;
};

export default { AuthHoc, AuthComponent };
