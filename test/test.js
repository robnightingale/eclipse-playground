const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

describe('Array', function () {
    before(function () {
        // ...
    });

    describe('#indexOf()', function () {
        context('when not present', function () {
            it('should not throw an error', function () {
                (function () {
                    [1, 2, 3].indexOf(4);
                }).should.not.throw();
            });
            it('should return -1', function () {
                [1, 2, 3].indexOf(4).should.equal(-1);
            });
        });
        context('when present', function () {
            it('should return the index where the element first appears in the array', function () {
                [1, 2, 3].indexOf(3).should.equal(2);
            });
        });
    });
});

var isValidCommaDelimitedList = function (value) {
    // allow letters, commas, and spaces
    var commaDelimitedListRegEx = /^[A-Za-z,\s]+$/;
    return commaDelimitedListRegEx.test(value);
};
// tests
describe('isValidCommaDelimitedList(value)', function () {
    it('should return true for valid list of search terms', function () {
        var tags = 'california, sunset, red';
        isValidCommaDelimitedList(tags).should.be.true;
    });
    it('should return false for search term containing numbers', function () {
        var tags = 'dogs123';
        isValidCommaDelimitedList(tags).should.be.false;
    });
});
