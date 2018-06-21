import React, { Component } from "react";

import { List, WhiteSpace } from "antd-mobile";

import InputItem from "./InputItem";
import Images from "./Images";
import TextareaItem2 from "./TextareaItem2";
import Select from "./Select";
import PickerCity from "./PickerCity";
import Attachment from "./Attachment";
import DatePicker from "./DatePicker";
import Radio from "./Radio";

import Switch from "./Switch";
import Slider from "./Slider";

import styles from "./Form.scss";

const ListForm = ({ fields = $arr, data = {}, onChange, title }) => {
    return (
        <List renderHeader={title} className={styles.listform}>
            {fields.map((field, index) => {
                let props = {
                    ...field,
                    onChange,
                    value: data[field.name],
                    key: field.name
                };
                switch (field.type) {
                    case "datepicker":
                        return <DatePicker {...props} />;
                        break;
                    case "text":
                        return <InputItem {...props} />;
                        break;
                    case "number":
                        return <InputItem {...props} type="number" />;
                        break;
                    case "digit":
                        return <InputItem {...props} type="digit" />;
                        break;
                    case "phone":
                        return <InputItem {...props} type="phone" />;
                        break;
                    case "textarea":
                        return <TextareaItem2 {...props} />;
                        break;
                    case "switch":
                        return <Switch {...props} />;
                        break;
                    case "radio":
                        return <Radio {...props} />;
                        break;
                    case "slider":
                        return <Slider {...props} />;
                        break;
                    case "select":
                        return <Select {...props} />;
                        break;
                    case "singlepicker":
                        return <Select {...props} />;
                        break;
                    case "pickercity":
                        return <PickerCity {...props} />;
                        break;
                    case "attachment":
                        return <Attachment image={false} {...props} />;
                        break;
                    case "images":
                        return <Images {...props} />;
                        break;
                    case "WhiteSpace":
                        return <WhiteSpace key={index} className={styles.whiteSpace} />;
                        break;
                    default:
                        return null;
                        break;
                }
            })}
        </List>
    );
};

export default ListForm;
