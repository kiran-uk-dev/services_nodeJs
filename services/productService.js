
function getAllProducts() {
    return "Fetching all products";
}

function getProductById(id) {
    return `Fetching product with ID: ${id}`;
}

function addProduct() {
    return "Adding a new product";
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};
