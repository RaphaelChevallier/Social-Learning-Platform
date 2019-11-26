const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  data.password2 = !isEmpty(data.passVerify) ? data.passVerify : "";
  
// Password checks
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.name = "First name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.name = "Last name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.passVerify)) {
      errors.passVerify = "Confirm password field is required";
    }
  if (!Validator.equals(data.password, data.passVerify)) {
      errors.passVerify = "Passwords must match";
    }

return {
    errors,
    isValid: isEmpty(errors)
  };
};