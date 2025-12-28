import { Resend } from "resend";
import { NextResponse } from "next/server";

// Lazy initialization to avoid build errors
const getResend = () => new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Send email using Resend
    // Note: Using onboarding@resend.dev until custom domain is verified
    const { data, error } = await getResend().emails.send({
      from: "Tapicería Majadahonda <onboarding@resend.dev>",
      to: ["majadahondatapicero@gmail.com"],
      replyTo: email,
      subject: `Nueva consulta de ${name} - Tapicería Majadahonda`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">
            Nueva Consulta desde la Web
          </h2>
          
          <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>👤 Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>📞 Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #c9a227; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1a1a2e;">💬 Mensaje:</h3>
            <p style="white-space: pre-wrap; color: #333;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #1a1a2e; border-radius: 8px;">
            <p style="color: #fff; margin: 0;">
              <a href="https://wa.me/34631543707?text=Hola ${encodeURIComponent(name)}, he recibido tu consulta..." 
                 style="color: #25D366; text-decoration: none; font-weight: bold;">
                📱 Responder por WhatsApp
              </a>
            </p>
          </div>
          
          <p style="color: #888; font-size: 12px; text-align: center; margin-top: 20px;">
            Este email fue enviado desde el formulario de contacto de tapiceriamajadahonda.es
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: `Error al enviar: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error del servidor" },
      { status: 500 }
    );
  }
}
