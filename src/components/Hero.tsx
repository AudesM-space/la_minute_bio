import { Sparkles, ArrowRight, BookOpen, Layers, Zap } from 'lucide-react';
import { useLang } from '@/lang';
import { t, HERO_IMAGE } from '@/content';

export function Hero() {
  const { lang } = useLang();
  const d = t[lang];

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="accueil" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-100 via-rose-50 to-white" />
      <div
        className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl"
        aria-hidden
      />

      <div className="container-x grid items-center gap-10 pb-16 lg:grid-cols-2 lg:gap-12 lg:pb-24">
        <div className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rose-600 shadow-soft ring-1 ring-rose-200">
            <Sparkles className="h-3.5 w-3.5" />
            {d.hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            {d.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">{d.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => go('#guides')}
              className="group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-cta-dark hover:shadow-card"
            >
              {d.hero.cta}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => go('#integral')}
              className="inline-flex items-center gap-2 rounded-full border-2 border-rose-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-rose-700 transition hover:border-rose-500 hover:bg-white"
            >
              {d.hero.cta2}
            </button>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { icon: BookOpen, label: d.hero.stat1 },
              { icon: Layers, label: d.hero.stat2 },
              { icon: Zap, label: d.hero.stat3 },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl bg-white/70 p-3 ring-1 ring-rose-100">
                <Icon className="h-5 w-5 text-rose-600" />
                <p className="mt-2 text-xs font-medium leading-snug text-ink/70">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fadeUp [animation-delay:120ms]">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-rose-200/60 to-white/0 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-card ring-1 ring-rose-100">
            <img
              src={HERO_IMAGE}
              alt="Fiches mémo disposées sur une table"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 to-transparent p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-xl font-semibold text-white">La Minute du Biologiste</p>
                  <p className="text-sm text-white/80">Fiches mémo • Biologie médicale</p>
                </div>
                <span className="rounded-full bg-price px-3 py-1 text-xs font-bold text-white shadow-soft">
                  Promo
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 top-8 hidden rotate-[-6deg] rounded-2xl bg-white p-3 shadow-card ring-1 ring-rose-100 sm:block">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-rose-100 text-rose-600">
                <BookOpen className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">10 matières</p>
                <p className="text-[10px] text-ink/60">Fiches mémo</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 bottom-24 hidden rotate-[6deg] animate-floaty rounded-2xl bg-white p-3 shadow-card ring-1 ring-rose-100 sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-rose-500">Prix</p>
            <p className="font-display text-lg font-bold text-price">45 000 FCFA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
