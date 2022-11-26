const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "please enter your first name"],
    },
    lastName: {
      type: String,
      trim: true,
    },
    emailID: {
      type: String,
      trim: true,
      unique: true,
      required: "Email address is required",
      // validate: {
      //   validator: function (v) {
      //     return /[a-z][0-9]*@gmail.com/.test(v);
      //   },
      //   message: (props) => `${props.value} is not a valid email`,
      // },
      //validate: [validateEmail, "Please fill a valid email id"],
      // match: [
      //   "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$",
      //   "i",
      //   "Please fill a valid email ID",
      // ],
    },
    password: {
      type: String,
      trim: true,
      unique: true,
      required: "Password is required",
      // validate: {
      //   validator: function (v) {
      //     return v.length > 6 && /\d+/.test(v);
      //   },
      //   message: (props) => `Please enter valid password`,
      // },
      // validate: [validatePassword, "Please enter valid password"],
    },
  },
  { timestamps: true }
);

function validateEmail(emailID) {
  let matchEmail = "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$";
  return matchEmail.test(emailID);
}

function validatePassword(password) {
  let matchPass = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$";
  return matchPass.test(password);
}

module.exports = mongoose.model("User", userSchema);
