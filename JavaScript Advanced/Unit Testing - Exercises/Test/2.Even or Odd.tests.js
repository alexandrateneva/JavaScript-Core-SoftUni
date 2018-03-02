let expect = require("chai").expect;
let isOddOrEven = require("../2.Even or Odd").isOddOrEven;

describe("isOddOrEven(string) - tests", function () {
    it("with a number parameter should return undefined", function () {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    it("with a object parameter should return undefined", function () {
        expect(isOddOrEven({name: 'Pesho'})).to.be.undefined;
    });
    it("with an even length string parameter should return correct result", function () {
        expect(isOddOrEven('roar')).to.be.equal('even');
    });
    it("with an odd length string parameter should return correct result", function () {
        expect(isOddOrEven('Pesho')).to.be.equal('odd');
    });
});