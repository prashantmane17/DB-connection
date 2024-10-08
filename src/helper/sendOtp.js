import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const sendOtpViaSms = async (mobileNum, otp) => {
  try {
    const message = await client.messages.create({
      body: `Your verification code is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: mobileNum,
    });
    return message.sid;
  } catch (error) {
    console.error("Failed to send OTP via SMS", error);
    throw new Error("Failed to send OTP");
  }
};
