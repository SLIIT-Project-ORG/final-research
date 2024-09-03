const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");

router.route("/signup").post(async (req, res) => {
  const userReq = req.body;

  const hashPassword = await bcrypt.hash(userReq.password, 10);
  userReq.password = hashPassword;

  User.findOne({
    username: userReq.username,
  }).then((data) => {
    if (data) {
      res.json({ message: "User already exsists" });
      console.log({ message: "User already exsists" });
    } else {
      User.create(userReq)
        .then((data) => {
          res.json({ message: "User created successfully", data: data });
          console.log({ message: "User created successfully", data: data });
        })
        .catch((err) => {
          res.json({ message: "User creation failed", data: err.message });
        });
    }
  });
});

router.route("/signin").post(async (req, res) => {
  const reqBody = req.body;

  const dbuser = await User.findOne({
    username: reqBody.username,
  });

  if (dbuser) {
    const validPassword = await bcrypt.compare(
      reqBody.password,
      dbuser.password
    );
    console.log("Password Valided : " + validPassword);

    if (validPassword) {
      const token = dbuser.generateAuthToken();
      res.json({
        message: "Login Successful",
        data: token,
        usertype: dbuser.usertype,
        userid: dbuser._id,
      });
      console.log({
        message: "Login Successful",
        data: token,
        usertype: dbuser.usertype,
      });
    } else {
      res.json({ message: "Username or Password invalided", data: "" });
    }
  } else {
    res.json({ message: "User not found", data: "" });
  }
});

router.route("/").get((req, res) => {
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.route("/usertype/:usertype").get((req, res) => {
  User.find({
    usertype: req.params.usertype,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.route("/delete/:id").delete((req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then(() => {
      res.json({
        "message": "User deleted",
      });
    })
    .catch((err) => {
      res.json({
        "message": err.message,
      });
    });
});

router.route("/update").put((req, res) => {
  const body = req.body;

  User.findByIdAndUpdate(body._id, body)
    .then(() => {
      res.json({
        message: "User updated",
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

module.exports = router;
