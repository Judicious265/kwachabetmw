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

- **State**: Zustand
- **HTTP**: Axios
- **Notifications**: react-hot-toast
- **Real-time**: Native WebSocket API
