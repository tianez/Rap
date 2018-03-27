/**
 * 高阶组件
 * 弹出模态组件
 */
import React, { Component } from "react";
import ModalView from "Views/Layout/ModalView";
const ModalComponents = Component =>
    class extends React.Component {
        state = {
            visible: false
        };
        handleShowModal = () => {
            this.setState({
                visible: true
            });
        };
        handleHideModal = () => {
            this.setState({
                visible: false
            });
        };
        render() {
            let { children, style, className, ...props } = this.props;
            let { visible } = this.state;
            return (
                <div onClick={this.handleShowModal} style={style} className={className || ""}>
                    {children}
                    {visible && (
                        <ModalView onClick={e => e.stopPropagation()}>
                            <Component {...props} onHideModal={this.handleHideModal} />
                        </ModalView>
                    )}
                </div>
            );
        }
    };

export default ModalComponents;
