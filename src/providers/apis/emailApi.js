import axios from 'axios';
import Mailjet from 'node-mailjet';
const mailApiKey = 'ce50e9702de44f50a6d16d1461c91b86';
const mailSecretyKey = '43105879661fb99426026c7dce24a2d9';

const backendPath = 'http://localhost:4000/email/send'
// const mailjet = Mailjet.apiConnect(
//     mailApiKey,
//     mailSecretyKey
// );
export const sendEmail = async (fromMail, fromName) => {
    console.log(fromMail, fromName);
    axios.post(backendPath, {
      to: fromMail,
      toname: fromName,
      subject: "Request a demo today",
      text: "Sign up for a personalized demo today and see how Charlee can help you stay ahead of potential fraud, mitigate losses, and optimize efficiency.",
      html: "<h1>Request a demo today</h1><p>Sign up for a personalized demo today and see how Charlee can help you stay ahead of potential fraud, mitigate losses, and optimize efficiency.</p>"
    })
    // const request = await mailjet.post('send', { version: 'v3.1' }).request({
    //     Messages: [
    //       {
    //         From: {
    //           Email: "Mike@Charlee.ai",
    //           Name: "Michael Vaccarello"
    //         },
    //         To: [
    //           {
    //             Email: "vtask118@outlook.com",
    //             Name: "Recipient Name"
    //           }
    //         ],
    //         Subject: `New message from testnig`,
    //         TextPart: "this is testing email",
    //         HTMLPart: `
    //           <h3>New message from testnig</h3>
    //           <p>From: Sender Name</p>
    //           <p>Email: stelianrosca618@outlook.com</p>
    //           <p>Message: this is testing email</p>
    //         `
    //       }
    //     ]
    //   });
}