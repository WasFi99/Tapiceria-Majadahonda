import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("=== Contact API Called ===");

  try {
    // Check if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    console.log("API Key exists:", !!apiKey);
    console.log("API Key starts with:", apiKey?.substring(0, 10) || "NONE");

    if (!apiKey) {
      return NextResponse.json(
        { error: "Configuración del servidor incompleta. API key no encontrada." },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("Request body received:", JSON.stringify(body));

    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(apiKey);
    console.log("Resend initialized, sending email...");

    // Send email using verified domain
    const { data, error } = await resend.emails.send({
      from: "Tapicería Majadahonda <contacto@tapiceriamajadahonda.es>",
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

    console.log("Resend response - data:", data, "error:", error);

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: `Error de Resend: ${error.message || JSON.stringify(error)}` },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("API catch error:", errorMessage);
    return NextResponse.json(
      { error: `Error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
