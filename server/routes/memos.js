const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const { Memo } = require("../models/Memo");

router.post("/", (req, res) => {
  // 받아온 정보들을 db에 넣어준다
  const memo = new Memo(req.body);
  memo.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/data", (req, res) => {
  // memos collection에 들어있는 모든 상품 정보를 가져오기
  Memo.find()
    .populate("writer")
    .exec((err, memoInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, memoInfo });
    });
});

router.post("/mymemo", (req, res) => {
  let o_id = new ObjectId(req.body.id);
  Memo.find({ writer: o_id })
    .populate("writer")
    .exec((err, myMemos) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, myMemos });
    });
});

module.exports = router;
