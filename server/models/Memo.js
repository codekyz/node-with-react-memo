const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memoSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    memo: {
      type: String,
      maxlength: 100,
    },
    cheer: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Memo = mongoose.model("Memo", memoSchema);

module.exports = { Memo };
