import React, { Component } from "react";
import { Toast } from "antd-mobile";
import formValidator from "Utils/formValidator";
const FormValidator = Component =>
    class extends React.Component {
        validator = (fields, data) => {
            let initdata = $obj;
            fields.map(f => {
                if (f.defaultValue || f.defaultValue == 0 || f.defaultValue == false) {
                    initdata = initdata.set(f.name, f.defaultValue);
                }
            });
            data = initdata.merge(data);
            let errors = formValidator(fields, data);
            if (errors.length > 0) {
                Toast.info(errors[0]);
            }
            return {
                data,
                errors
            };
        };
        render() {
            return <Component {...this.props} formValidator={this.validator} />;
        }
    };

export default FormValidator;
