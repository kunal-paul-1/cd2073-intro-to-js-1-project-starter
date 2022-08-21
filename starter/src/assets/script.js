/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

// Global variable to keep track of total amount paid across transactions
let totalPaid = 0;

// Constant defining root folder of images
const imageRoot = "/./images/";

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
// Create and add Cherries
let cherry = {
    name: "Carton of Cherries", 
    price: 4,
    quantity: 0,
    productId: 1,
    image: imageRoot + "cherry.jpg"
};
products.push(cherry);

// Create and add Strawberries
let strawberry = {
    name: "Carton of Strawberries", 
    price: 5  ,
    quantity: 0,
    productId: 2,
    image: imageRoot + "strawberry.jpg"
};
products.push(strawberry);

// Create and add Oranges
let orange = {
    name: "Bag of Oranges", 
    price: 10,
    quantity: 0,
    productId: 3,
    image: imageRoot + "orange.jpg"
};
products.push(orange);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Helper function to find a product in the cart
    Input : productId
    Output: product object if found, undefined otherwise
*/
function findProductInCart(productId) {
    for (index = 0;index<cart.length;index++) {
        if (cart[index].productId === productId) {
           return cart[index];
        }
   }
}

/* Helper function to find a product from inventory
    Input : productId
    Output: product object if found, undefined otherwise
*/
function fetchProduct(productId) {
    for (index = 0;index<products.length;index++) {
        if (products[index].productId === productId) {
           return products[index];
        }
    }
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
   // Look for product in cart
   let product = findProductInCart(productId);
   // If product not in cart, fetch and add to cart
   if (product === undefined)
   {
       product = fetchProduct(productId);
       cart.push(product);
   }

   // Increase quantity
   product.quantity++;
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
   // Look for product in cart
   let product = findProductInCart(productId);

   // Increase quantity
   product.quantity++;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
   // Look for product in cart
   let product = findProductInCart(productId);

   // Decrease quantity
   product.quantity--;

   // Check quantity and remove from cart if quanity is 0
   if (product.quantity === 0) {
       removeProductFromCart(product.productId);
   }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
   // Look for product in cart
   let product = findProductInCart(productId);
  
   // Change quantity to 0
   product.quantity = 0;;

   // Remove product from cart
   cart.forEach(function(product,index){
       if (product.productId == productId) {
           cart.splice(index, 1);
       }
   }) 
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
   let cartValue = 0;
   // Iterate through the cart & calculate cart value
   cart.forEach(function(product) {
       cartValue += (product.quantity * product.price);
   })
   return cartValue;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
   // Remove products from cart
   cart.forEach(function(product,index){
       // Set quantity to 0
       product.quantity = 0;
       // Remove from cart
       cart.splice(index, 1);
   }) 
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
   let cartValue = cartTotal();
   totalPaid += amount;
   let balance = totalPaid - cartValue;
   // Set totalPaid equal to Cart total when entire amount is paid, as balance is returned back 
   if (balance > 0) {
      totalPaid = cartValue;
   } 
   return balance;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
