var user=require('../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

exports.createUser= async(req, res) => {
    try{    console.log(req.body)
        var { userName, email, password } = req.body
    
    
        var data = {
    
          userName: userName,
          email: email,
          password: password
        }
        data.password=await bcrypt.hash(password, 10);
    
        var userData =  await user.create(data)
        console.log(userData.id)
        return res.status(200).json({
            Message: "Account Created Successfully, check Your Email",
            Data: userData
          })
        } catch (error) {
          console.log(error);
          return res.status(302).json({
            success: false,
            error: error.message,
          })
        }
        }
    
exports.loginUser = (req, res, next) => {
    console.log(req.body);
   // var errors = validationResult(req) //if errors from user_request.js
    // if (!errors.isEmpty()) {
    //     res.status(422).json({ errors: errors.array() })
    //     return
    // }
    
    var { email, password } = req.body
   
    
    user
        .findOne({
        where: { email: email },
        // include: [
        //   'role',
        // ],
        })
        .then(async function (userData) {
        //return res.send(userData);
        if (!userData) {
            return res.status(401).json({
            message: 'Incorrect email',
            })
        } else {
    
            if (userData.password && await bcrypt.compare(password, userData.password)) {
            //if password compared successfully, mean users logged in. We will assign him a JWT token that user will use to access protected end points
            var token = jwt.sign(
                {
                id: userData.id,
    
                },
                "MYSECRET", //env secret is picked from env file
                {
                expiresIn: '365d',
                },
            )
            return res.status(200).json({
                message: 'logged in successfully',
                user: userData,
                token: token,
            })
            } else {
            return res.status(401).json({
                message: 'Incorrect Password',
            })
            }
        }
        })
    }
    