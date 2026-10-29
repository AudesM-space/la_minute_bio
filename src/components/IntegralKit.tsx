import { useState } from 'react';
import { Check, Clock, Flame, ShoppingCart, Gift } from 'lucide-react';
import { useLang } from '@/lang';
import { t,INTEGRAL, PROMO_END } from '@/content';
import { useCart } from '@/cart';
import { formatPrice, useCountdown } from '@/utils';
import kit from '../assets/kit.jpeg';

export function IntegralKit() {
  const { lang } = useLang();
  const d = t[lang];
  const { add } = useCart();
  const getCountdown = useCountdown(PROMO_END);
  const [hover, setHover] = useState(false);
  const c = getCountdown();

  const handleAdd = () => {
    add({
      id: INTEGRAL.id,
      name: INTEGRAL.name[lang],
      price: INTEGRAL.price,
      cover: INTEGRAL.cover,
      integral: true,
    });
  };

  return (
    <section id="integral" className="container-x py-12 sm:py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-600 to-rose-700 text-white shadow-card">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" aria-hidden />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-rose-400/30 blur-3xl" aria-hidden />

        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/30">
              <img
                src={kit}
                alt={INTEGRAL.name[lang]}
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cta px-3 py-1.5 text-xs font-bold text-white shadow-soft">
              <Flame className="h-3.5 w-3.5" />
              {d.integral.badge}
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-100">
              {d.integral.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              {d.integral.title}
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">{d.integral.body}</p>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-rose-100">
              {d.integral.includes}
            </p>
            <ul className="mt-3 space-y-2">
              {d.integral.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-white/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-price-light" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-end gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-rose-100">{d.cart.total}</p>
                <p className="font-display text-4xl font-bold text-price-light">
                  {formatPrice(INTEGRAL.price, d.currency)}
                </p>
              </div>
              <button
                onClick={handleAdd}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-cta-dark"
              >
                <ShoppingCart className={`h-4 w-4 transition ${hover ? 'scale-110' : ''}`} />
                {d.integral.cta}
              </button>
            </div>

            <div className="mt-6 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <div className="flex items-center gap-2 text-rose-100">
                <Clock className="h-4 w-4" />
                <p className="text-xs font-semibold uppercase tracking-wider">{d.integral.promo}</p>
              </div>
              {c && (
                <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                  {[
                    { v: c.days, l: lang === 'fr' ? 'Jours' : 'Days' },
                    { v: c.hours, l: lang === 'fr' ? 'Heures' : 'Hrs' },
                    { v: c.minutes, l: lang === 'fr' ? 'Min' : 'Min' },
                    { v: c.seconds, l: lang === 'fr' ? 'Sec' : 'Sec' },
                  ].map(({ v, l }) => (
                    <div key={l} className="rounded-lg bg-white/10 py-2">
                      <p className="font-display text-xl font-bold tabular-nums">
                        {String(v).padStart(2, '0')}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-rose-100">{l}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-3 flex items-center gap-1.5 text-xs text-rose-100">
                <Gift className="h-3.5 w-3.5" />
                <span>{d.cart.promoNote}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
