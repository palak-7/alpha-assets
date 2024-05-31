import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
import connection from "../../../helper/db";

export const POST = async (req, res) => {
  const { data } = await req.json();
  const unique_id = uuid();
  try {
    const rows = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "INSERT INTO newsletter (id,email) VALUES (?, ?)",
        [unique_id, data],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the promise if there's an error
          } else {
            resolve(results); // Resolve the promise with the query results
          }
        }
      );
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });
    var mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Alfa Assets Newsletter",
      html: `<html lang="en">
          <head>
            <meta charset="utf-8">
      
            <title>Alfa Assets Enquiry Form</title>
            <meta name="description" content="Alfa Assets Newsletter">
            <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
            <link rel="stylesheet" href="css/styles.css?v=1.0">
      
          </head>
      
          <body>
            <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
                  <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3> ✉️${data} Subscribed to the newsletter</h3>
                  <div style="font-size: 16px;">
                  </div>
                  </div>
          </body>
          </html>`,
    };
    transporter.sendMail(mailOptions);

    //send confirmation mail to user
    var mailOptions = {
      from: process.env.MY_EMAIL,
      to: data,
      subject: "Thank You for subscribing to Alfa Assets!",
      html: `<html lang="en">
          <head>
            <meta charset="utf-8">
      
            <title>Alfa Assets</title>
            <meta name="description" content="TreatGlobe Enquiry Form">
            <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
            <link rel="stylesheet" href="css/styles.css?v=1.0">
      
          </head>
      
          <body>
            <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
                  <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h2>Hey ${data}, </h2>
                  <p>You recently subscibed to Alfa Assets News Letter<br/> Stay Tuned for daily news and updates!</p>
                  <div style="font-size: 16px;">
                  <br>
                  </div>
                  </div>
          </body>
          </html>`,
    };
    transporter.sendMail(mailOptions);

    return NextResponse.json({
      Message: "NewsLetter Subscribed!",
      success: true,
    });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({
      Message: "Something went wrong!",
      success: false,
    });
  }
};
