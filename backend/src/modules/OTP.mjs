import dotenv from "dotenv";
import twilio from "twilio";

// Load environment variables
dotenv.config({path: './.env'});

// Twilio configuration
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

class OTP {
    static _otpTable = { Jon: { code: 1036, expirationTime: 2709401803141 } }; // In-memory test data

    static generateCode(user_id) {
        const min = 1000; // Minimum 4-digit number
        const max = 9999; // Maximum 4-digit number

        const code = Math.floor(Math.random() * (max - min + 1)) + min;
        OTP.saveCode(user_id, code);
        return code;
    }

    static saveCode(user_id, code) {
        const expirationTime = Date.now() + 600000; // 10 minute from now
        OTP._otpTable[user_id] = { code: code, expirationTime: expirationTime };
    }

    static async sendSMS(phone, user_id) {
        const otp = OTP.generateCode(user_id);

        try {
            const message = await client.messages.create({
                body: `Here is your login code: ${otp}`,
                from: process.env.TWILIO_PHONE_NUMBER, // Use your Twilio phone number
                to: phone
            });

            console.log('SMS message sent:', message.sid);
            return { success: true, message: 'SMS message sent successfully' };
        } catch (error) {
            console.error('Error sending SMS:', error);
            return { success: false, message: 'Failed to send SMS', error: error.message };
        }
    }

    static verifyCode(user_id, code) {
        const otpData = OTP._otpTable[user_id];
        if (!otpData) {
            return false; // user_id not found in OTP table
        }

        if (Date.now() > otpData.expirationTime) {

            console.log("expired code, date now:", Date.now(), "expirationTime:", otpData.expirationTime)
            delete OTP._otpTable[user_id];
            return false; // OTP has expired
        }

        if (otpData.code.toString() !== code.toString()) {
            console.log("code not match")
            return false; // Provided code doesn't match stored code
        }

        delete OTP._otpTable[user_id]; // Remove the OTP after successful verification
        return true;
    }
}

export default OTP;