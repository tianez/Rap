import React, { Component } from "react";
import { List, Checkbox } from "antd-mobile";

const CheckboxItem = Checkbox.CheckboxItem;

const Options = ({ curItem, curAnswer, onChange }) => {
    let arr = ["A", "B", "C", "D", "E", "F"];
    let opts = curItem.subjecanswertList || curItem.answerList;
    return (
        <List>
            {opts.map((i, index) => {
                if (curItem.type * 1 == 1) {
                    return (
                        <CheckboxItem
                            key={i.id}
                            checked={i.answerTitle == curAnswer}
                            onChange={() => onChange && onChange(i.answerTitle)}
                        >
                            <div>
                                {arr[index]} {i.answerContent}
                            </div>
                        </CheckboxItem>
                    );
                } else {
                    curAnswer = curAnswer || [];
                    return (
                        <CheckboxItem
                            key={i.id}
                            checked={curAnswer.indexOf(i.answerTitle) != -1}
                            onChange={() => onChange && onChange(i.answerTitle)}
                        >
                            <div>
                                {arr[index]} {i.answerContent}
                            </div>
                        </CheckboxItem>
                    );
                }
            })}
        </List>
    );
};

export default Options;
