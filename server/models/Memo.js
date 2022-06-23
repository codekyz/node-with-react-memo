const mongoose = require("mongoose");

const memoSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    // 공백을 없애주는 역할
    unique: 1,
  },
  memo: {
    type: String,
    maxlength: 100,
  },
});

const Memo = mongoose.model("Memo", memoSchema);

module.exports = { Memo };
