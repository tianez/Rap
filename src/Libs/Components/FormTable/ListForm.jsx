import React, { Component } from "react";

import { List, WhiteSpace } from "antd-mobile";

import Departments from "../Form/Departments";
import Organization from "../Form/Organization";
import DatePicker from "../Form/DatePicker";
import InputItem from "../Form/InputItem";
import TextareaItem from "../Form/TextareaItem";
import TextareaItem2 from "../Form/TextareaItem2";
import Switch from "../Form/Switch";
import Radio from "../Form/Radio";
import Slider from "../Form/Slider";
import Select from "../Form/Select";
import Attachment from "../Form/Attachment";
import Images from "../Form/Images";
import PickerCity from "../Form/PickerCity";

import styles from "../Form/Form.scss";

const ListForm = ({ json, data = {}, onChange }) => {
    return (
        <List renderHeader={() => json.formName} className={styles.listform}>
            {json.fields.map((field, index) => {
                let props = {
                    field,
                    onChange,
                    value: data[field.name],
                    key: field.name
                };
                switch (field.controlType) {
                    case "datepicker":
                        return <DatePicker key={data[field.name]} {...props} />;
                        break;
                    case "text":
                        return <InputItem {...props} />;
                        break;
                    case "number":
                        return <InputItem {...props} type="number" />;
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
                    case "departments":
                        return <Departments {...props} multiple={field.multiple} />;
                        break;
                    case "organizations":
                        return <Organization {...props} {...field} />;
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
