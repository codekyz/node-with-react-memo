const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const { Cheer } = require("../models/Cheer");

router.post("/", (req, res) => {
  // 받아온 정보들을 db에 넣어준다
  const cheer = new Cheer(req.body);
  cheer.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get("/cancel", (req, res) => {
  let o_user_id = new ObjectId(req.body.user_id);
  let o_memo_id = new ObjectId(req.body.memo_id);
  Cheer.deleteOne({ user: o_user_id, memo: o_memo_id }).exec((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

module.exports = router;
