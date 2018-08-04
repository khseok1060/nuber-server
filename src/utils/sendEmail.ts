import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: "sandboxb6bf8b215fb54bb3bd1c082b59352f1f.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "khseok1060@gmail.com",
    to: "khseok1060@gmail.com",
    subject,
    html
  }
  return mailGunClient.messages().send(emailData);
};

export const sendVerifictionEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}">here</a>`;
  return sendEmail(emailSubject, emailBody);
}
