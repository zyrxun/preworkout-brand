/**
 * BRANDNAME waitlist worker — form POST -> Resend email to the brand inbox.
 * Host on Cloudflare Workers (free tier). Never embed RESEND_API_KEY in the site.
 *
 * Dashboard setup (no CLI needed):
 *   1. Workers & Pages -> Create -> "Hello World" -> paste this file -> Deploy
 *   2. Settings -> Variables and Secrets -> add:
 *        RESEND_API_KEY  (type: Secret)   your re_... key from resend.com/api-keys
 *        WAITLIST_TO     (type: Text)     the inbox that receives signups
 *        MAIL_FROM       (type: Text)     "BRANDNAME Waitlist <onboarding@resend.dev>"
 *                                         (swap onboarding@resend.dev for your own
 *                                          domain once verified in Resend)
 *   3. Redeploy. Put the worker URL into site/index.html WAITLIST_ENDPOINT.
 */

const ALLOWED_ORIGINS = [
  "https://zyrxun.github.io",
  "http://localhost",
  "http://127.0.0.1",
  "null", // file:// local testing
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors(origin) },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "null";
    const allow =
      ALLOWED_ORIGINS.some((o) => origin === o) ||
      (origin.startsWith("http://localhost") || origin.startsWith("http://127.0.0.1"));

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors(allow ? origin : "https://zyrxun.github.io") });
    }
    if (request.method !== "POST") {
      return json({ ok: false, error: "POST only" }, 405, "https://zyrxun.github.io");
    }
    if (!allow) {
      return json({ ok: false, error: "Origin not allowed" }, 403, "https://zyrxun.github.io");
    }

    let data;
    try {
      data = await request.json();
    } catch (e) {
      return json({ ok: false, error: "Invalid JSON" }, 400, origin);
    }

    // honeypot: real users never fill this; bots do -> pretend success, drop it
    if (data.website) return json({ ok: true }, 200, origin);

    const name = String(data.name || "").trim().slice(0, 60);
    const email = String(data.email || "").trim().slice(0, 120);

    if (!EMAIL_RE.test(email)) {
      return json({ ok: false, error: "That email doesn't look real." }, 400, origin);
    }
    if (!env.RESEND_API_KEY || !env.WAITLIST_TO) {
      return json({ ok: false, error: "Worker not configured (missing secrets)." }, 500, origin);
    }

    const when = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.MAIL_FROM || "BRANDNAME Waitlist <onboarding@resend.dev>",
        to: [env.WAITLIST_TO],
        reply_to: email,
        subject: `💀 New waitlist signup${name ? ` — ${name}` : ""}`,
        text:
          `New waitlist signup\n\n` +
          `Email: ${email}\n` +
          `Name:  ${name || "(not given)"}\n` +
          `Time:  ${when}\n` +
          `UA:    ${request.headers.get("User-Agent") || "unknown"}\n`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return json({ ok: false, error: `Resend error: ${res.status} ${detail.slice(0, 200)}` }, 502, origin);
    }

    return json({ ok: true }, 200, origin);
  },
};
