// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

    // test the normal case
    it(`should return "fizz-buzz" if number is divisible by 15, "fizz" if number is divisible by 5, and "buzz if the number is dividiaible by 3"` +
        `else returns the given number'`,
        function() {

            const num1 = 15;
            const num2 = 5;
            const num3 = 3;
            expect(fizzBuzzer(num1)).to.equal("fizz-buzz");
            expect(fizzBuzzer(num2)).to.equal("buzz");
            expect(fizzBuzzer(num3)).to.equal("fizz");
        });

    it(`should return the given number kicked out by fizzBuzzer, failed to be divisible by 15, 5, or 3'`,
        function() {

            const num1 = 22;
            const num2 = 2;
            const num3 = 17;
            expect(fizzBuzzer(num1)).to.equal(22);
            expect(fizzBuzzer(num2)).to.equal(2);
            expect(fizzBuzzer(num3)).to.equal(17);
        });
});