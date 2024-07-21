import nodemailer from 'nodemailer'

class MailService {


    constructor() {
        this.transporter = nodemailer.createTransport({
            host: precess.env.SMTP_HOST,
            port: precess.env.SMTP_PORT,
            secure: true,
            auth: {
                user: precess.env.SMTP_USER,
                pass: precess.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: precess.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта ' + precess.env.SMTP_API_URL,
            text: '',
            html: `
                <div>
                    <h1>Для активации аккаунта перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>            
            `
        })
    }
}



export default MailService();