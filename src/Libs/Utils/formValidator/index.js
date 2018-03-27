import validate_field from "./validate_field";

function formValidator(files, data) {
  let errors = files.map(file => {
    return validate_field(file, data[file.name]);
  });
  let resErrors = [];
  errors.map(err => {
    if (err) {
      resErrors = resErrors.concat(err);
    }
  });
  return resErrors;
}

export default formValidator;
