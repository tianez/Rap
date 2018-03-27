/**
 * 是否只能是字母
 */
const validate_english = ({ value, name, title, ruleValue, message }) => {
  if (!ruleValue) {
    return;
  }
  let reg = /^[a-zA-Z]*$/;
  if (value && (value != "" && !reg.test(value))) {
    message = message || (title || name) + "必须输入英文字母";
    return message;
  }
};

export default validate_english;
