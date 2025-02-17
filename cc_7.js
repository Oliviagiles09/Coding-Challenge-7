// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
  const total = (subtotal + (subtotal * taxRate)) - discount;
  consol.log('Total Invoice: $${total.toFixed(2)}');
}

calculateInvoice(100, 0.08, 5);
calculateInvoice(500, 0.1, 20);
