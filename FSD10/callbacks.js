function addItemToCart(callback) {
    console.log("Item added to cart");
    callback();
}

function placeOrder(callback) {
    console.log("Order placed");
    callback();
}

function processPayment(callback) {
    console.log("Payment processed");
    callback();
}

function finalizeOrder() {
    console.log("Order finalized and shipped");
}

// Callback chaining
addItemToCart(() => {
    placeOrder(() => {
        processPayment(() => {
            finalizeOrder();
        });
    });
});