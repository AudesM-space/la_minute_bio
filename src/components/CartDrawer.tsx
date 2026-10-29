import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useCart } from '@/cart';
import { useLang } from '@/lang';
import { t } from '@/content';
import { formatPrice, buildWhatsAppUrl } from '@/utils';

export function CartDrawer() {
  const { lang } = useLang();
  const d = t[lang];
  const { items, isOpen, close, remove, setQty, clear, total, count } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const message = () => {
    const lines = items.map(
      (i) => `• ${i.name} × ${i.qty} — ${formatPrice(i.qty * i.price, d.currency)}`
    );
    const head =
      lang === 'fr'
        ? 'Bonjour Liza, je souhaite précommander :'
        : 'Hello Liza, I would like to preorder:';
    const tail =
      lang === 'fr'
        ? `Total : ${formatPrice(total, d.currency)}`
        : `Total: ${formatPrice(total, d.currency)}`;
    return `${head}\n${lines.join('\n')}\n${tail}`;
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={close}
      />
      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-rose-50 shadow-card transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-rose-100 bg-white px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-rose-600" />
            <h3 className="font-display text-lg font-semibold text-ink">{d.cart.title}</h3>
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-700">
              {count} {count === 1 ? d.cart.item : d.cart.items}
            </span>
          </div>
          <button
            onClick={close}
            className="grid h-9 w-9 place-items-center rounded-full text-ink/60 transition hover:bg-rose-100 hover:text-rose-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-10 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-rose-100 text-rose-400">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <p className="mt-4 text-ink/70">{d.cart.empty}</p>
            <button
              onClick={close}
              className="mt-5 rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cta-dark"
            >
              {d.cart.keep}
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {items.map((i) => (
                <div
                  key={i.id}
                  className="flex gap-3 rounded-2xl bg-white p-3 shadow-soft ring-1 ring-rose-100"
                >
                  <img
                    src={i.cover}
                    alt={i.name}
                    className="h-20 w-16 flex-none rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium leading-snug text-ink">{i.name}</p>
                      <button
                        onClick={() => remove(i.id)}
                        className="grid h-7 w-7 place-items-center rounded-full text-ink/40 transition hover:bg-rose-100 hover:text-cta"
                        aria-label={d.cart.remove}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-display text-base font-bold text-price">
                      {formatPrice(i.price, d.currency)}
                    </p>
                    <div className="mt-auto flex items-center gap-2">
                      <div className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50">
                        <button
                          onClick={() => setQty(i.id, i.qty - 1)}
                          className="grid h-7 w-7 place-items-center rounded-full text-rose-700 transition hover:bg-rose-200"
                          aria-label="-"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold tabular-nums">
                          {i.qty}
                        </span>
                        <button
                          onClick={() => setQty(i.id, i.qty + 1)}
                          className="grid h-7 w-7 place-items-center rounded-full text-rose-700 transition hover:bg-rose-200"
                          aria-label="+"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="ml-auto text-sm font-semibold text-ink/70">
                        {formatPrice(i.qty * i.price, d.currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={clear}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 transition hover:text-cta"
              >
                <Trash2 className="h-3.5 w-3.5" />
                {d.cart.clear}
              </button>
            </div>

            <div className="border-t border-rose-100 bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wider text-ink/60">{d.cart.total}</p>
                <p className="font-display text-2xl font-bold text-price">
                  {formatPrice(total, d.currency)}
                </p>
              </div>
              <a
                href={buildWhatsAppUrl(message())}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-cta-dark"
              >
                <MessageCircle className="h-5 w-5" />
                {d.cart.checkout}
              </a>
              <p className="mt-3 text-center text-xs text-ink/50">{d.cart.promoNote}</p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
