const sgMail = require("@sendgrid/mail");

const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

sgMail.setApiKey(process.env.SG_KEY);

const sendSGMail = async ({
  to,
  sender,
  subject,
  html,
  attachments,
  text,
  
}) => {
  try {
    const from ="abhishekdhange@gmail.com";
 
    const msg = {
      to: to,
      from: from,
      subject:subject,
      html: html,
      // text: text,
      attachments,
    };
console.log(msg);
    return sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

exports.sendEmail = async (args) => {
  if (!process.env.NODE_ENV === "develpment") {
    return new Promise.resolve();
  } else {
    return sendSGMail(args);
  }
};
