const nodemailer = require("nodemailer");
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST || "smtp.gmail.com",
    port: process.env.NODEMAILER_PORT || 465,
    secure: process.env.NODEMAILER_SECURE || true,
    auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

type ResponseData = {
    status?: string;
    message?: string;
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: body.email, // sender addresss
            replyTo: body.email,
            to: "isabellapelot.design@gmail.com", // list of receivers
            subject: `My Vercel Contact: ${body.name}`, // Subject line
            text: body.message, // plain text body
            html: `<b>${body.message}</b>`, // html body
        });
        return NextResponse.json({
            status: "success",
            message: "Thank you for contacting me, I will respond ASAP."
        });
    } catch (error) {
        return NextResponse.json({
            status: "error",
            message: "Oops, something went wrong."
        });
    }
}