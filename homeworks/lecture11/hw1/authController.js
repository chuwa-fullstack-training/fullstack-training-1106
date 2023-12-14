const { User } = require("./schema");
const jwt = require('jsonwebtoken');

// render the form in get /login
const login_get = (req, res, next) => {
   res.render('loginPage');
}

const login_post = async (req, res, next) => {
   try {
      console.log("req: body", req.body);
      const { username: firstName, password: lastName } = req.body;
      if (firstName && lastName) {
         // validate user credential
         const user = await User.findOne({ firstName: firstName });
         if (!user || (user.lastName !== lastName)) {
            return res.status(401).json({ mesage: "Invalid username or password" });
         }

         // send back JWT token as proof of authentication
         const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1000h' }
         );

         // store token in cookie
         res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
         res.json({
            user: { firstName: user.firstName, lastName: user.lastName, company: user?.company }
         });
      }
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}

const logout_get = (req, res) => {
   res.clearCookie('token');
   res.redirect('/api/login');
}

module.exports = {
   login_get,
   login_post,
   logout_get
}