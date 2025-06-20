
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



