const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cheerSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    memo: {
      type: Schema.Types.ObjectId,
      ref: "Memo",
    },
  },
  { timestamps: true }
);

const Cheer = mongoose.model("Cheer", cheerSchema);

module.exports = { Cheer };
