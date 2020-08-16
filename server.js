const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.connection");

const app = express();
connectDB();

// app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.json({message: 'Hi server...'});
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on ${process.env.PORT || 3000}`)
});
