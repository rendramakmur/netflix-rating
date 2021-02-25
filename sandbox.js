const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'test';
const someOtherPlaintextPassword = 'not_bacon';

const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(myPlaintextPassword, salt)
const hash = bcrypt.hashSync('test', 5);

console.log(hash);

let compare0 = bcrypt.compareSync(myPlaintextPassword, hash); // true
console.log(compare0);
// let compare1 = bcrypt.compareSync(someOtherPlaintextPassword, hash); // false



// console.log(compare1);