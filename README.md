# Kwacha Bet — Frontend

Next.js 14 frontend for the Kwacha Bet sports betting platform.

## Pages Included

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Events list, sport tabs, bet slip, live ticker |
| Login | `/login` | Phone + password login |
| Register | `/register` | 2-step registration with OTP |
| Wallet | `/wallet` | Deposit, withdraw, transaction history |
| Tickets | `/tickets` | My bets with expandable detail view |
| Live | `/live` | Live events with real-time odds |
| Results | `/results` | Finished match results |
| Promotions | `/promotions` | Bonus offers and promotions |
| Referral | `/referral` | Refer & earn with share links |
| Profile | `/profile` | Account settings and PIN setup |
| Bet Slip | `/betslip` | Mobile full-screen bet slip |
| Admin | `/admin` | Full admin dashboard (admin only) |
| Terms | `/terms` | Terms and conditions |
| Privacy | `/privacy` | Privacy policy |
| Responsible Gambling | `/responsible-gambling` | Gambling safety |
| Help | `/help` | FAQ and support |
| 404 | — | Custom not-found page |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env.local
# Edit .env.local with your backend URL

# 3. Run development server
npm run dev
# Open http://localhost:3000

# 4. Build for production
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import repo
3. Framework: Next.js (auto-detected)
4. Add environment variables:
   - `NEXT_PUBLIC_API_URL` = your Render API URL
   - `NEXT_PUBLIC_WS_URL` = your Render WebSocket URL
5. Click Deploy

## Deploy to Cloudflare Pages

1. Push to GitHub
2. Cloudflare Pages → Connect to Git → select repo
3. Build command: `npm run build`
4. Build output: `.next`
5. Add the same two environment variables
6. Deploy

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **State**: Zustand
- **HTTP**: Axios
- **Notifications**: react-hot-toast
- **Real-time**: Native WebSocket API
