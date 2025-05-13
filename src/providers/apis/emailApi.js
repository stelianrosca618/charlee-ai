import axios from 'axios';
import Mailjet from 'node-mailjet';

const mailApiKey = 'ce50e9702de44f50a6d16d1461c91b86';
const mailSecretyKey = '43105879661fb99426026c7dce24a2d9';
const host = '72.167.46.56';
// const host = 'localhost';
const backendPath = `http://${host}:4000/email/send`;
const requestEmailPath = `http://${host}:4000/email/send-request-demo`
const learnEmailPath = `http://${host}:4000/email/send-learn-mode`
const contactEmailPath = `http://${host}:4000/email/send-contact-us`
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

export const sendContactEmail = async (fromMail, fromName, contactData) => {
  axios.post(contactEmailPath, {
    to: fromMail,
    toname: fromName,
    variables: contactData
  })
}

export const sendLearnEmail = async (fromMail, fromName, learnData) => {
  axios.post(learnEmailPath, {
    to: fromMail,
    toname: fromName,
    variables: learnData
  })
}

export const sendRequestEmail = async (fromMail, fromName, requestData) => {
  axios.post(requestEmailPath, {
    to: fromMail,
    toname: fromName,
    variables: requestData
  })
}