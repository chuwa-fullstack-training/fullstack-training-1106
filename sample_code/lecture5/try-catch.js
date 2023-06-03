const newError = new Error('This is a new error');
// const newError = new Error({message: 'This is a new error'});

function validateEmail(email) {
  return /@/.test(email) ? email : new Error(`invalid email: ${email}`);
}

const email = 'agew.';

try {
  console.log(validateEmail(email));
} catch (err) {
  console.error(`Error: ${err.message}`);
}

// async/await
try {
  const res = await getJSON(
    'https://api.github.com/users/chuwa-fullstack-training'
  );
  console.log(res);
} catch (err) {
  console.error(err);
} finally {
  console.log('Done');
}

// custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateEmail(email) {
  return /@/.test(email)
    ? email
    : new ValidationError(`invalid email: ${email}`);
}

try {
  console.log(validateEmail(email));
} catch (err) {
  console.error(`Error: ${err.message}`);
}
