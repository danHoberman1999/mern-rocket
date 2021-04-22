const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const app = express();
const User = require("./models/User");
const Info = require("./models/Info");
let path = require("path");
const multer = require("multer");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const accountSid = "AC5f50b2e6674e779427415de1a743240e";
const authToken = "7abede696fa938ca268e949aa17cc416";
const { v4: uuidv4 } = require("uuid");

//hello
const db =
  "mongodb+srv://dhoberman:sunny06031999@cluster0.mcv6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully Connected to MongoDB!");
  } catch (err) {
    // If can't connect, show err...
    console.log(err.message);
    // Exit the process with failure code
    process.exit(1);
  }
};

connectDB();

// Middleware

app.use(
  session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

var type = upload.single("file");

passport.serializeUser(function (user, done) {
  console.log("*** serializeUser called, user: ");
  console.log(user); // the whole raw user object!
  console.log("---------");
  done(null, { _id: user._id });
});
passport.deserializeUser(function (id, done) {
  console.log("DeserializeUser called");
  User.findOne({ _id: id }, "username", (err, user) => {
    console.log("*** Deserialize user, user:");
    console.log(user);
    console.log("--------------");
    done(null, user);
  });
});

passport.use(
  new localStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      bcrypt.compare(password, user.password, function (err, res) {
        if (err) return done(err);
        if (res === false) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      });
    });
  })
);

const sendSms = (phone, message) => {
  const client = require("twilio")(accountSid, authToken);
  client.messages
    .create({
      body: message + " welcome to Net-Rocket",
      from: "+14704104953",
      to: phone,
    })
    .then((message) => console.log(message.sid));
};

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "133162901525-dn1t48orgcke7sioi415tp0jj6l7gnoj.apps.googleusercontent.com",
      clientSecret: "FBblFe-YuQHqkuYVuwfVeMtc",
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile.emails);
      let firstname = "...",
        lastname = "...",
        birth = "...",
        gender = "...",
        phone = "...",
        address = "...",
        city = "...",
        state = "...",
        addressShip = "...",
        cityShip = "...",
        stateShip = "...",
        zipShip = "...",
        skill1 = "...",
        skill2 = "...",
        skill3 = "...",
        skiing = "...",
        react = "...",
        zip = "...",
        email = "...",
        password = "...",
        username = profile.emails[0].value;

      User.findOne({ username: profile.emails[0].value }).then(
        (currentUser) => {
          if (currentUser) {
            //if we already have a record with the given profile ID
            cb(null, currentUser);
          } else {
            const newUser = new User({
              firstname,
              lastname,
              username,
              birth,
              gender,
              phone,
              address,
              city,
              state,
              zip,
              addressShip,
              cityShip,
              stateShip,
              zipShip,
              skill1,
              skill2,
              skill3,
              skiing,
              react,
              email,
              password,
            });
            newUser.save((err, savedUser) => {
              if (err) {
                console.log("error" + err);
              }
              console.log("new user added to database");
              cb(null, savedUser);
            });
          }
        }
      );
    }
  )
);

app.post("/upload", type, (req, res) => {
  //convert this to set instead of new
  if (req.file.path === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }

  const photo = req.file.originalname;

  console.log("upload process started");

  User.updateOne(
    { username: req.user.username },
    {
      $set: {
        photo: photo,
        completed: true,
      },
    },
    function (err, user) {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.get("/profileImg", (req, res) => {
  Info.find({}).then((foundUsers) =>
    User.findOne({ username: foundUsers[0].username }).then((foundUser) =>
      res.json(foundUser)
    )
  );
});

app.post("/register", (req, res) => {
  console.log("User signup started");

  (firstname = req.body.firstname),
    (lastname = req.body.lastname),
    (username = req.body.username),
    (birth = req.body.birth),
    (gender = req.body.gender),
    (phone = req.body.phone),
    (address = req.body.address),
    (city = req.body.city),
    (state = req.body.state),
    (addressShip = req.body.addressShip),
    (cityShip = req.body.cityShip),
    (stateShip = req.body.stateShip),
    (zipShip = req.body.zipShip),
    (skill1 = req.body.skill1),
    (skill2 = req.body.skill2),
    (skill3 = req.body.skill3),
    (skiing = req.body.skiing),
    (react = req.body.react),
    (zip = req.body.zip),
    (email = req.body.email),
    (password = req.body.password);

  firstname = firstname.toLowerCase();
  lastname = lastname.toLowerCase();

  User.findOne({
    username: username,
  }).then((user) => {
    if (user) {
      console.log("user already exists");
      res.json({
        error: "Sorry, a user already exists",
      });
    } else {
      console.log(password);
      bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) return next(err);
          const newUser = new User({
            firstname,
            lastname,
            username,
            birth,
            gender,
            phone,
            address,
            city,
            state,
            zip,
            addressShip,
            cityShip,
            stateShip,
            zipShip,
            skill1,
            skill2,
            skill3,
            skiing,
            react,
            email,
            password: hash,
          });
          newUser.save((err, savedUser) => {
            if (err) {
              console.log("error" + err);
            }
            const welcomeMessage = firstname;
            sendSms(phone, welcomeMessage);
            console.log("new user added to database");
            res.json(savedUser);
          });
        });
      });
    }
  });
});

app.post("/infoLocator", (req, res) => {
  console.log("Info Deletion Started");
  Info.collection.remove();
  username = req.body.username;

  const newInfo = new Info({
    username,
  });

  newInfo.save((err, savedInfo) => {
    if (err) {
      console.log("error" + err);
    }
    console.log("new Info added to database");
    res.json(savedInfo);
  });
});

app.get("/infoFound", (req, res) => {
  Info.find({}).then((foundUsers) =>
    User.findOne({ username: foundUsers[0].username }).then((foundUser) =>
      res.json(foundUser)
    )
  );
});

app.post("/changeInfo", (req, res) => {
  console.log("Update info process started");

  User.updateOne(
    { username: req.user.username },
    {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
      },
    },
    function (err, user) {
      if (err) return next(err);
      User.findById(req.user._id, function (err, user) {
        if (err) return next(err);
      });
    }
  );
  console.log("process finished");
});

app.post(
  "/login",
  function (req, res, next) {
    console.log("login process started");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      username: req.user.username,
    };
    res.send(userInfo);
  }
);

app.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user logged in" });
  }
});

app.get("/info", (req, res, next) => {
  console.log("user!!");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

app.get("/firstForward", (req, res) => {
  User.find({})
    .sort({ firstname: 1 })
    .then((foundUsers) => res.json(foundUsers));
});

app.get("/lastForward", (req, res) => {
  User.find({})
    .sort({ lastname: 1 })
    .then((foundUsers) => res.json(foundUsers));
});

app.get("/userInfo", (req, res) => {
  User.findOne({
    username: req.user.username,
  }).then((foundUser) => {
    res.json(foundUser);
  });
});

app.post("/deleteAccount", (req, res) => {
  User.findOneAndDelete({ username: req.user.username }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("deletion successful");
      if (req.user) {
        req.logout();
        res.send({ msg: "logging out" });
      }
    }
  });
});

app.get("/userPhoto", (req, res) => {
  User.find({ username: req.user.username })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/completed", (req, res) => {
  User.find({ username: req.user.username })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/completedStranger", (req, res) => {
  Info.find({}).then((foundUsers) =>
    User.findOne({ username: foundUsers[0].username }).then((data) =>
      res.json(data)
    )
  );
});

app.get("/strangerPhoto", (req, res) => {
  Info.find({}).then((foundUsers) =>
    User.findOne({ username: foundUsers[0].username }).then((data) =>
      res.json(data)
    )
  );
});

if (process.env.NODE_ENV === "production") {
  // Set static (public) folder using express -> index.html in client/build
  app.use(express.static("client/build"));

  // Serve that index.html file within our public folder
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Successfully started server on ${PORT}`));
