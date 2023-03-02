// //version 1 LIGHT-VERSION
// const { Conflict } = require("http-errors");
// const { User } = require("../../models");
// const bcrypt = require("bcryptjs");

// const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw new Conflict(`User with ${email} already existt`);
//   }
//   const hushPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
//   const result = await User.create({ name, email, password: hushPassword });
//   res.status(201).json({
//     status: "success",
//     code: 201,
//     data: {
//       user: {
//         email,
//         name,
//       },
//     },
//   });
// };

// module.exports = register;

//version 2 HARD-VERSION більш незалажна версія
const { Conflict } = require("http-errors");
const { User } = require("../../models");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already existt`);
  }
  const newUser = new User({ name, email });
  /* 
  newUser = {
  name,
  email,
  setPassword(password){
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }
  }
  */
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        name,
      },
    },
  });
};

module.exports = register;
