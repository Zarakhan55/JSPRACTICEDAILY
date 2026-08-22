let cart = [];


for (let x = 0; x < 3; x++) {

    let productName = prompt("Enter product " + (x + 1) + " name:");

    let price = Number(
        prompt("Enter price of " + productName + ":")
    );

    let quantity = Number(
        prompt("Enter quantity of " + productName + ":")
    );

    let product = {
        name: productName,
        price: price,
        quantity: quantity
    };

    cart.push(product);
}



let grandTotal = 0;

for (let x = 0; x < cart.length; x++) {

    let total = cart[x].price * cart[x].quantity;

    grandTotal = grandTotal + total;

    alert(
        "Product: " + cart[x].name +
        "\nPrice: " + cart[x].price +
        "\nQuantity: " + cart[x].quantity +
        "\nTotal: " + total
    );
}



alert("Grand Total: Rs. " + grandTotal);