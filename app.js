if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// console.log(process.env.SECRET);
// console.log(process.env.CLOUD_NAME);
// console.log(process.env.CLOUD_API_KEY);
// console.log(process.env.CLOUD_API_SECRET);

const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const app = express();
const port = 8080;
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./schema");
const session = require("express-session");
const mongoStore = require("connect-mongo");

const flash = require("connect-flash");

// Authenication
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/users.js");




const listingRouter = require("./routes/listings.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);


app.use(express.static(path.join(__dirname, "public")));
// const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust"
const ClouddbUrl = process.env.MONGODB_ATLAS_URI;






app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
app.use(cookieParser());

const store = MongoStore.create({
    mongoUrl: ClouddbUrl,
    touchAfter: 24 * 3600
});

// const session = require("express-session");
const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}

// console.log(process.env.SECRET);
// console.log(process.env.SECRET?.length);



app.use(session(sessionOptions));
app.use(flash());
//pbkdf2 hashing function
app.use(passport.initialize()); // Initialized Passport as a Middleware..
app.use(passport.session());  //A Web Application needs the ability to identify users as they browse from page to page.
                                // This Series of Requests and Responses, each  associated with the same user, is known as a session


passport.use(new LocalStrategy(User.authenticate()));  //That mean we Creating local Strategy in Passport, so All Users are authenticated through Local Strategy and Authenicated those user is used Authenticate() method..

passport.serializeUser(User.serializeUser()); // Passport Serialize User Using .serialize method() basically that method is Ussed by Passport to Serialize (Saved) into the session...
passport.deserializeUser(User.deserializeUser());  // aur user se related jitani bhii infomation hai usko hum unstore karwate h usako hum Deserialized kehte h


// Flash Middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.errormsg = req.flash("error");
    res.locals.currUser = req.user;

    next();

});



app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// ERROR Handling MIDDLEWARE

app.use((err, req, res, next) => {
    let { statusCode = 409, message = "Something Went Wrong" } = err;

    // console.dir(err);
    res.render("./listings/error.ejs", { message });
});


// Start server AFTER setup
async function startServer() {
    try {
        await mongoose.connect(ClouddbUrl);
        console.log("DB Connected");

        app.listen(port, () => {
            console.log("Server running on", port);
        });

    } catch (err) {
        console.log(err.message);
    }
}

startServer();



