/**
 * Spect file
 */

describe('Convert Currency by rate', function () {
    it('100 Baht should be to  3.80', function () {
        expect(convertCurrency(100, 26.80 / 100)).toEqual("26.80");
    })
});

describe('Sum number', function () {
    it('Sum 100 and 11 should be 111', function () {
        expect(sum(100, 11)).toEqual(111);
    })
});

describe('Minus number', function () {
    it('100 minus 11 should be 89', function () {
        expect(sum(100, -11)).toEqual(89);
    })
});