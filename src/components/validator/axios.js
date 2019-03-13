import Validator from 'validator';
import isEmpty from '../common/isEmpty';

const validateAxiosInput = data => {
  let errors;

  data = !isEmpty(data) ? data : '';

  // Validate Numbers
  if (!Validator.isNumeric(data)) {
    errors = 'Only numbers allowed'
  }

  // Validate min & max
  if (Validator.isInt(data, {min:-Infinity, max:0})) {
    errors = 'Minimum 1';
  }
  if (Validator.isInt(data, {min:501, max:Infinity})) {
    errors = 'Miximum 500';
  }

  // Validate allow_leading_zeroes: false
  if (!Validator.isInt(data, {allow_leading_zeroes: false})) {
    errors = 'Only valid numbers allowed';
  }

  // Validate Empty
  if (Validator.isEmpty(data)) {
    errors = 'ID number field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateAxiosInput;