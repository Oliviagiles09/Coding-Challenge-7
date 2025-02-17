// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
  const total = (subtotal + (subtotal * taxRate)) - discount;
  consol.log('Total Invoice: $${total.toFixed(2)}');
}

calculateInvoice(100, 0.08, 5);
calculateInvoice(500, 0.1, 20);

// Task 2 
function calculateHourlyWage(salary, hoursPerWeek) {
  const hourlyWage = salary / (hoursPerWeek * 52);
  return 'Hourly Wage: $${hourlyWage.toFixed(2)}';
}

consol.log(calculateHourlyWage(52000, 40));
consol.log(calculateHourlyWage(75000, 35));

// Task 3
let calculateLoyaltyDiscount = (amount, years) => {
  let discountRate
  if (years >= 5) {
    discountRate = 0.15;
  }
  else if (years >= 3) {
    discountRate = 0.10;
  }
  else if (years < 3) {
    discountRate = 0.05;
  }
  discountedPrice = amount - (amount * discountRate);
  return 'Discounted Price: $${discountedPrice.toFixed(2)}';
}

consol.log(calculateLoyaltyDiscount(100, 6));
consol.log(calculateloyaltyDiscount(200, 2));
