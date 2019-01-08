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

const stocks = [100,200,150,250,340,500,200,345,643,432,324,546,654,321,123,212,343,565,768,812,213,415,612,316]


function bestProfit(stock_prices_yesterday) {
    if(!Array.isArray(stock_prices_yesterday)) return false

  let bigProfit = 0

  for(let i = 0; i < stock_prices_yesterday.length; i++){
      for(let j = i; j >= 0; j--){
          if(stock_prices_yesterday[i] - stock_prices_yesterday[j] > bigProfit){
            bigProfit = stock_prices_yesterday[i] - stock_prices_yesterday[j];
          }
      }
  }


}

// console.log(bestProfit(stocks))

module.exports = bestProfit;
