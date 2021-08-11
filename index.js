const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const { sendSendGridMail } = require('./send-sendgrid-mail');
app.get('/', async (req, res, next) => {
    const array = ["rohitgadhave249@gmail.com"]
    const mailres = await sendSendGridMail(array);
    res.send(mailres);
});

app.listen(3000, () => {
    console.log("server runnig");
});