const Product = require("../models/Product");

const getAllProducts = (req, res) => {
  const products = Product.find({})
    .then((Product) =>
      res.json({ message: "get with succees", products: Product })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    });
};

const getProductById = (req, res) => {
  const products = Product.findById(req.params.id)
    .then((Product) =>
      res.json({ message: "get with succees", products: Product })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    });
};
