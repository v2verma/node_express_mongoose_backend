const User = require("../models/user.model.js");

module.exports = {
    create: function (req, res) {
        const user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
          });

        user.save()
        .then((data) => {
          res.send({message: "Created Successfully"});
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while signing Up.",
          });
        });
    }
}



