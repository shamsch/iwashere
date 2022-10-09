const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

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

const nameSchema = new mongoose.Schema({
    name: String,
});

const Name = mongoose.model("Name", nameSchema);


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api", (req, res) => {
    Name.find({}, (err, names) => {
        if (err) {
            console.log(err);
        } else {
            res.json(names);
        }
    });
});

app.post("/api", (req, res) => {
    const { name } = req.body;
    const newName = new Name({ name });
    newName.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Name added!");
        }
    }
    );
});

app.listen(PORT, () => {
	console.log("Server is running on port", PORT);
});
