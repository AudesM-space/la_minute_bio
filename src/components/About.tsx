import { Quote } from 'lucide-react';
import { useLang } from '@/lang';
import { t } from '@/content';
import ABOUT_IMAGE from '../assets/liza.jpeg'

export function About() {
  const { lang } = useLang();
  const d = t[lang];
  const paragraphs = d.about.body.split('\n\n');

  return (
    <section id="about" className="container-x py-16 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-rose-200 to-rose-50 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-card ring-1 ring-rose-100">
            <img
              src={ABOUT_IMAGE}
              alt={d.about.title}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden rotate-[-3deg] rounded-2xl bg-white p-4 shadow-card ring-1 ring-rose-100 sm:block">
            <Quote className="h-6 w-6 text-rose-400" />
            <p className="mt-2 max-w-[10rem] text-xs font-medium leading-snug text-ink/70">
              {lang === 'fr'
                ? 'Comprendre, retenir, réussir.'
                : 'Understand, retain, succeed.'}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500">
            {d.about.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink text-balance sm:text-4xl">
            {d.about.title}
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/75">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-6 font-display text-lg font-semibold text-rose-700">{d.about.signature}</p>
        </div>
      </div>
    </section>
  );
}
