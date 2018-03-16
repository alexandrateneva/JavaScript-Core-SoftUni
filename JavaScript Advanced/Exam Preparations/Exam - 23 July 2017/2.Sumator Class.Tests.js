let Sumator = require('./2.Sumator Class');
let expect = require("chai").expect;

describe('Sumator class - tests', function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    it("initialized to an empty array", function () {
        expect(new Sumator()).to.deep.equal({data: []});
    });

    it("adds the passed in item (of any type) to the data", function () {
        sumator.add('hello');
        sumator.add(5);
        sumator.add({name: 'Pesho', age: 22});
        expect(sumator).to.deep.equal({data: ['hello', 5, {name: 'Pesho', age: 22}]});
    });

    describe('sumNums() function - tests', function () {
        it("sums only the numbers from the data and returns the sum", function () {
            sumator.add('hello');
            sumator.add(5);
            sumator.add({name: 'Pesho', age: 22});
            sumator.add(10.5);
            expect(sumator.sumNums()).to.deep.equal(15.5);
        });

        it("if there are no numbers stored, the function should return zero", function () {
            sumator.add('hello');
            sumator.add({name: 'Pesho', age: 22});
            expect(sumator.sumNums()).to.deep.equal(0);
        });

        it("if there is am empty array, the function should return zero", function () {
            expect(sumator.sumNums()).to.deep.equal(0);
        });
    });

    it("filters the data by a given function", function () {
        sumator.add(2);
        sumator.add(7);
        sumator.add(17);
        sumator.add(8);
        sumator.add(80.7);
        sumator.removeByFilter(x => x % 2 === 0);
        expect(sumator).to.deep.equal({data: [7, 17, 80.7]});
    });

    it("return a string, containing a list of all items from the data, joined with a comma and a space", function () {
        sumator.add(2);
        sumator.add('pesho');
        sumator.add(new Date(10, 3, 1993));
        expect(sumator.toString()).to.deep.equal('2, pesho, Tue Sep 14 1915 00:00:00 GMT+0300 (FLE Daylight Time)');
    });

    it("if there are no items stored, it should return the string'(empty)'", function () {
        expect(sumator.toString()).to.deep.equal('(empty)');
    });
});
