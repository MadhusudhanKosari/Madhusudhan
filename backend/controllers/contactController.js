import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendContactEmail = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or use host/port from env
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // Where to send the contact form
            subject: `Portfolio Contact: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }
};
