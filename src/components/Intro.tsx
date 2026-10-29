import { useLang } from '@/lang';
import { t } from '@/content';

export function Intro() {
  const { lang } = useLang();
  const d = t[lang];
  return (
    <section className="container-x py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500">
          {lang === 'fr' ? 'Bienvenue' : 'Welcome'}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink text-balance sm:text-4xl">
          {d.intro.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/70">{d.intro.body}</p>
        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-rose-300 to-rose-500" />
      </div>
    </section>
  );
}
