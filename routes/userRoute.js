const express = require("express");
const User = require("../models/UseModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const {
    twitter_username,
    discord_username,
    sei_address,
    sei_address_2,
    sei_intrest,
    sei_presale,
  } = req.body;

  console.log(req.body);

  try {
    const twitterExists = await User.findOne({ twitter_username });
    const discordExists = await User.findOne({ discord_username });

    if (twitterExists) {
      return res
        .status(404)
        .json({ message: "Twitter Account already applied" });
    }
       if (discordExists) {
      return res
        .status(404)
        .json({ message: "Discord Account already applied" });
    }
    const user = await User.create({
      twitter_username,
      discord_username,
      sei_address,
      sei_address_2,
      sei_intrest,
      sei_presale,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
