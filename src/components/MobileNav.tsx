import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation, type NavItem } from '../lib/nav';

interface Props {
  currentPath: string;
}

function NavLink({ item, currentPath, onClick }: { item: NavItem; currentPath: string; onClick: () => void }) {
  const [open, setOpen] = useState(false);

  if (item.items) {
    return (
      <div>
        <button
          onClick={() => setOpen(v => !v)}
          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
        >
          {item.label}
          <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <div className="mt-1 ml-3 space-y-1 border-l border-[hsl(var(--border))] pl-3">
            {item.items.map(child => (
              <a
                key={child.href}
                href={child.href}
                onClick={onClick}
                className={`block rounded-md px-3 py-1.5 text-sm ${
                  currentPath === child.href
                    ? 'text-[hsl(var(--primary))] font-medium'
                    : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                }`}
              >
                {child.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      onClick={onClick}
      className={`block rounded-md px-3 py-2 text-sm font-medium ${
        currentPath === item.href
          ? 'bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]'
          : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]'
      }`}
    >
      {item.label}
    </a>
  );
}

export default function MobileNav({ currentPath }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-md border border-[hsl(var(--border))] lg:hidden"
      >
        <Menu size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 overflow-y-auto bg-[hsl(var(--background))] p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <span className="text-[#04B6F0] font-display text-lg font-bold">DESIGN4</span>
                <sup className="text-[#04B6F0] text-xs font-bold">PRO</sup>
                <span className="text-[hsl(var(--foreground))] text-sm font-semibold">OpenCart</span>
              </a>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <nav className="space-y-1">
              {navigation.map(item => (
                <NavLink
                  key={item.label}
                  item={item}
                  currentPath={currentPath}
                  onClick={() => setOpen(false)}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
