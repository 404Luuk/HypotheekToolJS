class MortgageCalculator {
    maxMortgage = 0;
    maxMortgageWithInterest = 0;
    monthlyCost = 0;
    interestRate = 0;
    mortgageDuration = 0; // years

    forbiddenPostcodes = [9679, 9681, 9682];
    people = [];

    // Constructor to fill fields with calculated values
    constructor(MortgageDuration, postcode, people = []) {
        !this.checkPostcode(postcode) ?? process.exit(1);

        this.mortgageDuration = MortgageDuration;
        people.forEach((person) => this.addPerson(person));

        this.interestRate = this.calculateInterestRate();
        this.maxMortgage = this.calculateMaxMortgage();
        this.maxMortgageWithInterest = this.calculateMaxMortgageWithInterest();
        this.monthlyCost = this.calculateMonthlyCost(
            this.maxMortgageWithInterest,
            MortgageDuration
        );
    }

    // Add person to people array
    addPerson(person) {
        this.people.push(person);
    }

    // Calculate total yearly income
    calculateTotalYearlyIncome = () => {
        let totalYearlyIncome = 0;
        this.people.forEach(
            //check if yearlyIncome is a number
            (person) =>
                !isNaN(person.yearlyIncome) &&
                (totalYearlyIncome += person.yearlyIncome)
        );
        return totalYearlyIncome;
    };

    // Check if any person has student debt
    checkStudentDebt = () => {
        let studentdebt = false;
        this.people.forEach((person) => {
            //check if studentDebt is a boolean
            typeof person.studentDebt === "boolean" &&
                (studentdebt = studentdebt || person.studentDebt);
        });

        return studentdebt;
    };

    // Check postcode
    checkPostcode = (postcode) => {
        // check if postcode is number
        isNaN(postcode) ?? false;

        if (this.forbiddenPostcodes.includes(postcode)) {
            return false;
        }
        return true;
    };

    // Check mortgage duration and return interest rate
    calculateInterestRate = () => {
        switch (this.mortgageDuration) {
            case 1:
                return 2;
            case 5:
                return 3;
            case 10:
                return 3.5;
            case 20:
                return 4.5;
            case 30:
                return 5;
            default:
                return undefined;
        }
    };

    // Check if student debt is true or false
    // Then calculate the max mortgage
    calculateMaxMortgage = () => {
        return this.checkStudentDebt()
            ? this.calculateTotalYearlyIncome() * 4.25 * 0.75
            : this.calculateTotalYearlyIncome() * 4.25;
    };

    calculateMaxMortgageWithInterest() {
        // Access instance variables using `this`
        const principal = this.calculateMaxMortgage();
        const annualInterestRate = this.calculateInterestRate();
        const loanTermInYears = this.mortgageDuration;

        // Convert annual interest rate to monthly interest rate
        const monthlyInterestRate = annualInterestRate / 12 / 100;

        // Convert loan term in years to months
        const numberOfPayments = loanTermInYears * 12;

        // Calculate the monthly payment
        const monthlyPayment =
            (principal *
                (monthlyInterestRate *
                    Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        // Calculate the total amount paid with interest
        const totalAmountPaid = monthlyPayment * numberOfPayments;

        return parseInt(totalAmountPaid.toFixed(2));
    }

    // Divide by 12 to get monthly cost
    calculateMonthlyCost = () => {
        return parseInt(
            (
                this.calculateMaxMortgageWithInterest() /
                this.mortgageDuration /
                12
            ).toFixed(2)
        );
    };
}

exports.MortgageCalculator = MortgageCalculator;
