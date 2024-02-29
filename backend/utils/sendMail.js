
require('dotenv').config();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({

    service: 'gmail',
    secure : true, 
    port: 465,
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD_APP
    }
});

module.exports.sendMail = (mailOptions) => {
    console.log("Sending email .......");
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    });
}