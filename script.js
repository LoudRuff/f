const nodemailer = require("nodemailer");

// Create transporter using Gmail App Password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ayushvarlani778@gmail.com",      // your Gmail
    pass: "ztwzhqwmggoxnbqn",         // 16-char App Password (NO spaces)
  },
});

// Send email
transporter.sendMail(
  {
    from: "ayushvarlani778@gmail.com",
    to: "dipsite4632@dpsudaipur.com",
    subject: "Test Email from Node + Nodemailer",
    text: "Hello! This email is sent using Nodemailer with Gmail App Password.",
  },
  (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent successfully ✔");
      console.log(info.response);
    }
  }
);
