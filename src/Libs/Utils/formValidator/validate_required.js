const validate_required = ({ value, name, title, ruleValue, message }) => {
    if (!ruleValue) {
        return;
    }
    if (value instanceof Array) {
        if (value.length == 0) {
            message = message || (title || name) + "不能为空";
            return message;
        }
        return;
    }
    if (value == null || value == "") {
        message = message || (title || name) + "不能为空";
        return message;
    }
};

export default validate_required;
