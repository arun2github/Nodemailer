const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user:'anandsomit111@gmail.com',
            pass: '//password'
        }
    }
    )

    //send out email 

    const mailOptions = {
        from: 'anandsomit111@gmail.com',
        to:['imarun1581@gmail.com','anandarun70@gmail.com'],
        subject: 'Hello world this is a test mail',
        text:'This is the body of the mail'
    }


    transport.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Email sent" +info.response);
        }
    })