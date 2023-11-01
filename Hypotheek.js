const { HypotheekCalculator } = require('./MortgageCalculator');

class Hypotheek {
    mortgageDuration;
    people = [];

    totalMortgage;
    monthlyMortgage;
    
    constructor(mortgageDuration, people = []) {
        this.mortgageDuration = mortgageDuration;
        people.forEach(person => this.addPerson(person));
    }

    addPerson(person) {
        this.people.push(person);
    }

    calculateTotalMortgage = () => {
        let totalMortgage = 0;
        this.people.forEach(person => {
            // Create a new instance of HypotheekCalculator for each person
            const hypotheekCalculator = new HypotheekCalculator(this.mortgageDuration, person.postcode, person.studentDebt, person.yearlyIncome);

            hypotheekCalculator.checkPostcode(person.postcode);

            // Add the mortgage of each person to the total mortgage
            totalMortgage += hypotheekCalculator.calculateMaxMortgageCostWithInterest(hypotheekCalculator.calculateInterestRate(this.mortgageDuration),
                hypotheekCalculator.calculateMaxMortgage(person.yearlyIncome, person.studentDebt));
        });

        this.totalMortgage = totalMortgage;

        return totalMortgage;
    }

    calculateMonthlyMortgage = () => {
        let monthlyMortgage = 0;

    }
}