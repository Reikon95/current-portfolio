import Plunk from "@plunk/node";

export async function POST(request) {
  const details = await request.json();
  try {
    const plunk = new Plunk(process.env.PLUNK_SECRET);

    const emailToSend = {
      to: "cameronjwblackwood@gmail.com",
      subject: `New message from ${details.name}`,
      body: `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Wedding RSVP Confirmation</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          background-color: #f4f4f4;
                          color: #333;
                          padding: 20px;
                      }
                      .container {
                          background-color: #ffffff;
                          padding: 20px;
                          border-radius: 8px;
                          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                          max-width: 600px;
                          margin: auto;
                      }
                      h1 {
                          color: #d23669;
                      }
                      .details {
                          margin-top: 20px;
                      }
                      .details p {
                          margin: 5px 0;
                      }
                      .footer {
                          margin-top: 20px;
                          font-size: 12px;
                          color: #777;
                      }
                  </style>
              </head>
              <body>
                  <div class="container">
                      <h1>New message</h1>
                      <div class="details">
                          <p><strong>Guest(s):</strong> ${details.name}</p>
                          <p><strong>Attendance:</strong> ${details.email}</p>

                          <p><strong>Message:</strong> ${details.message}</p>
                      </div>
                  </div>
              </body>
              </html>
            `,
    };

    const success = await plunk.emails.send(emailToSend);
    if (success) {
      return Response.json({ message: "OK" });
    }
  } catch (error) {
    console.error("Failed to send the RSVP email:", error);
    return Response.json({ message: "Error", status: 500 });
  }
}
