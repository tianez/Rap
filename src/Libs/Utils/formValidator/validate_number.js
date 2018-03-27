/**
 * 是否只能是汉字
 */
const validate_number = ({ value, name, title, ruleValue, message }) => {
  if (!ruleValue) {
    return;
  }
  let reg = /^[0-9]+$/;
  if (value && (value != "" && !reg.test(value))) {
    message = message || (title || name) + "只能输入数字";
    return message;
  }
};

export default validate_number;
