// Task 1

// function calculateInvoice that calculates the final invoice amount

function calculateInvoice(amount, TaxRate, discount) {
    const total = (subtotal + (subtotal * TaxRate)) - discount;
    return 'Total Invoice: $${total.toFixed(2)}';
}

// console log 
console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"


// Task 2

const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
  };

// console log
console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"


// Task 3

const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = 0.05;
    if (years >= 5) discountRate = 0.15;
    else if (years >= 3) discountRate = 0.10;

    const discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
  };

// console log
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"


// Task 4
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = 0;
    let perPoundRate = 0;

    if (location === "USA") {
      baseCost = 5;
      perPoundRate = 0.5;
    } else if (location === "Canada") {
      baseCost = 10;
      perPoundRate = 0.7;
    }

    let shippingCost = baseCost + (weight * perPoundRate);
    if (expedited) shippingCost += 10;

    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
  }

  // Console log
  console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
  console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"


  // Task 5
function calculateLoanInterest(principal, rate, years) {
    const interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
  }

  // Console log
  console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
  console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"


  // Task 6
let transactions = [900, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
  return transactions.filter(filterFunction);
}

// Console log 
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]