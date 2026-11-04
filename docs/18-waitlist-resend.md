# 18 — Waitlist wiring (Resend via Cloudflare Worker)

**Status: form is live in DEMO MODE** (success box shows, nothing sent). Goes real the moment
`WAITLIST_ENDPOINT` in `site/index.html` points at the deployed worker (~10 min setup, free tier).

## Architecture (why a worker)
GitHub Pages is static — no server code. Resend's API key must NEVER ship in client-side JS.
So: `site form → Cloudflare Worker (free tier, holds the key as a secret) → Resend API → your inbox`.
Every signup emails you instantly with reply-to set to the signup's address.

## Setup (one-time, ~10 minutes)

### 1. Resend (resend.com)
1. Sign up free → **API Keys** → Create API Key → copy `re_...` (you'll paste it into Cloudflare in step 2 — never into git/chat).
2. No domain needed yet: Resend's test sender `onboarding@resend.dev` can deliver **to your own account email**.
   When you buy the brand domain later: verify it in Resend → Domains, then change `MAIL_FROM` to `waitlist@yourdomain.com`.

### 2. Cloudflare (dash.cloudflare.com, free)
1. **Workers & Pages → Create → Worker → "Hello World"** → name it `waitlist` → Deploy.
2. **Edit code**: delete the boilerplate, paste the full contents of `worker/waitlist-worker.js`, Deploy.
3. **Settings → Variables and Secrets → Add**:
   - `RESEND_API_KEY` (type **Secret**) = your `re_...` key
   - `WAITLIST_TO` (type **Text**) = the inbox that receives signups (e.g. your Gmail)
   - `MAIL_FROM` (type **Text**) = `BRANDNAME Waitlist <onboarding@resend.dev>`
4. Redeploy if it asks. Your worker URL looks like `https://waitlist.<yoursub>.workers.dev` — test it:
   ```bash
   curl -X POST https://waitlist.<yoursub>.workers.dev \
     -H "Content-Type: application/json" \
     -d '{"name":"test","email":"you@example.com"}'
   ```
   → `{"ok":true}` and the email lands in your inbox.

### 3. Point the site at it
Send the worker URL to Hermes — one constant flip (`WAITLIST_ENDPOINT` in `site/index.html`) + redeploy, done.

## Built-in protections
- Honeypot field (`website`) — bots fill it, silently dropped
- Email regex + 120-char caps server-side
- CORS locked to the Pages domain + localhost
- Errors surface inline under the form (`#waitlist-error`); success keeps the particle burst

## Spillover notes
- Resend free tier: 3,000 emails/month, 100/day — a waitlist notification feed is nowhere near the cap.
- Later: swap the worker's Resend call to also add contacts to a Resend **Audience** for the launch blast.
