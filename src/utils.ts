import { WHATSAPP_BASE } from '@/content';

export function formatPrice(amount: number, currency: string): string {
  const n = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(amount);
  return `${n} ${currency}`;
}

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export function useCountdown(target: string) {
  const targetMs = new Date(target).getTime();
  return () => {
    const diff = targetMs - Date.now();
    if (diff <= 0) return null;
    const days = Math.floor(diff / 86_400_000);
    const hours = Math.floor((diff % 86_400_000) / 3_600_000);
    const minutes = Math.floor((diff % 3_600_000) / 60_000);
    const seconds = Math.floor((diff % 60_000) / 1000);
    return { days, hours, minutes, seconds };
  };
}
