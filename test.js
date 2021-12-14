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
