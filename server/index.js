const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put("https://api.chatengine.io/users/", {
            username: username,
            secret: username,
            first_name: username,
        }, {
            headers: { "private-key": process.env.PRIVATE_KEY }
        });

        return res.status(response.status).json(response.data);
    } catch (err) {
        console.log(err);
        return res.status(err.response.status).json(err.response.data);
    }
});

app.listen(8080, () => {
    console.log("Listening at port 8080");
});


