const { MortgageCalculator } = require("./MortgageCalculator");
const { Person } = require("./Person");

const person1 = new Person(30000, false);
const person2 = new Person(30000, false);

const mortgageCalculator = new MortgageCalculator(30, 1234, [person1, person2]);

//unit tests with valid inputs

test("calculateTotalYearlyIncome", () => {
    expect(mortgageCalculator.calculateTotalYearlyIncome()).toBe(60000);
});

test("checkStudentDebt", () => {
    expect(mortgageCalculator.checkStudentDebt()).toBe(false);
});

test("checkPostcode", () => {
    expect(mortgageCalculator.checkPostcode(9681)).toBe(false);
    expect(mortgageCalculator.checkPostcode(1234)).toBe(true);
});

test("calculateInterestRate", () => {
    expect(mortgageCalculator.calculateInterestRate()).toBe(5);
});

test("calculateMaxMortgage", () => {
    expect(mortgageCalculator.calculateMaxMortgage()).toBe(255000);
});

test("calculateMaxMortgageWithInterest", () => {
    expect(mortgageCalculator.calculateMaxMortgageWithInterest()).toBe(492802);
});

test("calculateMonthlyCost", () => {
    expect(mortgageCalculator.calculateMonthlyCost()).toBe(1368);
});

// unit tests with invalid inputs

test("CalculateTotalYearlyIncomeWithInvalidInput", () => {
    const person3 = new Person("abc", false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateTotalYearlyIncome()).toBe(0);
});

test("CalculateTotalYearlyIncomeWithNullInput", () => {
    const person3 = new Person(null, false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateTotalYearlyIncome()).toBe(0);
});

test("CalculateTotalYearlyIncomeWithUndefinedInput", () => {
    const person3 = new Person(undefined, false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateTotalYearlyIncome()).toBe(0);
});

test("CalculateStudentDebtWithInvalidInput", () => {
    const person3 = new Person(30000, "abc");
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.checkStudentDebt()).toBe(false);
});

test("CalculateStudentDebtWithNullInput", () => {
    const person3 = new Person(30000, null);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.checkStudentDebt()).toBe(false);
});

test("calculateMaxMortgageWithInterestWithInvalidInput", () => {
    const person3 = new Person("abc", false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateMaxMortgageWithInterest()).toBe(0);
});

test("calculateMaxMortgageWithInterestWithNullInput", () => {
    const person3 = new Person(null, false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateMaxMortgageWithInterest()).toBe(0);
});

test("calculateMaxMortgageWithInterestWithUndefinedInput", () => {
    const person3 = new Person(undefined, false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateMaxMortgageWithInterest()).toBe(0);
});

test("calculateMonthlyCostWithInvalidInput", () => {
    const person3 = new Person("abc", false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateMonthlyCost()).toBe(0);
});

test("calculateMonthlyCostWithNullInput", () => {
    const person3 = new Person(null, false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateMonthlyCost()).toBe(0);
});

test("calculateMonthlyCostWithUndefinedInput", () => {
    const person3 = new Person(undefined, false);
    const mortgageCalculator2 = new MortgageCalculator(30, 1234, [person3]);
    expect(mortgageCalculator2.calculateMonthlyCost()).toBe(0);
});

test("calculateInterestRateWithInvalidInput", () => {
    const person3 = new Person(30000, false);
    const mortgageCalculator2 = new MortgageCalculator("abc", 1234, [person3]);
    expect(mortgageCalculator2.calculateInterestRate()).toBe(undefined);
});

test("calculateInterestRateWithNullInput", () => {
    const person3 = new Person(30000, false);
    const mortgageCalculator2 = new MortgageCalculator(null, 1234, [person3]);
    expect(mortgageCalculator2.calculateInterestRate()).toBe(undefined);
});

test("calculateInterestRateWithUndefinedInput", () => {
    const person3 = new Person(30000, false);
    const mortgageCalculator2 = new MortgageCalculator(undefined, 1234, [
        person3,
    ]);
    expect(mortgageCalculator2.calculateInterestRate()).toBe(undefined);
});
