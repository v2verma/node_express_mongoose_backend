module.exports = (app) => {
    const User = require("../controllers/user.controller.js");
    app.post("/signup", User.create);
    // app.post("/login", User.login);
    // app.put("/update/:id", User.update);
    // app.get("/profile/:id", User.getUserProfile);
}
