/**
 * 是否只能是汉字
 */
const validate_chinese = ({ value, name, title, ruleValue, message }) => {
  if (!ruleValue) {
    return;
  }
  let reg = /^[\u0391-\uFFE5]+$/;
  if (value && (value != "" && !reg.test(value))) {
    message = message || (title || name) + "必须输入中文";
    return message;
  }
};

export default validate_chinese;
