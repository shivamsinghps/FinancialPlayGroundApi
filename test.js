var yahooFinance = require('yahoo-finance');
// var cron = require('node-cron');

// yahooFinance.historical({
//   symbol: 'AAPL',
//   from: '2012-01-01',
//   to: '2012-12-31',
//   // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
// }, function (err, quotes) {
//   console.log(quotes);
// });

// // // This replaces the deprecated snapshot() API
// yahooFinance.quote({
//   symbol: 'AAPL',
//   modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
// }, function (err, quotes) {
//   // ...
// });



// cron.schedule('*/1 * * * *', () => {
    console.log("33");
    const STOCKS='ETH-USD__AAPL__BTC-USD__TSLA__GOOG__NFLX__AMZN__FB__XRP-USD__LT.NS__TTM__RELIANCE.NS'
    const stocks = STOCKS.split("__");
    yahooFinance.quote({
        symbols: stocks,
        modules: [ 'price' ] // see the docs for the full list
      }, function (err, quotes) {
        console.log(quotes);
      });
// });

// var { YFinanceLive } = require('yfinance-live')

// function onchange(data) {
//   console.log(data)
// }
// let yfinanceObj = new YFinanceLive(['GOOGL', 'AAPL', 'TSLA'], onchange)
// console.log(yfinanceObj);

// const StockSocket = require("stocksocket");

// StockSocket.addTicker("ETH-USD", stockPriceChanged);

// function stockPriceChanged(data) {
//   //Choose what to do with your data as it comes in.
//   console.log(data);
// }