const express = require("express");
const router = express.Router();
const User = require("../../schemes/users");

router.post("/verify", async (req, res) => {
  const { email, code } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.verificationCode !== code) {
      return res.status(400).json({ message: "Invalid verification code" });
    }


    user.verified = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", err });
  }
});

module.exports = router;
