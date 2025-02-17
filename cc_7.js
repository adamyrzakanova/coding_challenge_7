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