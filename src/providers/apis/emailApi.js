import axios from 'axios';
import Mailjet from 'node-mailjet';

const mailApiKey = 'ce50e9702de44f50a6d16d1461c91b86';
const mailSecretyKey = '43105879661fb99426026c7dce24a2d9';

const backendPath = 'http://34.236.143.118:4000/email/send'
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
   
}