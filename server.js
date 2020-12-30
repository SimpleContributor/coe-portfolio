const express = require('express');
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./coe-portfolio/config');

const port = process.env.PORT || 3000;
const app = express();
const buildPath = path.join(__dirname, 'coe-portfolio/build');

var transport = {
    service: 'Gmail',
    port: 465,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if(error){
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n message: ${message}`;

    var mail = {
        from: creds.USER,
        to: 'calebcoe0@gmail.com',
        subject: 'New Message from Contact Form.',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if(err) {
            console.log("Error Occurs: ", err);
            res.json({
                status: 'fail'
            })
        } else {
            console.log("SUCCESSSS");
            res.json({
                status: 'success'
            })
        }
    })
})

app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/coe-portfolio/build/index.html'));
});

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port);
