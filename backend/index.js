const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const DB = process.env.DATABASE || "mongodb://localhost:27017/yourDB";
const PORT = process.env.PORT || 3000;

const db = mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api", (req, res) => {
    db.collection("name").find({}).toArray((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/api", (req, res) => {
    const data = req.body;
    db.collection("name").insertOne(data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(PORT, () => {
	console.log("Server is running on port", PORT);
});
