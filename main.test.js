const { MortgageCalculator } = require("./MortgageCalculator");
const { Person } = require("./Person");

const person1 = new Person(30000, false);
const person2 = new Person(30000, false);

const mortgageCalculator = new MortgageCalculator(30, 1234, [person1, person2]);

//unit tests
test('calculateTotalYearlyIncome', () => {
    expect(mortgageCalculator.calculateTotalYearlyIncome()).toBe(60000);
});

test('checkStudentDebt', () => {
    expect(mortgageCalculator.checkStudentDebt()).toBe(false);
});

test('checkPostcode', () => {
    expect(mortgageCalculator.checkPostcode()).toBe(1234);
});

test('calculateInterestRate', () => {
    expect(mortgageCalculator.calculateInterestRate()).toBe(5);
});

test('calculateMaxMortgage', () => {
    expect(mortgageCalculator.calculateMaxMortgage()).toBe(180000);
});

test('calculateMaxMortgageWithInterest', () => {
    expect(mortgageCalculator.calculateMaxMortgageWithInterest()).toBe(189000);
});

test('calculateMonthlyCost', () => {
    expect(mortgageCalculator.calculateMonthlyCost()).toBe(525);
});

//integration tests




