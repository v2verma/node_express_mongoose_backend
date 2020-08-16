module.exports = (app) => {
    const User = require("../controllers/user.controller");
    app.post("/signup", User.signUp);
    app.post("/login", User.login);
    app.put("/update/:id", User.update);
    app.get("/profile/:id", User.getUserProfile);
}
