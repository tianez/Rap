/**
 * 高阶组件
 * 弹出模态组件
 */
import React, { Component } from "react";
import qs from "qs";

const ModalComponents = Component =>
    class extends React.Component {
        handleShowModal = () => {
            let { id, query } = this.props;
            query = query.set(id + "_visible", true);
            let { history } = this.props;
            history.push(history.location.pathname + "?" + qs.stringify(query));
        };
        render() {
            let { children, style, className, id, query, ...props } = this.props;
            let visible = query[id + "_visible"];
            return (
                <div onClick={this.handleShowModal} style={style} className={className || ""}>
                    {children}
                    {visible && <Component {...props} />}
                </div>
            );
        }
    };

export default ModalComponents;
