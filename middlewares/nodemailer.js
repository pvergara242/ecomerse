const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GOOGLE_ACCOUNT,
        pass: process.env.GOOGLE_SECRET_APP,
    }
});


const mailOptions = {
    from: process.env.GOOGLE_ACCOUNT,
    to: 'l_l_ok@hotmail.com',
    subject: 'Prueba Academlo',
    html: ''
}

const enviarCorreo = () => {
    return new Promise((resolve, reject) => {
        const htmlstream = fs.createReadStream("plantilla.html");
        mailOptions.html = htmlstream;
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                //Rechazamos la promesa porque surgió un error al momento de enviar un correo
                reject(error.message);
            }else{
                //Resolver la promesa porque el correo ha sido enviado satisfactoriamente
                resolve(info.response);
            }
        });
    })  
}

//export default enviarCorreo
module.exports = enviarCorreo; 
