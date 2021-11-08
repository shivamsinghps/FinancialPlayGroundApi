const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    stockId: {
      type: String,
      required: true,
      min: 2,
      max: 5,
    },
    stockName: {
      type: String,
      required: true,
      min: 2,
      max: 256,
    },
    quantity: {
      type: Number,
      required: true,
    },
    type:{
        type:String,
        enum:["Sell","Buy"]
    },
    price:{
        type:Number,
        required:true
    },
    userId : {
        type:mongoose.Schema.Types.ObjectId, 
        required:true, 
        ref:'User'
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("transaction", transactionSchema);
