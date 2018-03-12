let expect = require("chai").expect;
let Console = require(".//specialConsole").Console;

describe("console - tests", function () {
    it("if a single argument is passed and it is a string, should return it", function () {
        expect(Console.writeLine('Hello!')).to.be.equal('Hello!');
    });
    it("if a single argument is passed and it is a object, should return the JSON representation of it", function () {
        let obj = {name: 'Pesho', age: 22};
        expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj));
    });
    it("should throw error if no arguments were given", function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });
    it("if multiple arguments are passed, but the first is not a string, should throw a TypeError", function () {
        expect(() => Console.writeLine(5, 'Hi', 'Lala Land')).to.throw(TypeError, 'No string format given!');
    });
    it("if the number of parameters does not correspond to the number of placeholders, should throw a RangeError", function () {
        expect(() => Console.writeLine('I am in {0} with {1}.', 'love')).to.throw(RangeError, 'Incorrect amount of parameters given!');
    });
    it("if the number of parameters does not correspond to the number of placeholders, should throw a RangeError", function () {
        expect(() => Console.writeLine('I am in {0} with...', 'love', 'programming')).to.throw(RangeError, 'Incorrect amount of parameters given!');
    });
    it("if the placeholders have indexes not withing the parameters range, should throw a RangeError", function () {
        expect(() => Console.writeLine("I am in {10}", "love")).to.throw(RangeError, 'Incorrect placeholders given!');
    });
    it("if the placeholders have indexes not withing the parameters range, should throw a RangeError", function () {
        expect(() => Console.writeLine('I am in {0} with {5}.', 'love', 'programming')).to.throw(RangeError, 'Incorrect placeholders given!');
    });
    it("work correctly with placeholders", function () {
        expect(Console.writeLine('I am in {0} with {1}.', 'love', 'programming')).to.be.equal('I am in love with programming.');
    });
    it("work correctly with placeholders", function () {
        expect(Console.writeLine('My favourite {0} is {1}.', 'number', 8)).to.be.equal('My favourite number is 8.');
    });
});