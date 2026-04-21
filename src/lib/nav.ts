export interface NavItem {
  label: string;
  href?: string;
  items?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Getting Started',
    items: [
      { label: 'Installation', href: '/getting-started/installation/' },
      { label: 'Configuration', href: '/getting-started/configuration/' },
      { label: 'Activation', href: '/getting-started/activation/' },
    ],
  },
  {
    label: 'Extensions',
    items: [
      { label: 'Polish', href: '/extensions/polish/' },
      { label: 'Lithuanian', href: '/extensions/lithuanian/' },
      { label: 'Estonian', href: '/extensions/estonian/' },
      { label: 'Romanian', href: '/extensions/romanian/' },
    ],
  },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Troubleshooting', href: '/troubleshooting/' },
  { label: 'Support', href: '/support/' },
];

export function flattenNav(items: NavItem[]): NavItem[] {
  return items.flatMap(item =>
    item.items ? flattenNav(item.items) : [item]
  );
}
