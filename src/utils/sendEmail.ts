import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: "sandboxb6bf8b215fb54bb3bd1c082b59352f1f.mailgun.org"
});
