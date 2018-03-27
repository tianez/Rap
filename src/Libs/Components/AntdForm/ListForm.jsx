import React, { Component } from "react";

import InputItem from "./InputItem";
import InputNumber from "./InputNumber";
import TextareaItem from "./TextareaItem";
import TextareaItem2 from "./TextareaItem2";
import PickerCity from "./PickerCity";
import Images from "./ImagesItem";
import SelectItem from "./SelectItem";
// import SelectUser from './SelectUser';
// import SelectRole from './SelectRole';

// import Departments from './Departments';
// import Organization from './Organization';
import DatePickerItem from "./DatePickerItem";

// import Switch from './Switch';
import RadioItem from "./RadioItem";
import CheckboxItem from "./CheckboxItem";
// import Slider from './Slider';

// import Attachment from './Attachment';
import Member from "./Member/Member";
import Ueditor from "./Ueditor";

const ListForm = ({ fields = [], data = {}, onChange }) => {
    return (
        <div>
            {fields.map((field, index) => {
                if (field.isplaceholder) {
                    return null;
                }
                let props = {
                    field,
                    ...field,
                    onChange,
                    value: data[field.name],
                    key: field.name
                };
                switch (field.type) {
                    case "text":
                        return <InputItem {...props} />;
                        break;
                    case "password":
                        return <InputItem {...props} type="password" />;
                        break;
                    case "number":
                        return <InputNumber {...props} />;
                        break;
                    case "textarea":
                        return <TextareaItem2 {...props} />;
                        break;
                    case "textarea2":
                        return <TextareaItem {...props} />;
                        break;
                    case "images":
                        return <Images {...props} />;
                        break;
                    case "datepicker":
                        return <DatePickerItem {...props} />;
                        break;
                    // case 'switch':
                    //     return <Switch {...props} />
                    //     break;
                    case "radio":
                        return <RadioItem {...props} />;
                        break;
                    case "checkbox":
                        return <CheckboxItem {...props} />;
                        break;
                    // case 'slider':
                    //     return <Slider {...props} />
                    //     break;
                    case "select":
                        return <SelectItem {...props} />;
                        break;
                    case "singlepicker":
                        return <SelectItem {...props} />;
                        break;

                    // case 'users':
                    //   return <SelectUser {...props} />
                    //   break;
                    // case 'roles':
                    //   return <SelectRole {...props} />
                    //   break;
                    case "pickercity":
                        return <PickerCity {...props} />;
                        break;
                    // case 'attachment':
                    //     return <Attachment image={false} {...props} />
                    //     break;

                    // case 'departments':
                    //     return <Departments {...props} multiple={field.multiple} />
                    //     break;
                    case "member":
                        return <Member {...props} />;
                        break;
                    case "ueditor":
                        return <Ueditor {...props} />;
                        break;
                    default:
                        return null;
                        break;
                }
            })}
        </div>
    );
};

export default ListForm;
