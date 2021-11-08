const UserData = require("../../Models/User");
const TransactionData = require("../../Models/Transaction");

const resFormat = require("../../Utils/format");

exports.buy = async (req, res) => {
  try {
    const { atPrice, quantity, stockId, stockName } = req.body;
    const userId = req.userData.id;
    const totalPrice = atPrice * quantity
    let user = UserData.findOne({ _id: userId });
    if (!user) {

    } else {

      saveTransaction(stockId, stockName, quantity, "Buy", atPrice, userId);

      if(user.currentWalletValue >= totalPrice){
          user.currentWalletValue =  user.currentWalletValue - totalPrice
      }
    }
    }
  } catch (error) {}
};

exports.sell = async (req, res) => {};

exports.transactions = async (req, res) => {};

exports.history = async (req, res) => {};

exports.getData = async (req, res) => {};

exports.getNews = async (req, res) => {};

exports.getStats = async (req, res) => {};

const saveTransaction = (id, stockName, quantity, type, price, userId) => {
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
