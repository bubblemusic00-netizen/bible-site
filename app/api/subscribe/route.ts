import { Resend } from "resend";

// Email subscribe endpoint backed by Resend audiences.
// Set RESEND_API_KEY and RESEND_AUDIENCE_ID in the Vercel project to activate.
// Until then it returns 503 (no addresses are silently lost or faked).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return Response.json(
      { error: "Email signup is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });
    if (error) throw new Error(error.message);
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 502 },
    );
  }
}
