import { FlaskConical } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-rose-600 text-white shadow-soft">
        <FlaskConical className="h-5 w-5" strokeWidth={2.2} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-price ring-2 ring-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-rose-700">
          La Minute
        </span>
        <span className="font-display text-[11px] font-medium uppercase tracking-[0.22em] text-rose-400">
          du Biologiste
        </span>
      </span>
    </span>
  );
}
