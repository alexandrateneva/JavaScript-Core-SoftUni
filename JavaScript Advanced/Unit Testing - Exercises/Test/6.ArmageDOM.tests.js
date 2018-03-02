let expect = require("chai").expect;
let jsdom = require('jsdom-global')();
let nuke = require("../6.ArmageDOM").nuke;
let $ = require("jquery");

describe("ArmageDOM - tests", function () {
    let targetHtml;
    beforeEach(function () {
        document.body.innerHTML = `<div id="target">
            <div class="nested target">
                <p>This is some text</p>
            </div>
            <div class="target">
                <p>Empty div</p>
            </div>
            <div class="inside">
                <span class="nested">Some more text</span>
                <span class="target">Some more text</span>
            </div>
        </div>`;
        targetHtml = $('#target');
    });

    it("with valid and invalid selector should not delete anything", function () {
        let selector1 = $('.inside');
        let selector2 = 2;
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml);
    });
    it("with two equals selectors should not delete anything", function () {
        let selector = $('.inside');
        let oldHtml = targetHtml.html();
        nuke(selector, selector);
        expect(targetHtml.html()).to.be.equal(oldHtml);
    });
    it("with two valid selectors should delete element", function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.not.equal(oldHtml);
    });
    it("with two valid selectors should not delete anything", function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let oldHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml);
    });
});