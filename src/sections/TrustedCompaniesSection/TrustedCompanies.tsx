import { ClassValue } from 'clsx';

import evacodes from '@/assets/images/external/evacodes.png';
import bloxxa from '@/assets/images/external/bloxxa.png';
import google from '@/assets/images/external/google.png';
import gexabyte from '@/assets/images/external/gexabyte.png';
import medium from '@/assets/images/external/medium.png';
import suave from '@/assets/images/external/suave.png';
import swapAcross from '@/assets/images/external/swapacross.png';
import convoSpace from '@/assets/images/external/convo-space.png';
import keplr from '@/assets/images/external/keplr.png';
import pingPub from '@/assets/images/external/ping-pub.svg';
import kleomedes from '@/assets/images/external/kleomedes.png';
import interchainInfo from '@/assets/images/external/interchaininfo.png';
import buidl from '@/assets/images/external/buidl.png';
import bueno from '@/assets/images/external/bueno.png';
import coinCodex from '@/assets/images/external/coincodex.png';
import leapWallet from '@/assets/images/external/leap-wallet.png';
import icoHolder from '@/assets/images/external/icoholder.jpg';
import digitalJournal from '@/assets/images/external/digital-journal.jpg';
import tradingView from '@/assets/images/external/trading-view.png';
import monday from '@/assets/images/external/monday.png';
import marketWatch from '@/assets/images/external/marketwatch.jpg';
import businessInsider from '@/assets/images/external/business-insider.png';

type Company = {
  id: number;
  name: string;
  src: string;
  logoClass?: ClassValue;
};

export const COMPANIES: Company[] = [
  {
    id: 1,
    name: 'EvaCodes',
    src: evacodes,
  },
  {
    id: 2,
    name: 'Bloxxa',
    src: bloxxa,
    logoClass: 'max-h-8',
  },
  {
    id: 3,
    name: 'Google',
    src: google,
    logoClass: 'max-h-9',
  },
  {
    id: 4,
    name: 'Gexabyte',
    src: gexabyte,
    logoClass: 'max-h-10',
  },
  {
    id: 5,
    name: 'Medium',
    src: medium,
    logoClass: 'max-h-7',
  },
  {
    id: 6,
    name: 'Suave',
    src: suave,
    logoClass: 'max-h-8',
  },
  {
    id: 7,
    name: 'SwapAcross',
    src: swapAcross,
    logoClass: 'max-h-9',
  },
  {
    id: 8,
    name: 'Convo Space',
    src: convoSpace,
    logoClass: 'max-h-10',
  },
  {
    id: 9,
    name: 'Keplr',
    src: keplr,
    logoClass: 'max-h-10',
  },
  {
    id: 10,
    name: 'Kleomedes',
    src: kleomedes,
    logoClass: 'max-h-10',
  },
  {
    id: 11,
    name: 'GemPad',
    src: pingPub,
    logoClass: 'max-h-10',
  },
  {
    id: 12,
    name: 'Interchain Info',
    src: interchainInfo,
    logoClass: 'max-h-10',
  },
  {
    id: 13,
    name: 'Buidl',
    src: buidl,
    logoClass: 'max-h-9',
  },
  {
    id: 14,
    name: 'Bueno',
    src: bueno,
    logoClass: 'max-h-10',
  },
  {
    id: 15,
    name: 'Coin Codex',
    src: coinCodex,
    logoClass: 'max-h-9',
  },
  {
    id: 16,
    name: 'LeapWallet',
    src: leapWallet,
    logoClass: 'max-h-10',
  },
  {
    id: 17,
    name: 'ICOHolder',
    src: icoHolder,
    logoClass: 'max-h-10',
  },
  {
    id: 18,
    name: 'Digital Journal',
    src: digitalJournal,
    logoClass: 'max-h-10',
  },
  {
    id: 19,
    name: 'tradingView',
    src: tradingView,
    logoClass: 'max-h-10',
  },
  {
    id: 20,
    name: 'Monday',
    src: monday,
    logoClass: 'max-h-10',
  },
  {
    id: 21,
    name: 'MarketWatch',
    src: marketWatch,
    logoClass: 'max-h-10',
  },
  {
    id: 22,
    name: 'Business Insider',
    src: businessInsider,
    logoClass: 'max-h-10',
  },
];
