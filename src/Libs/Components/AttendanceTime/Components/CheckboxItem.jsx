/**
 * 选择组件
 */
import React, { Component } from "react";

const CheckboxItem = ({ onClick, checked, value = 0, children }) => {
    let cls = checked ? "am-checkbox am-checkbox-checked" : "am-checkbox";
    return (
        <div className="am-list-item am-checkbox-item am-list-item-middle" onClick={() => onClick(value)}>
            <div className="am-list-thumb">
                <label className="am-checkbox-wrapper">
                    <span className={cls}>
                        <span className="am-checkbox-inner" />
                    </span>
                </label>
            </div>
            <div className="am-list-line">
                <div className="am-list-content">{children}</div>
            </div>
        </div>
    );
};

export default CheckboxItem;
