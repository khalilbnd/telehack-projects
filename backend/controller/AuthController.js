const User = require("../model/User");
const Client = require("../model/Client");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendMail } = require("../utils/sendMail");

require('dotenv').config();

const CODEPIN = () => Math.floor(Math.random() * 9000) + 1000;
module.exports.SignUpClientController = (req, res) => {
    
    const { n_client, n_telephone, password, email } = req.body;

    const ValidForm = n_client && n_telephone && password && email;
    if (!ValidForm) {
        res.status(400).json({error: "Invalid form"});
        return;
    }
     
    else{
        Client.findOne({_id: n_client}).then((client) => {
            console.log(client);
            if(client) {
                if(client.n_telephone == n_telephone) {
                    const user = new User({n_client, n_phone: n_telephone, password, email});
                    user.save().then((user) => {
                        res.status(200).json(user);
                    }).catch((err) => {
                        res.status(500).json({error: err});
                    });
                }
                else {
                    res.status(400).json({error: "Invalid phone number"});
                }
            } else {
                res.status(404).json({error: "Client not found"});
            }
          }).catch((err) => {
                res.status(500).json({error: err});
          });
    }
    
      
}

module.exports.SignInClientController = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const ValidForm = email && password;
    if (!ValidForm) {
        res.status(400).json({error: "Invalid form", email, password});
        return;
    }
    else{
        User.findOne({email}).then(async (user) => {
            if(user) {
                const passwordDB = user.password 
            console.log(user);
            if (!user || !(await bcrypt.compare(password, passwordDB))) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const accessToken = jwt.sign({user: {...user, role: "Client"}} , process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h' });
    
    
    
            res.status(200).json({ accessToken, expiresIn: '10h'});
                    res.status(200).json(user);
                
            } else {
                res.status(404).json({error: "User not found"});
            }
          }).catch((err) => {
            console.log(err);
                res.status(500).json({error: err});
          });
    }
};

module.exports.ForgetPassword = (req, res) => {
    const { email } = req.body;
    const ValidForm = email;
    if (!ValidForm) {
        res.status(400).json({error: "Invalid form"});
        return;
    }
    else{
        User.findOne({email}).then((user) => {
            if(user) {
                const userToken = jwt.sign({user: {...user, role: "Client"}} ,process.env.PASSWORD_RESET_TOKEN, { expiresIn: '30m' });
                const url = `http://localhost:5173/reset-password/${userToken}`;

                let mailOptions = {
                    to: user.email,
                    subject: 'Reset Password',
                    html: `Please click this link to reset your password: <a href="${url}">${url}</a>`
                }

                sendMail(mailOptions);
                res.status(200).json({message: "Email sent", code: CODEPIN()});
            } else {
                res.status(404).json({error: "User not found"});
            }
          }).catch((err) => {
                res.status(500).json({error: err});
          });
    }
};

module.exports.ResetPassword = (req, res) => {
    const { password, token } = req.body;
    const ValidForm = password && token;
    if (!ValidForm) {
        res.status(400).json({error: "Invalid form"});
        return;
    }
    else{
        jwt.verify(token, process.env.PASSWORD_RESET_TOKEN, (err, user) => {
            console.log(user);
            if (err) {
                res.status(403).json({error: "Invalid token"});
            } else {
                User.findOneAndUpdate({email: user.user._doc.email}, {password}, {new: true}).then((user) => {
                    res.status(200).json(user);
                }).catch((err) => {
                    res.status(500).json({error: err});
                });
            }
        });
    }
};




