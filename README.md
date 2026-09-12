# Namreh Goods — practice storefront

Starter site for the PDE build-along learning project. No tracking installed yet —
that's the point. Each stage of the learning plan adds to this repo.

## Files
- `index.html` — main storefront (3 products, about section, contact form)
- `thank-you.html` — post-"purchase" confirmation page (your conversion page)
- `style.css` — all styling, terminal-window aesthetic
- `script.js` — buy button + form behavior, with comments marking exactly
  where each learning stage's tracking code goes
- `CNAME` — tells GitHub Pages to serve this repo at `shop.namreh.net`

## Deploy steps (Stage 0)

1. Create a new GitHub repo, e.g. `namreh-goods`
2. Push these files to the repo's default branch:
   ```
   git init
   git add .
   git commit -m "Initial storefront"
   git branch -M main
   git remote add origin https://github.com/<your-username>/namreh-goods.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages** → set source to your default branch, root folder
4. Still in **Settings → Pages**, set custom domain to `shop.namreh.net`, enable "Enforce HTTPS"
   (this should auto-detect the `CNAME` file already in the repo)
5. In Cloudflare DNS for `namreh.net`, add:
   - Type: `CNAME`
   - Name: `shop`
   - Target: `<your-username>.github.io`
   - Proxy status: **DNS only** (grey cloud) to start
6. Wait for DNS to propagate, confirm `https://shop.namreh.net` loads

## Where tracking code goes at each stage

Search `script.js` and `thank-you.html` for `STAGE` comments — they mark the
exact spot each stage's tracking code should go, so you're not hunting for
where to add things as you work through the plan.

## GCLID note (Stage 5 / ECL)

Not implemented — this is yours to build. See the comment in `script.js`
near the contact form for what's needed and why.
