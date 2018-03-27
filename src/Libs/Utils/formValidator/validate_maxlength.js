/**
 * 最大长度
 */
const validate_maxlength = ({ value, name, title, ruleValue, message }) => {
  ruleValue = ruleValue * 1;
  if (ruleValue < 1) {
    return;
  }
  if (value && value.length > ruleValue) {
    message = message || (title || name) + "不能超过" + ruleValue + "个字符";
    return message;
  }
};

export default validate_maxlength;
