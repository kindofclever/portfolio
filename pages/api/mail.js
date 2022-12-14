const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
      Name: ${body.name}\r\n
      Phone: ${body.phone}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}}
    `;

  const data = {
    to: 'sandra.gufler@appliedtechnology.se',
    from: 'me@sandragufler.se',
    subject: 'New message from portfolio Form',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  await sgMail.send(data);

  res.status(200).json({ status: 'ok' });
};
