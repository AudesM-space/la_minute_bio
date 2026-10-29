import { useEffect, useState } from 'react';
import { Menu, Search, X, ShoppingBag, Globe } from 'lucide-react';
import { useLang } from '@/lang';
import { t } from '@/content';
import { useCart } from '@/cart';
import logoImg from '../assets/logo.jpeg';


type Props = {
  query: string;
  setQuery: (q: string) => void;
};

export function Header({ query, setQuery }: Props) {
  const { lang, toggle } = useLang();
  const d = t[lang];
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { href: '#accueil', label: d.nav.home },
    { href: '#guides', label: d.nav.guides },
    { href: '#about', label: d.nav.about },
    { href: '#contact', label: d.nav.contact },
  ];

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4 py-3">
        <button onClick={() => go('#accueil')} className="shrink-0">
           <img
    src={logoImg}
    alt="La Minute du Biologiste"
    className="h-10 w-auto"
  />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <button
              key={n.href}
              onClick={() => go(n.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition hover:bg-rose-100 hover:text-rose-700"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center md:flex">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-rose-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={d.search.placeholder}
                className="w-56 rounded-full border border-rose-200 bg-white/70 py-2 pl-9 pr-3 text-sm text-ink outline-none transition focus:w-64 focus:border-rose-400 focus:bg-white"
              />
            </div>
          </div>

          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-rose-600 transition hover:bg-rose-100 md:hidden"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            onClick={toggle}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-rose-200 bg-white/70 px-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
            {lang.toUpperCase()}
          </button>

          <button
            onClick={open}
            className="relative grid h-10 w-10 place-items-center rounded-full bg-rose-600 text-white shadow-soft transition hover:bg-rose-700"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-cta px-1 text-[10px] font-bold text-white ring-2 ring-rose-50">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-rose-700 transition hover:bg-rose-100 lg:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="container-x pb-3 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-rose-400" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={d.search.placeholder}
              className="w-full rounded-full border border-rose-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-rose-400"
            />
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="glass border-t border-rose-100 lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className="rounded-xl px-3 py-3 text-left text-base font-medium text-ink/80 transition hover:bg-rose-100 hover:text-rose-700"
              >
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
