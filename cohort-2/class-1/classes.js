class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    addition(num1, num2) {
        return num1 + num2;
    }

    subraction(num1, num2) {
        return num1 - num2;
    }
}

let add = new Calculator();
console.log(add.addition(10, 10));