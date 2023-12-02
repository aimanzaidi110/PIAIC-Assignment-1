"use strict";
// Scenario 1 - Buying Groceries
function buyGroceries(choice) {
    if (choice === 'fruits') {
        console.log('Fruits available: Apple, Banana, Orange');
        const fruitChoice = 'Apple'; // Assume user chooses Apple
        const fruitPrice = 2.5; // Assume price per unit
        const quantity = 3; // Assume quantity
        const totalFruitCost = quantity * fruitPrice;
        console.log(`You chose ${fruitChoice}, Quantity: ${quantity}, Total Cost: $${totalFruitCost}`);
    }
    else if (choice === 'vegetables') {
        console.log('Vegetables available: Carrot, Tomato, Spinach');
        // Similar logic as above for vegetables
    }
    else {
        console.log('Invalid choice');
    }
}
// Scenario 2 - Checking Discounts
function applyDiscount(totalBill) {
    let discountedTotal = totalBill;
    if (totalBill > 50) {
        const discountPercentage = 10; // Assume 10% discount
        const discountAmount = (discountPercentage / 100) * totalBill;
        discountedTotal = totalBill - discountAmount;
        console.log(`Discount Applied: ${discountPercentage}%, Discounted Total: $${discountedTotal}`);
    }
    else {
        console.log('No discount applied. Total: $' + totalBill);
    }
    return discountedTotal;
}
// Scenario 3 - Checkout Process
function checkout(paymentMethod) {
    const paymentOptions = ['Credit Card', 'Debit Card', 'Cash'];
    if (paymentOptions.includes(paymentMethod)) {
        console.log(`Thank you for shopping! Payment method: ${paymentMethod}`);
    }
    else {
        console.log('Invalid payment method');
    }
}
// Main simulation
const userChoice = 'fruits'; // Assume user wants to buy fruits
buyGroceries(userChoice);
const totalBillAmount = 60; // Assume total bill amount
const discountedTotalAmount = applyDiscount(totalBillAmount);
const userPaymentMethod = 'Credit Card'; // Assume user chooses Credit Card
checkout(userPaymentMethod);
