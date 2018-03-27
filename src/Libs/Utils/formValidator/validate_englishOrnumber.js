/**
 * 是否只能是字母或者数字
 */
const validate_englishOrnumber = ({ value, name, title, ruleValue, message }) => {
  if (!ruleValue) {
    return;
  }
  let reg = /^[0-9a-zA-Z]*$/; 
  if (value && (value != "" && !reg.test(value))) {
    message = message || (title || name) + "只能输入字母或者数字";
    return message;
  }
};

export default validate_englishOrnumber;
