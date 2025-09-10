'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState('--:--:--');

  useEffect(() => {
    const target = new Date('2025-09-14T14:59:59Z'); // JST 23:59:59

    function formatTime(n: number): string {
      return n.toString().padStart(2, '0');
    }

    function updateCountdown() {
      const now = new Date();
      let ms = target.getTime() - now.getTime();
      
      if (ms < 0) {
        setTimeLeft('締切終了');
        return;
      }
      
      const d = Math.floor(ms / 86400000);
      ms -= d * 86400000;
      const h = Math.floor(ms / 3600000);
      ms -= h * 3600000;
      const m = Math.floor(ms / 60000);
      ms -= m * 60000;
      const s = Math.floor(ms / 1000);
      
      setTimeLeft((d > 0 ? d + "日 " : "") + formatTime(h) + ":" + formatTime(m) + ":" + formatTime(s));
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-white/90 font-bold px-2 py-1 rounded bg-black/20 text-xs md:text-sm">
      {timeLeft}
    </span>
  );
}
