const User = require("../models/users");
const wrapAsync = require("../utils/wrapAsync");

module.exports.renderSignup = (req, res) => {
  res.render("./users/signup.ejs");
};




module.exports.userSignup = wrapAsync(async (req, res, next) => {
    try {
        let { username, email, password } = req.body;

        let newUser = new User({
            email,
            username
        });

        const registeruser = await User.register(newUser, password);

        console.log(registeruser);

        req.login(registeruser, (err) => {
            if (err) {
                return next(err);
            }

            req.flash("success", "Welcome To StaySphere");
            res.redirect("/listings");
        });

    } catch (err) {
        req.flash("error", err.message);
       
        res.redirect("/signup");
    }
});






module.exports.renderLogin = (req, res) => {
  res.render("./users/login.ejs");
};

module.exports.userLogin = async (req, res) => {
  req.flash("success", "Welcome Back to StaySphere");

  // let redirectUrl = res.locals.redirectUrl || "/listings";

  res.redirect("/listings");
};

module.exports.userLogout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "User Logout Succesfully");
    res.redirect("/listings");
  });
};
