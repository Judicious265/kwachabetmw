export const fmt = {
  mwk: (n) => `MWK ${parseFloat(n || 0).toLocaleString('en-MW', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
  odds: (n) => parseFloat(n || 0).toFixed(2),
  date: (d) => new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
  datetime: (d) => new Date(d).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
  time: (d) => new Date(d).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
  phone: (p) => p ? p.slice(0, 5) + '****' + p.slice(-3) : '',
  initials: (name) => name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U',
};

export const SPORTS_META = {
  football:     { label: 'Football',    emoji: '⚽' },
  basketball:   { label: 'Basketball',  emoji: '🏀' },
  tennis:       { label: 'Tennis',      emoji: '🎾' },
  ice_hockey:   { label: 'Ice Hockey',  emoji: '🏒' },
  baseball:     { label: 'Baseball',    emoji: '⚾' },
  rugby_league: { label: 'Rugby',       emoji: '🏉' },
};

export const TX_META = {
  deposit:        { label: 'Deposit',        color: 'text-green-400',  sign: '+' },
  withdrawal:     { label: 'Withdrawal',     color: 'text-red-400',    sign: '-' },
  bet_stake:      { label: 'Bet Placed',     color: 'text-yellow-400', sign: '-' },
  bet_win:        { label: 'Win',            color: 'text-brand',      sign: '+' },
  bet_refund:     { label: 'Refund',         color: 'text-blue-400',   sign: '+' },
  bonus_credit:   { label: 'Bonus',          color: 'text-purple-400', sign: '+' },
  referral_bonus: { label: 'Referral Bonus', color: 'text-teal-400',   sign: '+' },
  adjustment:     { label: 'Adjustment',     color: 'text-gray-400',   sign: '' },
};
