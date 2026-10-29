import { ClipboardList, MessageCircle, CreditCard, Package, Calendar, Smartphone, Banknote } from 'lucide-react';
import { useLang } from '@/lang';
import { t, PREORDER_OPEN, PREORDER_CLOSE, ORDERS_LIVE } from '@/content';

export function OrderProcess() {
  const { lang } = useLang();
  const d = t[lang];

  const steps = [
    { icon: ClipboardList, ...d.order.steps[0] },
    { icon: MessageCircle, ...d.order.steps[1] },
    { icon: CreditCard, ...d.order.steps[2] },
    { icon: Package, ...d.order.steps[3] },
  ];

  const timeline = [
    { date: PREORDER_OPEN, label: d.order.open, active: true },
    { date: PREORDER_CLOSE, label: d.order.close, active: false },
    { date: ORDERS_LIVE, label: d.order.live, active: false },
  ];

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <section className="bg-gradient-to-b from-white to-rose-50 py-16 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500">
            {d.order.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink text-balance sm:text-4xl">
            {d.order.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-white p-6 shadow-soft ring-1 ring-rose-100 transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-rose-600 text-white shadow-soft">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl font-bold text-rose-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-rose-100">
            <div className="flex items-center gap-2 text-rose-600">
              <Calendar className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-wider">{d.order.timeline}</p>
            </div>
            <div className="mt-5 space-y-4">
              {timeline.map((tl, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="relative flex flex-col items-center">
                    <span
                      className={`h-3 w-3 rounded-full ${
                        tl.active ? 'bg-price' : 'bg-rose-300'
                      } ring-4 ring-rose-50`}
                    />
                    {i < timeline.length - 1 && <span className="mt-1 h-12 w-0.5 bg-rose-200" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-500">
                      {fmt(tl.date)}
                    </p>
                    <p className="mt-0.5 font-medium text-ink">{tl.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-rose-100">
            <p className="text-sm font-semibold uppercase tracking-wider text-rose-600">
              {d.order.payment}
            </p>
            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-rose-50 p-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-rose-600 text-white">
                  <Smartphone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">Mobile Money</p>
                  <p className="text-sm text-ink/70">{d.order.momo}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-rose-50 p-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-rose-600 text-white">
                  <Banknote className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">Western Union</p>
                  <p className="text-sm text-ink/70">{d.order.wu}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
