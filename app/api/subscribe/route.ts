// Email subscribe endpoint.
//
// NOTE: This currently validates input only and does NOT persist anything.
// Before mounting the NewsletterSignup component on live pages, wire a real
// provider here (e.g. Resend audiences, ConvertKit, Mailchimp) so addresses
// are actually stored. Until then, do not collect addresses in production.

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

  // TODO: persist `email` with an email provider before going live.
  // e.g. await resend.contacts.create({ email, audienceId: ... })

  return Response.json({ ok: true });
}
