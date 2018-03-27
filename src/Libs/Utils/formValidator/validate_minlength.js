const validate_minlength = ({ value, name, title, ruleValue, message }) => {
  ruleValue = ruleValue * 1;
  if (ruleValue < 1) {
    return;
  }
  if (!value || value.length < ruleValue) {
    message = message || (title || name) + "不能少于" + ruleValue + "个字符";
    return message;
  }
};

export default validate_minlength;
