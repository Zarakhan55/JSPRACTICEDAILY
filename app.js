let product = [
    {
        name: "Laptop",
        price: 20000,
        quantity: 3,
        category: "Electronics"
    },
    {
        name: "Mobile",
        price: 230000,
        quantity: 5,
        category: "Electronics"
    },
    {
        name: "Shoes",
        price: 2000,
        quantity: 2,
        category: "Shopping"
    },
    {
        name: "DG Camera",
        price: 230000,
        quantity: 3,
        category: "Electronics"
    },
    {
        name: "Apple",
        price: 205000,
        quantity: 7,
        category: "Electronics"
    }
];


// STEP 1: Calculate Grand Total

let grandTotal = 0;

for (let x = 0; x < product.length; x++) {

    let total = product[x].quantity * product[x].price;

    alert(
        "Product: " + product[x].name +
        "\nTotal: " + total
    );

    grandTotal = grandTotal + total;
}


// STEP 2: Show Grand Total

alert("Grand Total: " + grandTotal);


// STEP 3: Calculate Discount

let discount;

if (grandTotal >= 500000) {

    discount = 20;

} else if (grandTotal >= 300000 && grandTotal < 500000) {

    discount = 15;

} else if (grandTotal >= 100000 && grandTotal < 300000) {

    discount = 10;

} else {

    discount = 0;
}


// STEP 4: Calculate Discount Amount

let discountAmount = grandTotal * discount / 100;


// STEP 5: Calculate Final Price

let finalPrice = grandTotal - discountAmount;


// STEP 6: Display Result

alert("Discount: " + discount + "%");

alert("Discount Amount: " + discountAmount);

alert("Final Price: " + finalPrice);