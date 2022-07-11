const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const { Cheer } = require("../models/Cheer");

router.post("/", (req, res) => {
  Cheer.findOneAndUpdate(
    req.body,
    req.body,
    { upsert: true, new: true },
    (err) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
});

router.post("/search", (req, res) => {
  let o_user_id = new ObjectId(req.body.user);
  let o_memo_id = new ObjectId(req.body.memo);
  Cheer.findOne({ user: o_user_id, memo: o_memo_id }, (err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    if (result === null) return res.status(400).json({ success: false });
    return res.status(200).json({ success: true, result });
  });
});

router.post("/cancel", (req, res) => {
  let o_user_id = new ObjectId(req.body.user);
  let o_memo_id = new ObjectId(req.body.memo);
  Cheer.deleteOne({ user: o_user_id, memo: o_memo_id }).exec((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

module.exports = router;
