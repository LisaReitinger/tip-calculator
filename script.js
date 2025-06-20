document.addEventListener('DOMContentLoaded', () => {
// DOM Elements
const calculatorForm = document.getElementById('tipCalculator');
const billAmountInput = document.getElementById('billAmount');
const tipPercentageButtons = document.querySelectorAll('input[name="tipPercentage"]');
const tipAmountOutput = document.getElementById('tipAmount');
const totalAmountOutput = document.getElementById('totalAmount');
const resetButton = document.getElementById('resetButton');
const errorMessage = document.getElementById('billError');

// Initial Variables
let billAmount = 0.0;
let tipPercentage = 0;

// Core Calculation and display function
function calculateAndDisplay(){
    if (isNaN(billAmount) || billAmount < 0) {
        errorMessage.textContent = 'Please enter a valid, positive number.';

        tipAmountOutput.textContent = '$0.00';
        totalAmountOutput.textContent = '$0.00';
        return; 
    } else {
        // Clear any previous error messages if the input is valid
        errorMessage.textContent = '';
    }

    // Calculate tip and total
    const tipValue = billAmount * (tipPercentage / 100);
    const totalValue = billAmount + tipValue;

    // Update the DOM
    tipAmountOutput.textContent = `$${tipValue.toFixed(2)}`;
    totalAmountOutput.textContent = `$${totalValue.toFixed(2)}`;
}

})

