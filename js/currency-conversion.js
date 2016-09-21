/**
 * Conver function amount to another with rate
 * @param amount
 * @param rate
 * @returns {string}
 */
function convertCurrency(amount, rate) {
    return parseFloat(rate * amount).toFixed(2);
}

/**
 * Sum number
 * @param a
 * @param b
 * @returns {number}
 */
function sum(a, b) {
    return parseInt(a) + parseInt(b);
}