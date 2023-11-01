const { Person } = require("./Person");
const { MortgageCalculator } = require("./MortgageCalculator");

const person1 = new Person(30000, false);
const person2 = new Person(30000, false);

const mortgageCalculator = new MortgageCalculator(30, 1234, [person1, person2]);

console.log("Total mortgage:", mortgageCalculator.calculateMaxMortgage());
console.log(
    "Total mortgage with interest:",
    mortgageCalculator.calculateMaxMortgageWithInterest()
);
console.log("Monthly mortgage:", mortgageCalculator.calculateMonthlyCost());
