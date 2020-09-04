const express = require('express');

const PORT = process.env.PORT || 3000;
const test = require('./Modules/test')

const app = express();


const db = require('./config/db');
db();



app.get("/", (req, res) => {
    return res.render('upload.ejs');
})


app.post("/show", async(req, res) => {
    try {
        const file = test({
            filename: "yes",
        })
        const response = await file.save()
        return res.json({ "done": "DONE" })

    } catch (error) {

    }

})


app.listen(PORT, (req, res) => {
    console.log(`App is running at ${PORT}`)
})