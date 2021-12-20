const UserData = require("../../Models/User");
const TransactionData = require("../../Models/Transaction");
// const Stocks = require("../../Models/Stocks");

var yahooFinance = require("yahoo-finance");
var yahooFinanceNews = require("yahoo-finance-news");
var cron = require("node-cron");

const resFormat = require("../../Utils/format");

let GlobalListData = {};

cron.schedule("*/1 * * * *", () => {
  getGlobalData();
});

exports.buy = async (req, res) => {
  try {
    const { atPrice, quantity, stockId, stockName } = req.body;
    let exists = 0;
    const userId = req.userData.id;
    const totalPrice = atPrice * quantity;
    let user = await UserData.findOne({ _id: userId });
    console.log(user);
    if (!user) {
      res
        .status(404)
        .send(
          resFormat.ErrorMsg(
            404,
            "User Not Found",
            "Please check your email validity",
            {}
          )
        );
    } else {
      console.log(user.currentWalletValue, totalPrice);
      if (user.currentWalletValue >= totalPrice) {
        if (user.stats.length > 0) {
          user.stats.map((item, i) => {
            if (item.key === stockId) {
              exists = 1;
              item.quantity = item.quantity + quantity;
              item.TotalPrice = item.TotalPrice + totalPrice;
            }
          });
          if (exists === 0) {
            user.stats.push({
              key: stockId,
              quantity,
              TotalPrice: totalPrice,
            });
          }
        } else {
          user.stats = [{ key: stockId, quantity, TotalPrice: totalPrice }];
        }
        saveTransaction(stockId, stockName, quantity, "Buy", atPrice, userId);
        user.currentWalletValue = user.currentWalletValue - totalPrice;
        await user.save();
        res
          .status(201)
          .send(
            resFormat.SuccessMsg({ user }, `Action Completed Successfully`)
          );
      } else {
        res
          .status(409)
          .send(
            resFormat.ErrorMsg(
              409,
              "User Does Not Have the Funds to Perform this Action",
              "Conflict Error",
              {}
            )
          );
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, error.message, "server error", {}));
  }
};

exports.get = async (req, res) => {
  try {
    res.json({ quotes: GlobalListData });
  } catch (error) {}
};

exports.sell = async (req, res) => {
  try {
    const { atPrice, quantity, stockId, stockName } = req.body;
    let resolved = 0;
    const userId = req.userData.id;
    const totalPrice = atPrice * quantity;
    let user = await UserData.findOne({ _id: userId });
    if (!user) {
      res
        .status(404)
        .send(
          resFormat.ErrorMsg(
            404,
            "User Not Found",
            "Please check your email validity",
            {}
          )
        );
    } else {
      console.log(user.hasOwnProperty("stats"), user.stats);
      if (user.stats.length > 0) {
        user.stats.map((item) => {
          if (
            item.key === stockId &&
            item.quantity - quantity >= 0 &&
            item.TotalPrice - totalPrice >= 0
          ) {
            resolved = 1;
            item.quantity = item.quantity - quantity;
            item.TotalPrice = item.TotalPrice - totalPrice;
            user.currentWalletValue = user.currentWalletValue + totalPrice;
          }
        });
        if (resolved === 1) {
          saveTransaction(
            stockId,
            stockName,
            quantity,
            "Sell",
            atPrice,
            userId
          );
          await user.save();
          res
            .status(201)
            .send(
              resFormat.SuccessMsg({ user }, `Action Completed Successfully`)
            );
        } else {
          res
            .status(409)
            .send(
              resFormat.ErrorMsg(
                409,
                "You do not have this Entity's Holding",
                "Conflict Error",
                {}
              )
            );
        }
      } else {
        res
          .status(409)
          .send(
            resFormat.ErrorMsg(
              409,
              "Currently No Holding Funds to Sell",
              "Conflict Error",
              {}
            )
          );
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, error.message, "server error", {}));
  }
};

exports.transactions = async (req, res) => {
  try {
    const id = req.userData.id;
    let transactions = await TransactionData.find({ userId: id }).sort({
      createdAt: "-1",
    });
    if (transactions.length > 0) {
      res
        .status(201)
        .send(
          resFormat.SuccessMsg(
            { transactions },
            `Action Completed Successfully`
          )
        );
    } else {
      res
        .status(404)
        .send(
          resFormat.ErrorMsg(
            404,
            "Transaction Not Found",
            "Please check history",
            {}
          )
        );
    }
  } catch (error) {
    console.log(err);
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
  }
};

exports.history = async (req, res) => {
  try {
    let { stockId } = req.body;
    yahooFinance.historical(
      {
        symbol: stockId,
        from: "2020-10-31",
        to: "2021-10-31",
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      },
      function (err, quotes) {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
        } else {
          res
            .status(201)
            .send(resFormat.SuccessMsg({ quotes }, `History of ${stockId}`));
        }
      }
    );
  } catch (error) {
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
  }
};

exports.getData = async (req, res) => {
  try {
    let { stockId } = req.body;
    yahooFinance.quote(
      {
        symbol: stockId,
        modules: ["price", "summaryDetail"],
      },
      function (err, quotes) {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
        } else {
          res
            .status(201)
            .send(resFormat.SuccessMsg({ quotes }, `History of ${stockId}`));
        }
      }
    );
  } catch (error) {
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
  }
};


exports.getListData = async (req, res) => {
  try {
    if (
      Object.keys(GlobalListData).length > 0 &&
      GlobalListData.Error === undefined
    ) {
      res
        .status(201)
        .send(
          resFormat.SuccessMsg({ quotes: GlobalListData }, `List to Stocks`)
        );
    } else {
      res
        .status(500)
        .send(
          resFormat.ErrorMsg(500, GlobalListData.Error, "server error", {})
        );
    }
  } catch (error) {
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
  }
};

exports.stats = async (req, res) => {
  try {
    const id = req.userData.id;
    let user = await UserData.findOne({ _id: id });

    const stocks = user.stats.map((item) => item.key);
    if (stocks.length > 0) {
      yahooFinance.quote(
        {
          symbols: stocks,
          modules: ["price"],
        },
        function (err, quotes) {
          if (err) {
            console.log(err);
            res
              .status(500)
              .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
          } else {
            stocks.map((item) => {
              quotes[item].price.user_holdings = user.stats.find(
                (op) => op.key === item
              );
            });
            res
              .status(201)
              .send(resFormat.SuccessMsg({ quotes }, `List to Stocks`));
          }
        }
      );
    } else {
      res
        .status(409)
        .send(
          resFormat.ErrorMsg(
            409,
            "User Does Not Have any Funds",
            "Conflict Error",
            {}
          )
        );
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, error.message, "server error", {}));
  }
};

exports.getNews = async (req, res) => {
  try {
    let { stockId } = req.body;
    yahooFinanceNews.get(stockId, function (data, err) {
      try {
        let news = JSON.parse(data);
        if (news[0]?.items && news[0].items.length > 0) {
          res
            .status(201)
            .send(
              resFormat.SuccessMsg(
                { news: news[0].items },
                `News on ${stockId}`
              )
            );
        } else {
          res
            .status(404)
            .send(resFormat.ErrorMsg(500, "No news Found", "server error", {}));
        }
      } catch (error) {
        res
          .status(500)
          .send(resFormat.ErrorMsg(500, error.message, "server error", {}));
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, error.message, "server error", {}));
  }
};

const saveTransaction = async (
  stockId,
  stockName,
  quantity,
  type,
  price,
  userId
) => {
  try {
    let newTransaction = new TransactionData({
      stockId,
      stockName,
      quantity,
      type,
      price,
      userId,
    });
    await newTransaction.save();
  } catch (error) {
    throw error;
  }
};

const getGlobalData = async () => {
  try {
    const stocks = process.env.STOCKS.split("__");
    yahooFinance.quote(
      {
        symbols: stocks,
        modules: ["price"],
      },
      function (err, quotes) {
        if (err) {
          console.log("Application Error" + err.message);
          GlobalListData.Error = "Error" + err.message;
        } else {
          console.log("Application Ready");
          GlobalListData = quotes;
        }
      }
    );
  } catch (error) {
    GlobalListData.Error = "Error" + error.message;
  }
};
