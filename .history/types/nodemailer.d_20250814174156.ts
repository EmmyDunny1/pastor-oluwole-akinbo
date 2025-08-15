declare module 'nodemailer';
declare module 'nodemailer/lib/mailer' {
  import { Transporter } from 'nodemailer';

  export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
  }

  export class Mailer extends Transporter {
    sendMail(mailOptions: MailOptions): Promise<void>;
  }
}