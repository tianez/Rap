import validate_required from "./validate_required";
import validate_maxlength from "./validate_maxlength";
import validate_minlength from "./validate_minlength";
import validate_chinese from "./validate_chinese";
import validate_english from "./validate_english";
import validate_number from "./validate_number";
import validate_englishOrnumber from "./validate_englishOrnumber";
import validate_CardNo from "./validate_CardNo";

const validate_field = (file, value) => {
  if (file.rules) {
    let error = file.rules.map(rule => {
      let keys = Object.keys(rule).filter(d => {
        return d !== "message";
      });
      let validate = {
        value,
        name: file.name,
        title: file.title,
        ruleValue: rule[keys[0]],
        message: rule.message
      };
      let isError = false;
      switch (keys[0]) {
        case "required":
          isError = validate_required(validate);
          break;
        case "max":
          isError = validate_maxlength(validate);
          break;
        case "min":
          isError = validate_minlength(validate);
          break;
        case "chinese":
          isError = validate_chinese(validate);
          break;
        case "english":
          isError = validate_english(validate);
          break;
        case "number":
          isError = validate_number(validate);
          break;
        case "ennum":
          isError = validate_englishOrnumber(validate);
          break;
        case "cardno":
          isError = validate_CardNo(validate);
          break;
        default:
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
