/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit (stock_prices_yesterday) {

    let purchasePrice = Infinity;
    let profit = -Infinity;
    const len = stock_prices_yesterday.length;
    const arr = stock_prices_yesterday;

    for (let i = 0; i < len; i++ ) {
        if (arr[i] < purchasePrice) {
            purchasePrice = arr[i];
            continue;
        }
        if (arr[i] - purchasePrice > profit) {
            profit = arr[i] - purchasePrice
        }
    }

    return profit;

}

module.exports = bestProfit;
