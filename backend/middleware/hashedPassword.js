
const bcrypt = require('bcrypt');
const workFactor = 8;

const hashedPassword = async (req, res, next) => {
    let { password } = req.body;
    bcrypt.genSalt(workFactor, (err, salt)=> {  
        bcrypt.hash(password, salt, (err, hash)=> {
            req.body.password = hash;
            next();
        });
      });
}


module.exports = hashedPassword;