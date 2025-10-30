const express = require("express");
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchUser = require("../middleware/fetchUser");

const JWT_SECRET = "demon_slayer";

// to display content of 'auth' routing
// ROUTE 1: create user using: POST "/api/auth/createuser". No login required.
router.post('/createuser', [  // data validation array
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    // checking errors here
    const result = validationResult(req);
    if (result.isEmpty()) {  // if no errors
        try {
            // finding existing user with same email
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ success, error: "Sorry user with this email already exists" })
            }
            const salt = await bcrypt.genSalt(10);  // generated salt for password
            let secPass = await bcrypt.hash(req.body.password, salt);  // generated hashcode for password and merged salt with it
            // creating new user
            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email
            })
            const data = {
                user: {
                    id: user.id
                }
            };
            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authToken });  // sends only json data

            // res.send(user);  // sends all type of data
        }
        catch (error) {
            console.log(error.message);
            res.status(500).send("Some error occured");
        }
    }
    else {
        success = false;
        res.send({ success, errors: result.array() })  // if errors, return errors
    }
})

// ROUTE 2: authenticate user, using: POST "/api/auth/login". No login required.
router.post('/login', [  // data validation array
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be empty').exists()
], async (req, res) => {
    let success = false;
    // checking errors here
    const result = validationResult(req);
    if (result.isEmpty()) {  // if no errors
        const { email, password } = req.body;  // extract email and password
        try {
            let user = await User.findOne({ email });  // find existing user
            if (!user) {
                success = false;
                return res.status(400).json({ success, error: "Please login with correct credentials" });  // when user not found
            }
            else {
                const passwordCompare = await bcrypt.compare(password, user.password);  // if user found then compare stored password with entered password
                if (!passwordCompare) {
                    success = false
                    return res.status(400).json({ success, error: "Please login with correct credentials" });  // if password comparison fails return error
                }
                else {  // if password matches succesfully, send json web token
                    const data = {
                        user: {
                            id: user.id
                        }
                    };
                    success = true;
                    const authToken = jwt.sign(data, JWT_SECRET);
                    res.json({ success, authToken });
                }
            }
        }
        catch (error) {
            console.log(error.message);
            res.status(500).send("Some error occured");
        }
    }
    else {
        res.send({ errors: result.array() })  // if errors, return errors
    }
})

// ROUTE 3: get loggined in user details, using: POST "/api/auth/getuser". Login required.
router.post('/getuser', fetchUser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;