var express = require("express");
const { signup, signin ,signout, isSignedIn } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

var router = express.Router()

router.post("/signup", [
    check('name',"name should be of atleast 3 characters").isLength({min:3}),
    check('email',"valid email is required").isEmail(),
    check('password',"password should be atleast 5 char").isLength({min: 5})
], signup);

router.post("/signin", [
    check('email',"valid email is required").isEmail(),
    check('password',"password field is required").isLength({min: 5})
], signin);


router.get("/signout", signout)

router.get("/testroute",isSignedIn, (req, res) => {
    res.json(req.auth);
})

module.exports = router;