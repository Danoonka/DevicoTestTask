class Worker {
    surname;
    name;
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    get name() {
        return this.name;
    }

    get surname() {
        return this.surname;
    }

    getRate() {
        return this.rate;
    }

    setRate(rate) {
        this.rate = rate;
    }

    getDays() {
        return this.days;
    }

    setDays(days) {
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.getRate()); //outputs 10
console.log(worker.getDays()); //outputs 31
console.log(worker.getSalary()); //outputs 310 - what equal 10*31
// Now let's use setters:
worker.setRate(20); // let's increase rate
worker.setDays(10); // let's decrease days
console.log(worker.getSalary()); //outputs 200 - what equal 20*10
