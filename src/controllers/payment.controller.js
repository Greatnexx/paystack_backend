import https from "https";
import PAYMENT from "../models/paymentModel.js";

export const initiatePayment = (req, res) => {
  try {
    const { email, amount } = req.body;

    const params = JSON.stringify({
      email,
      amount: amount * 100, 
    });

    const options = {
      hostname: "api.paystack.co",
      path: "/transaction/initialize",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, 
        "Content-Type": "application/json",
      },
    };

    const request = https.request(options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", async () => {
        const result = JSON.parse(data);
        if (response.statusCode === 200 && result.status) {
          const { authorization_url, access_code, reference } = result.data;

          const payment = new PAYMENT({
            email,
            amount,
            reference,
            access_code,
            authorization_url,
          });

          await payment.save();

          return res.json({
            status: true,
            message: "Payment initialized successfully",
            data: result.data,
          });
        } else {
          return res.status(400).json({
            status: false,
            message: "Unable to initialize payment",
            error: result,
          });
        }
      });
    });

    request.on("error", (error) => {
      console.error("Error initializing payment:", error.message);
      return res.status(500).json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    });

    // Send the request with the parameters
    request.write(params);
    request.end();
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({ status: false, message: "Server error", error: err.message });
  }
};
