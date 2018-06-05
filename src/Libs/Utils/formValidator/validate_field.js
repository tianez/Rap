import validate_required from "./validate_required";
import validate_maxlength from "./validate_maxlength";
import validate_minlength from "./validate_minlength";
import validate_CardNo from "./validate_CardNo";
import validate_conventional from "./validate_conventional";

const validate_field = (file, value) => {
    if (file.rules) {
        let error = file.rules.map(rule => {
            let validate = {
                value,
                name: file.name,
                title: file.title
            };
            let ruleKey = "";
            if (typeof rule == "string") {
                ruleKey = rule;
                validate = {
                    ...validate,
                    ruleKey,
                    ruleValue: true
                };
            } else {
                let keys = Object.keys(rule).filter(d => {
                    return d !== "message";
                });
                ruleKey = keys[0];
                validate = {
                    ...validate,
                    ruleKey,
                    ruleValue: rule[ruleKey],
                    message: rule.message
                };
            }
            let isError = false;
            switch (ruleKey) {
                case "required":
                    isError = validate_required(validate);
                    break;
                case "max":
                    isError = validate_maxlength(validate);
                    break;
                case "min":
                    isError = validate_minlength(validate);
                    break;
                case "cardno":
                    isError = validate_CardNo(validate);
                    break;
                default:
                    isError = validate_conventional(validate);
                    break;
            }
            return isError;
        });
        error = error.filter(err => {
            return err !== false && err !== undefined;
        });
        if (error.length > 0) {
            return error;
        }
    }
};

export default validate_field;
