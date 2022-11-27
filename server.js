const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { initializeDBConnection } = require("./connection.mongo");
const userRoutes = require("./routes/user");
initializeDBConnection();
const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

const crypto = require("crypto");

require("dotenv").config();

let users = [
  {
    id: crypto.randomUUID(),
    firstName: "Manasa",
    lastName: "reddy",
    emailID: "random@gmail.com",
    password: "random@Password1",
  },
  {
    id: crypto.randomUUID(),
    firstName: "Test_user",
    lastName: "Tester",
    emailID: "testuser@gmail.com",
    password: "test@Password1",
  },
];

app.get("/", (req, res) => {
  res.json({ isSuccess: true, data: "coming soon..." });
});

// app.get("/login", async (req, res) => {
//   try {
//     let data = users;
//     res.json({ isSuccess: true, data: users });
//   } catch (err) {
//     console.error(err, "at fetching users data at login page");
//     res.json({ isSuccess: false, data: err });
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     let credentials = await req.body;
//     console.log(req.body, "at login post");

//     res.json({ isSuccess: true, data: { ...credentials, token: "a" } });
//   } catch (err) {
//     console.error(err, "at posting credentials at login route");
//     res.json({ isSuccess: false, data: err });
//   }
// });

// app.post("/signup", async (req, res) => {
//   try {
//     let user = await req.body;
//     console.log(req.body, "at signup post");
//     users.unshift({ ...user, id: crypto.randomUUID() });
//     console.log(users);
//     res.json({ isSuccess: true, data: users });
//   } catch (err) {
//     console.error(err, "at posting user to server");
//     res.json({ isSuccess: false, data: err });
//   }
// });
const User = require("./models/user");
const jwt = require("jsonwebtoken");
app.use("/", userRoutes);
app.listen(port, () => {
  console.log(`listening on ${port} port`);
});
