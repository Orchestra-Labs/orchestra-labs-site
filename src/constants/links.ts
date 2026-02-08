import { Discord, GitHub, Telegram, XIcon } from '@/assets/icons';
import { LinkTree } from '@/assets/icons/LinkTree';
import { ROUTES, EXTERNAL_SITES } from '@/config/';

export const MAIN_LAYOUT_LINKS = [
  {
    id: '1',
    label: 'Symphony',
    href: EXTERNAL_SITES.SYMPHONY,
    target: '_blank',
  },
  {
    id: '2',
    label: 'Aria Wallet',
    href: EXTERNAL_SITES.ARIA,
    target: '_blank',
  },
  {
    id: '3',
    label: 'Ambassadors',
    href: ROUTES.AMBASSADORS.ROOT,
  },
];

export const SOCIAL_LINKS = [
  { id: '1', href: 'https://twitter.com/orchestra_labs', Icon: XIcon },
  {
    id: '2',
    href: 'https://discord.gg/symphony-1162823265975279636',
    Icon: Discord,
  },
  { id: '3', href: 'https://t.me/+xFieHCYYyx41NGQx', Icon: Telegram },
  { id: '4', href: 'https://github.com/Orchestra-Labs', Icon: GitHub },
  { id: '5', href: 'https://linktr.ee/OrchestraLabs', Icon: LinkTree },
];

export enum ExternalLinks {
  OSMOSIS_POOL = 'https://app.osmosis.zone/pool/3084',
  GOOGLE_EXTENSION_STORE = 'https://chromewebstore.google.com/detail/aria-wallet/cgghllcclkhfpkjhgomhehlebgphifbm',
}

export enum ExternalLinkLabels {
  OSMOSIS_POOL = 'Osmosis Pool',
  GOOGLE_EXTENSION_STORE = 'Google Extension Store',
}

export const SYMPHONY_LINKS = {
  [ExternalLinkLabels.OSMOSIS_POOL]: {
    id: 'Osmosis Pool',
    href: ExternalLinks.OSMOSIS_POOL,
    Icon: undefined,
  },
  [ExternalLinkLabels.GOOGLE_EXTENSION_STORE]: {
    id: 'Google Extension Store',
    href: ExternalLinks.GOOGLE_EXTENSION_STORE,
    Icon: XIcon,
  },
};

export const FOOTER_LINKS = [
  {
    id: '1',
    name: 'PRODUCTS',
    links: [
      {
        id: '1',
        label: 'Symphony',
        target: '_blank',
        href: EXTERNAL_SITES.SYMPHONY,
      },
      {
        id: '2',
        label: 'Aria Wallet',
        target: '_blank',
        href: EXTERNAL_SITES.ARIA,
      },
      {
        id: '3',
        label: 'Airdrop Tracker',
        target: '_blank',
        href: 'https://airdrop-tracker.orchestralabs.org/',
      },
      {
        id: '4',
        label: 'Swap',
        target: '_blank',
        href: 'https://swap.orchestralabs.org/',
      },
    ],
  },
  {
    id: '2',
    name: 'COMMUNITY',
    links: [
      {
        id: '1',
        label: 'Ambassador Program',
        target: '',
        href: ROUTES.AMBASSADORS.ROOT,
      },
      {
        id: '2',
        label: 'Blogs',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'https://medium.com/@orchestra_labs',
      },
    ],
  },
  {
    id: '3',
    name: 'RESOURCES',
    links: [
      {
        id: '1',
        label: 'Brand Kit',
        target: '_blank',
        href: 'https://www.figma.com/design/RMidyza0EkEnExu0YRw9iJ/Symphony-Brand-Kit?node-id=0-1&t=VJW7ckSbrgKCK5O5-1',
      },
      {
        id: '2',
        label: 'Privacy Policy',
        target: '',
        href: ROUTES.PRIVACY_POLICY,
      },
    ],
  },
];
