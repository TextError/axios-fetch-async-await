import Validator from 'validator';
import isEmpty from '../common/isEmpty';

const validateAxiosInput = data => {
  let errors;

  data = !isEmpty(data) ? data : '';


  // Validate min & max
  if (Validator.isInt(data, {min:-Infinity, max:0})) {
    errors = 'Minimum 1';
  }
  if (Validator.isInt(data, {min:501, max:Infinity})) {
    errors = 'Miximum 500';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateAxiosInput;