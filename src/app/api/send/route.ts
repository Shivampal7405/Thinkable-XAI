import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>", // replace with your verified sender
            to: ['shivampal7405@gmail.com'], // the email address you want to send a message
            subject: `${name} has a message!`,
            react: EmailTemplate({ name, email, message }),
        });

        if (error) {
            console.log("error is", error)
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (err: unknown) {
        console.error("❌ Resend Error full:", err);

        if (err instanceof Error) {
            console.error("❌ Resend Error message:", err.message);
            return NextResponse.json(
                { error: err.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}