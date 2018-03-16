let StringBuilder = require('./2.String Builder');
let expect = require("chai").expect;

describe("String Builder - tests", function () {
    let strBuilder;
    beforeEach(function () {
        strBuilder = new StringBuilder('hello');
    });

    it("can be instantiated with a passed in string argument", function () {
        expect(new StringBuilder('hello')).to.deep.equal({_stringArray: ['h', 'e', 'l', 'l', 'o']});
    });
    it("can be instantiated without argument", function () {
        expect(new StringBuilder()).to.deep.equal({_stringArray: []});
    });
    it("can verify input parameter", function () {
        expect(() => StringBuilder._vrfyParam(5)).to.throw(TypeError, 'Argument must be string');
    });
    it("converts the passed in string argument to an array and adds it to the end of the storage", function () {
        strBuilder.append(', world');
        expect(strBuilder).to.deep.equal({_stringArray: ['h', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd']});
    });
    it("converts the passed in string argument to an array and adds it to the beginning of the storage", function () {
        strBuilder.prepend('Again ');
        expect(strBuilder).to.deep.equal({_stringArray: ['A', 'g', 'a', 'i', 'n', ' ', 'h', 'e', 'l', 'l', 'o']});
    });

    describe('insertAt(string, startIndex) function - tests', function () {
        it("insert at middle index", function () {
            strBuilder.insertAt('IN', 3);
            expect(strBuilder).to.deep.equal({_stringArray: ['h', 'e', 'l', 'I', 'N', 'l', 'o']});
        });
        it("insert at first index", function () {
            strBuilder.insertAt('IN', 0);
            expect(strBuilder).to.deep.equal({_stringArray: ['I', 'N', 'h', 'e', 'l', 'l', 'o']});
        });
        it("insert at last index", function () {
            strBuilder.insertAt('IN', 5);
            expect(strBuilder).to.deep.equal({_stringArray: ['h', 'e', 'l', 'l', 'o', 'I', 'N']});
        });
        it("insert at first negative index", function () {
            strBuilder.insertAt('IN', -1);
            expect(strBuilder).to.deep.equal({_stringArray: ['h', 'e', 'l', 'l', 'I', 'N', 'o']});
        });
        it("insert at last negative index", function () {
            strBuilder.insertAt('IN', -5);
            expect(strBuilder).to.deep.equal({_stringArray: ['I', 'N', 'h', 'e', 'l', 'l', 'o']});
        });
        it("insert at negative index out of range", function () {
            strBuilder.insertAt('IN', -10);
            expect(strBuilder).to.deep.equal({_stringArray: ['I', 'N', 'h', 'e', 'l', 'l', 'o']});
        });
        it("insert at positive index out of range", function () {
            strBuilder.insertAt('IN', 10);
            expect(strBuilder).to.deep.equal({_stringArray: ['h', 'e', 'l', 'l', 'o', 'I', 'N']});
        });
    });

    describe('remove(startIndex, length) function - tests', function () {
        it("removes elements at first index (inclusive) with valid length", function () {
            strBuilder.remove(0, 2);
            expect(strBuilder).to.deep.equal({_stringArray: ['l', 'l', 'o']});
        });
        it("removes elements at last index (inclusive) with invalid length", function () {
            strBuilder.remove(5, 3);
            expect(strBuilder).to.deep.equal({_stringArray: ['h', 'e', 'l', 'l', 'o']});
        });
        it("removes elements at first index (inclusive) with invalid length", function () {
            strBuilder.remove(0, 10);
            expect(strBuilder).to.deep.equal({_stringArray: []});
        });
        it("removes elements at negative index", function () {
            strBuilder.remove(-2, 5);
            expect(strBuilder).to.deep.equal({_stringArray: ['h', 'e', 'l']});
        });
        it("removes elements at positive index out of range", function () {
            strBuilder.remove(10, 3);
            expect(strBuilder).to.deep.equal({_stringArray: ['h', 'e', 'l', 'l', 'o']});
        });
    });

    it("test toString()", function () {
        expect(strBuilder.toString()).to.deep.equal('hello');
    });
});