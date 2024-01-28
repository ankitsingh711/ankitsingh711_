const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello")
});

app.post('/submit-form', (req, res) => {
    console.log(req);
    const { email, phone_number, message } = req.body;

    console.log(email)
    console.log(phone_number)
    console.log(message)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: `${email}`,
        to: 'developerankit2127@gmail.com',
        subject: 'New Form Submission from my Portfolio',
        html: `<h3> Mail from Portfolio </h3> <p>Email: ${email}</p><p>Phone Number : ${phone_number}</p><p>Message: ${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.redirect('/index.html');
    });

    res.send("mail sent thank you")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
