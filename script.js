const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculator() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  console.log(currency_one, currency_two);
}

// Event Listners
currencyEl_one.addEventListener('change', calculator);
amountEl_one.addEventListener('input', calculator);
currencyEl_two.addEventListener('change', calculator);
amountEl_two.addEventListener('input', calculator);

calculator();
