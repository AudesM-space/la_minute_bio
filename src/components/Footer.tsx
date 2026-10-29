import { FlaskConical, Heart } from 'lucide-react';
import { useLang } from '@/lang';
import { t, WHATSAPP_BASE, TIKTOK_URL } from '@/content';

import logoImg from '../assets/logo.jpeg';

export function Footer() {
  const { lang } = useLang();
  const d = t[lang];

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-ink text-white/85">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="[&_*]:!text-white">
               <img
    src={logoImg}
    alt="La Minute du Biologiste"
    className="h-10 w-auto"
  />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {d.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              {d.footer.nav}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: '#accueil', label: d.nav.home },
                { href: '#guides', label: d.nav.guides },
                { href: '#about', label: d.nav.about },
                { href: '#contact', label: d.nav.contact },
              ].map((n) => (
                <li key={n.href}>
                  <button
                    onClick={() => go(n.href)}
                    className="text-white/75 transition hover:text-rose-300"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              {d.footer.contact}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={WHATSAPP_BASE} target="_blank" rel="noreferrer" className="text-white/75 transition hover:text-rose-300">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="text-white/75 transition hover:text-rose-300">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row">
          <p className="flex items-center gap-2">
            <FlaskConical className="h-4 w-4 text-rose-400" />
            © {new Date().getFullYear()} La Minute du Biologiste — {d.footer.rights}
          </p>
          <p className="flex items-center gap-1.5">
            {d.footer.madeWith}
            <Heart className="h-3.5 w-3.5 fill-cta text-cta" />
          </p>
        </div>
      </div>
    </footer>
  );
}
