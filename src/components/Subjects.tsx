import { useMemo, useState } from 'react';
import { Eye, Plus, Info, X, ShoppingCart } from 'lucide-react';
import { useLang } from '@/lang';
import { t, SUBJECTS, type Subject } from '@/content';
import { useCart } from '@/cart';
import { formatPrice } from '@/utils';
import ABOUT_IMAGE from '../assets/liza.jpeg'

type Props = { query: string };

export function Subjects({ query }: Props) {
  const { lang } = useLang();
  const d = t[lang];
  const { add } = useCart();
  const [preview, setPreview] = useState<Subject | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SUBJECTS;
    return SUBJECTS.filter(
      (s) =>
        s.name.fr.toLowerCase().includes(q) ||
        s.name.en.toLowerCase().includes(q) ||
        s.tag.fr.toLowerCase().includes(q) ||
        s.tag.en.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="guides" className="container-x py-12 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-500">
          {d.subjects.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink text-balance sm:text-4xl">
          {d.subjects.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink/70">{d.subjects.subtitle}</p>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl bg-rose-100 p-6 text-center text-ink/70">
          {d.search.empty.replace('{q}', query)}
        </p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((s, i) => (
            <article
              key={s.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-rose-100 transition hover:-translate-y-1 hover:shadow-card"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={s.cover}
                  alt={s.name[lang]}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-600 shadow-soft">
                  Fiche mémo
                </span>
                <button
                  onClick={() => setPreview(s)}
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-rose-600 shadow-soft transition hover:bg-white"
                  aria-label={d.subjects.view}
                >
                  <Eye className="h-4 w-4" />
                </button>
                <div className="absolute inset-x-3 bottom-3">
                  <p className="font-display text-lg font-semibold text-white drop-shadow">{s.name[lang]}</p>
                  <p className="text-xs text-white/85">{s.tag[lang]}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 p-4">
                <p className="font-display text-xl font-bold text-price">
                  {formatPrice(s.price, d.currency)}
                </p>
                <button
                  onClick={() =>
                    add({ id: s.id, name: s.name[lang], price: s.price, cover: s.cover })
                  }
                  className="inline-flex items-center gap-1.5 rounded-full bg-cta px-4 py-2 text-xs font-semibold text-white transition hover:bg-cta-dark"
                >
                  <Plus className="h-3.5 w-3.5" />
                  {d.subjects.add}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-start gap-2 rounded-2xl bg-rose-100/70 p-4 text-sm text-ink/70">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
        <p>{d.subjects.note}</p>
      </div>

      {preview && (
        <PreviewModal subject={preview} onClose={() => setPreview(null)} />
      )}
    </section>
  );
}

function PreviewModal({ subject, onClose }: { subject: Subject; onClose: () => void }) {
  const { lang } = useLang();
  const d = t[lang];
  const { add } = useCart();

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink/70 shadow-soft transition hover:bg-white"
          aria-label={d.subjects.close}
        >
          <X className="h-4 w-4" />
        </button>
        <div className="grid sm:grid-cols-2">
          <div className="relative overflow-hidden">
            <img
              src={subject.cover}
              alt={subject.name[lang]}
              className="h-full max-h-72 w-full object-cover sm:max-h-none"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3">
              <p className="font-display text-lg font-semibold text-white">{subject.name[lang]}</p>
              <p className="text-xs text-white/85">{subject.tag[lang]}</p>
            </div>
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-500">
              {d.subjects.previewTitle.replace('{name}', subject.name[lang])}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{d.subjects.previewBody}</p>

            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              {(lang === 'fr'
                ? ['15 pages de cours synthétiques', 'Notions essentielles organisées pour faciliter l’apprentissage', 'Explications accessibles et points clés à retenir', 'Schémas, tableaux ou illustrations pédagogiques selon le sujet', 'Un calepin, un stylo et un stabilo']
                : ['15 pages of concise course material', 'Essential concepts organized to make learning easier', 'Accessible explanations and key points to remember', 'Diagrams, tables or teaching illustrations depending on the subject', 'A notebook, a pen and a highlighter']
              ).map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  {p}
                </li>
              ))}
            </ul>

            <p className="mt-5 font-display text-2xl font-bold text-price">
              {formatPrice(subject.price, d.currency)}
            </p>
            <button
              onClick={() => {
                add({
                  id: subject.id,
                  name: subject.name[lang],
                  price: subject.price,
                  cover: subject.cover,
                });
                onClose();
              }}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white transition hover:bg-cta-dark"
            >
              <ShoppingCart className="h-4 w-4" />
              {d.subjects.addAndOrder}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
