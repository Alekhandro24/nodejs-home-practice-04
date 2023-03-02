const bcrypt = require("bcryptjs");

const password = "passwordGF";

const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
console.log(hashPassword);

const result1 = bcrypt.compareSync(password, hashPassword);
console.log(result1);

const result2 = bcrypt.compareSync("passwordF", hashPassword);
console.log(result2);

const result3 = bcrypt.compareSync("passwordGF", hashPassword);
console.log(result3);

// const bcrypt = require("bcryptjs");

// const password = "password";

// console.log(bcrypt.genSaltSync(10));
// const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// console.log(hashPassword);

// const result1 = bcrypt.compareSync(password, hashPassword);
// console.log(result1);

// const result2 = bcrypt.compareSync("passwordG", hashPassword);
// console.log(result2);
