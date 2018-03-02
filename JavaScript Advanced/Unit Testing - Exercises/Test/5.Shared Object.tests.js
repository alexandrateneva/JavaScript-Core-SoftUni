let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let sharedObject = require("../5.Shared Object").sharedObject;
let $ = require("jquery");

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe("sharedObject - tests", function () {
    describe("initial value tests", function () {
        it("initial value of name should be null", function () {
            expect(sharedObject.name).to.be.null;
        });
        it("initial value of income should be null", function () {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe("change name tests", function () {
        it("with empty string name should be null", function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it("with non-empty string name should be changed correctly", function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho');
        });

        describe("input name tests", function () {
            it("with empty string name should be null", function () {
                sharedObject.changeName('Gosho');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Gosho');
            });
            it("with non-empty string name should be changed correctly", function () {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Pesho');
            });
        });

    });

    describe("change income tests", function () {
        it("with string input should stay null", function () {
            sharedObject.changeIncome('million');
            expect(sharedObject.income).to.be.null;
        });
        it("with positive number should change correctly", function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it("with floating-point input should not change", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.equal(5);
        });
        it("with negative number input should not change", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-2);
            expect(sharedObject.income).to.be.equal(5);
        });
        it("with zero input should not change", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });

        describe("input income tests", function () {
            it("with string input should stay null", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('million');
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5');
            });
            it("with positive number should change correctly", function () {
                sharedObject.changeIncome(10);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('10');
            });
            it("with floating-point input should not change", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(3.14);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5');
            });
            it("with negative number input should not change", function () {
                sharedObject.changeIncome(10);
                sharedObject.changeIncome(-2);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('10');
            });
            it("with zero input should not change", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5');
            });
        });
    });

    describe("update name tests", function () {
        it("with empty string should not change property", function () {
            sharedObject.changeName('Victor');
            let nameElement = $('#name');
            nameElement.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Victor');
        });
        it("with non-empty string should change property", function () {
            sharedObject.changeName('Victor');
            let nameElement = $('#name');
            nameElement.val('Kiril');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kiril');
        });
    });

    describe("update income tests", function () {
        it("with a string should not change property", function () {
            sharedObject.changeIncome(3);
            let incomeElement = $('#income');
            incomeElement.val('million');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it("with a floating-point number should not change property", function () {
            sharedObject.changeIncome(3);
            let incomeElement = $('#income');
            incomeElement.val('3.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it("with a negative number should not change property", function () {
            sharedObject.changeIncome(5);
            let incomeElement = $('#income');
            incomeElement.val('-2');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
        it("with a zero should not change property", function () {
            sharedObject.changeIncome(5);
            let incomeElement = $('#income');
            incomeElement.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
        it("with a positive integer should change property correctly", function () {
            sharedObject.changeIncome(10);
            let incomeElement = $('#income');
            incomeElement.val('7');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(7);
        });
    });
});

