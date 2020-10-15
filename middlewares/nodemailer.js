import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.GOOGLE_ACCOUNT,
        pass: process.env.GOOGLE_SECRET_APP
    }
});
const mailOptios = {
    from: 'process.env.GOOGLE_ACCOUNT',
    to: 'pvergara242@gmail.com',
    subject: 'prueba academlo',
    text: 'hola este es un mensaje de prueba'
}
const enviarCorreo = (objeto) =>{
    transporter.sendMail(objeto,(error,info)=>{
        if(error){
            console.log(error.message);
        }else{
            console.log(info.response);
        }
    })
}
export default enviarCorreo