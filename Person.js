class Person {
    yearlyIncome = 0;
    studentDebt;

    constructor(yearlyIncome, studentDebt) {
        this.yearlyIncome = yearlyIncome;
        this.studentDebt = studentDebt;
    }

    getYearlyIncome() {
        return this.yearlyIncome;
    }

    getStudentDebt() {
        return this.studentDebt;
    }
}

exports.Person = Person;