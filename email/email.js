var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raissa.hendler.felisberto@gmail.com',
    pass: 'aumjqxmtxqhbtwjk'
  }
});

var mailOptions = {
  from: 'raissa.hendler.felisberto@gmail.com',
  to: 'gustavocrispimtec@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});