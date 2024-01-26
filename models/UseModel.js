const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    twitter_username: {
      type: String,
    },
    discord_username: {
      type: String,
    },
    sei_address: {
      type: String,
    },
    sei_address_2: {
      type: String,
    },
    sei_intrest: {
      type: String,
    },
    sei_presale: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
