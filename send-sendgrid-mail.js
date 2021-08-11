const sendGrid = require('@sendgrid/mail');
require('dotenv').config();

const apiKey = process.env.SENDGRID_EMAIL_KYE || '';

sendGrid.setApiKey(apiKey);

const fromEmail = process.env.SENDER_VERIFIED_EMAIL || `yourverifiedemail@domain.com`;





sendSendGridMail = (array) => {
    const mail = {
        to: array,
        from: fromEmail,
        subject: "Testing",
        templateId: process.env.TEMPLATE_ID,
        dynamic_template_data: {
            subject: `Testing Templates & Stuff`,
            name: `Some "Testing" One`,
            city: '<b>Denver<b>',
        },
        text: "Hello Rohit here",
        html: `<h1>Hi it's Mail from SendGrid</h1>`
    };
    return new Promise((resolve, reject) => {
        //send mail
        sendGrid.send(mail)
            .then(
                (res) => {
                    console.log(res + `Email sent done`, "done");
                    resolve(res);
                })
            .catch(
                (rej) => {
                    console.log(rej + `sending error`, "error");
                    reject(error);
                });
    });

}

withTryCatch = async (array) => {
    try {
        const mail = {
            to: array,
            from: {
                name: "Rohit Gadhave Patil",
                email: fromEmail
            },
            subject: "Testing",
            text: "Hello Rohit here",
            html: `<h1>Hi it's Mail from SendGrid</h1>`,
            dynamic_template_data: {
                subject: 'Testing Templates & Stuff',
                name: 'Some "Testing" One',
                city: '<b>Denver<b>',
            },
        };
        return await sendGrid.send(mail);
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
            return error.response.body
        }
    }
}

module.exports = { sendSendGridMail, withTryCatch };


