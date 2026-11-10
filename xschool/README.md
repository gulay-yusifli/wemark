# WM xSchool – Next.js landing page

Next.js 15 (App Router) + TypeScript. Data comes from `https://admin.wemark.pro/api/tasks-xschool/` via a **server-side** `fetch` (`lib/api.ts`), cached and revalidated hourly (ISR).

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Optional: copy `.env.example` to `.env.local` to override `API_URL`.

## Structure
```
app/            layout (fonts), page (server data fetch), globals.css, error.tsx
components/     Header, Banner, About, AboutSlider*, Founder, Programs, Marquee, Faq*, Footer
lib/            api.ts (fetch), types.ts, html.ts (sanitize CMS HTML)
```
`*` client components (slider, FAQ accordion). Marquee is pure CSS (pauses on hover, respects reduced-motion).

## Deploy (Vercel)
```bash
git init && git add . && git commit -m "xSchool task"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
Then on vercel.com: **Add New → Project → import the repo → Deploy** (no env vars needed).

## Note
Styles follow the two Figma screenshots (desktop + mobile overview); exact colors/spacing are estimated – tweak the CSS variables at the top of `app/globals.css` to match Figma precisely.
