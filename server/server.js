const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();
const waitListModel = require("./models/users-waitlist");

require("./utils/db");
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
console.log(process.env.EMAIL, process.env.PASSWORD);

app.post("/api/email", async (req, res, next) => {
  const email = req.body.email;

  let isEmailFound = await waitListModel.find({ email });
  if (isEmailFound.length > 0) {
    return res
      .status(401)
      .json({ message: "User already exist in Waiting List" });
  }

  console.log(email, "is the email");

  const storeUser = new waitListModel({ email });
  storeUser.save();
  // Create transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other email services
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.PASSWORD, // Your email password or app-specific password
    },
  });

  // Function to send a welcome email
  const sendWelcomeEmail = async (userEmail) => {
    const mailOptions = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: "Welcome to Our Virtule!",
      text: `Welcome, to our platform! We will notify you soon when it is launched.`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log("Welcome email sent successfully!");
      res.status(200).json({ message: "Successfully added in waiting list" });
    } catch (error) {
      console.error("Error sending welcome email:", error);
    }
  };

  // Example usage
  sendWelcomeEmail(email);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
