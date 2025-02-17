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

// Task 4 
function calculateShippingCost(weight, location, expedited = false) {
  let baseCost;
  if (location === "USA") {
    baseCost = 5 + (0.5 * weight);
  }
  else if (location === "Canada") {
    baseCost = 10 + (0.7 * weight);
  }
  if (expedited) {
    baseCost += 10;
  }
  return 'Shipping Cost: $${baseCost.toFixed(2)}';
};

consol.log(calculateShippingCost(10, "USA", true));
consol.log(calculateShippingCost(5, "Canada", false));

// Task 5
function calculateLoanInterest(principal, rate, years) {
  let interest = principal * rate * years;
  return 'Total Interest: $${interest.toFixed(2)}';
}
consol.log(calculateLoanInterest(1000, 0.05, 3));
consol.log(calculateLoanInterest(5000, 0.07, 5));

// Task 6 
let transactions = [500, 1200, 3000, 800, 2200];

function filterHighValueTransactions(transactions, filterFunction) {
  return transactions.filter(filterFunction);
}

consol.log(filterHighValueTransactions(transactions, amount => amount > 1000));

// Task 7 
function createBudgetTracker() {
  let balance = 0;
  return function(expense) {
    balance += expense;
    return 'Current Balance: -$${balance}';
  };
}

let budget = createBudgetTracker();
consol.log(budget(300));
consol.log(budget(200));

// Task 8 
function calculateGrowth(years, revenue) {
  if (years < 10) {
    return calculateGrowth(years + 1, revenue * 1.05);
  }
  return 'Projected Revenue: $${revenue.toFixed(2)}';
}

consol.log(calculateGrowth(8, 1000));
consol.log(calculateGrowth(5, 5000));
