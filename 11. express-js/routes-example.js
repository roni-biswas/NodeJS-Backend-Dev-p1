const express = require("express");
const app = express();

// routing
// root route
app.get("/", (req, res) => {
  res.send("Welcome to our home page").status(200);
});

// get all products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  res.json(products).status(200);
});

// get a single product
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];

  const getSingleProduct = products.find((product) => product.id === productId);
  if (getSingleProduct) {
    res.json(getSingleProduct).status(200);
  } else {
    res.send("Product is not Found").status(404);
  }
});

// listening
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
