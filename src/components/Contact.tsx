import { MessageCircle, Music2, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/lang';
import { t, WHATSAPP_BASE, TIKTOK_URL, LAB_IMAGE } from '@/content';

export function Contact() {
  const { lang } = useLang();
  const d = t[lang];

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50 to-rose-100" />
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500">
              {d.contact.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink text-balance sm:text-4xl">
              {d.contact.title}
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/70">{d.contact.body}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-cta p-6 text-white shadow-soft transition hover:-translate-y-1 hover:bg-cta-dark hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/20">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-4 font-display text-lg font-semibold">{d.contact.whatsapp}</p>
                <p className="text-sm text-white/80">{d.contact.whatsappNote}</p>
              </a>

              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-ink p-6 text-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15">
                    <Music2 className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-4 font-display text-lg font-semibold">{d.contact.tiktok}</p>
                <p className="text-sm text-white/80">{d.contact.tiktokNote}</p>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-card ring-1 ring-rose-100">
              <img
                src={LAB_IMAGE}
                alt="Biologie médicale"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
