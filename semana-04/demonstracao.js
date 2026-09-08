const { login } = require('./login');
console.log(login('admin', '1234'));
console.log(login('admin', '0000'));
console.log(login('', ''));
