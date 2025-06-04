// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct(products) {
  console.log(products[0]);
}
function addProduct(products, newProduct) {
  products.push(newProduct);
}
function updateProductName(products, index, newName ) {
  products[index] = newName;
}
function removeLastProduct(products) {
  products.pop();
}
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
