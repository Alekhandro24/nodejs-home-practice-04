const jwt = require("jsonwebtoken");

const SECRET_KEY = "674nthdftf785r834h5j";

const payload = {
  id: "63ff70926402fe609ab0b0fd",
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
console.log(token);

const decodeToken = jwt.decode(token);
console.log(decodeToken);

try {
  const result = jwt.verify(token, SECRET_KEY);
} catch (error) {
  console.log(error.message);
}
