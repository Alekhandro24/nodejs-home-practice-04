const { NotFound } = require("http-errors");
const { Product } = require("../../models");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndRemove(id);
  if (!result) {
    throw new NotFound(`Product by id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "product deleted",
    data: {
      result,
    },
  });
};
module.exports = getById;
