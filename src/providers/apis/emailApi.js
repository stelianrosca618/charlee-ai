
import Mailjet from 'node-mailjet';
const mailApiKey = '6edd76af32d8ff1e1b4f5fd9a49de716';
const mailSecretyKey = 'e585e877e8033a3ec4df135cb26e9bfd';


const mailjet = Mailjet.apiConnect(
    mailApiKey,
    mailSecretyKey
);
export const sendEmail = async ({fromMail, fromName}) => {
    const request = await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: "stelianrosca618@outlook.com",
              Name: "Sender Name"
            },
            To: [
              {
                Email: "vtask118@outlook.com",
                Name: "Recipient Name"
              }
            ],
            Subject: `New message from testnig`,
            TextPart: "this is testing email",
            HTMLPart: `
              <h3>New message from testnig</h3>
              <p>From: Sender Name</p>
              <p>Email: stelianrosca618@outlook.com</p>
              <p>Message: this is testing email</p>
            `
          }
        ]
      });
}