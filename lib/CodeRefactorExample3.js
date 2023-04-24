function validate(params) {
  // validate if params.email is a string
  if (typeof params.email !== 'string') {
    throw new Error('Invalid email');
  }

  // validate if params.password is a string
  if (typeof params.password !== 'string') {
    throw new Error('Invalid password');
  }
}

// Refactor the validate method to make as per "Don't repeat yourself" principle by extracting common functionality into a separate function.
function validate1(params) {
  // validate if params.email is a string
  validateString(params.email, 'Invalid email');

  // validate if params.password is a string
  validateString(params.password, 'Invalid password');
}

function validateString(str, errorMessage) {
  if (typeof str !== 'string') {
    throw new Error(errorMessage);
  }
}
