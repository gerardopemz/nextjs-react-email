import { Resend } from "resend";
import Newsletter from "@/emails/newsletter";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function GET() {
  const emailResponse = await resend.emails.send({
    to: "email@example.com",
    from: "GeraCode <onboarding@resend.dev>",
    subject: "Ejemplo de correo electrónico desde React",
    react: <Newsletter />,
  });

  return NextResponse.json(emailResponse);
}
