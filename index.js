
const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

app.use("/products", productRoutes);

const Port = 3000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
