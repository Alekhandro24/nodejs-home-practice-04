const { Product } = require("../../models");

const getAll = async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.json({
    status: "success",
    code: 200,
    data: {
      results: products,
    },
  });
};
module.exports = getAll;
