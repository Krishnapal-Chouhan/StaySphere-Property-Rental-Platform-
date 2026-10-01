const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");


//Compact way
router.route("/signup")
    .get(userController.renderSignup)
    .post(userController.userSignup);

// ORR----------------------------

// router.get("/signup", userController.renderSignup);

// router.post("/signup", userController.userSignup);

// ---------------------------------------------------------------------------------------


// compact way

router.get("/", (req, res) => {
    res.redirect("/listings");
});

router.route("/login")
    .get(userController.renderLogin)
    .post(saveRedirectUrl,

        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true
        }),
        
        userController.userLogin
    );
// OR----
// EXTRA Work
router.get("/profile", (req, res) => {

    if (!req.user) {
        req.flash("error", "Please login first!");
        return res.redirect("/login");
    }

    res.render("users/profile", {
        user: req.user
    });
});


router.get("/profile/edit", (req, res) => {

    if (!req.user) {
        req.flash("error", "Please login first!");
        return res.redirect("/login");
    }

    res.render("users/profileEdit", {
        user: req.user
    });
});


router.put("/profile/edit", async (req, res) => {
    try {

        if (!req.user) {
            req.flash("error", "Please login first!");
            return res.redirect("/login");
        }

        const { username, email } = req.body;

        req.user.username = username;
        req.user.email = email;

        await req.user.save();

        req.flash("success", "Profile updated successfully!");

        console.log("New username:", username);

        res.redirect("/profile");

    } catch (err) {

        console.error("Profile update error:", err);

        req.flash("error", "Unable to update profile!");

        res.redirect("/profile/edit");
    }
});


// ------------------------------------------------------------------------


router.get("/logout", userController.userLogout);

module.exports = router;

