import image4 from '@/assets/images/info-image4.png';
import image5 from '@/assets/images/info-image5.png';
import image6 from '@/assets/images/info-image6.png';
import {
  BlogArticlesSlider,
  HeroSection,
  TrustedCompaniesSection,
} from '@/sections';
import { InfoRowsSection } from '@/sections/InfoRowsSection';

import { EXTERNAL_SITES } from '@/config/';
import { ExternalLinks } from '@/constants';

const PRODUCTS_ROWS = [
  {
    id: 1,
    src: image4,
    title: 'Aria Wallet',
    description: 'Multi-chain crypto wallet for Cosmos and beyond. Manage your assets across multiple chains with a single, secure wallet.',
    link: ExternalLinks.GOOGLE_EXTENSION_STORE,
    linkLabel: 'Download Now',
  },
  {
    id: 2,
    src: image5,
    title: 'Symphony Blockchain',
    description: 'The stablecoin chain. Decentralized real-world assets with robust safeguards and dynamic rebalancing.',
    link: EXTERNAL_SITES.SYMPHONY,
    linkLabel: 'Learn More',
  },
  {
    id: 3,
    src: image6,
    title: 'Join the Community',
    description: 'Connect with us and stay updated on the latest developments!',
    link: undefined,
    linkLabel: 'Join',
    showSocials: true,
  },
];

const PRODUCTS_SECTION_TITLE = (
  <p className="text-center">
    Our <span className="text-blue tracking-wide-20">Products</span>
  </p>
);
const PRODUCTS_SECTION_SUBTITLE = (
  <p className="text-center">
    Building the <span className="text-blue">future of DeFi</span>
  </p>
);

export const Home = () => (
  <div>
    <HeroSection />
    <InfoRowsSection
      title={PRODUCTS_SECTION_TITLE}
      secondaryTitle={PRODUCTS_SECTION_SUBTITLE}
      rows={PRODUCTS_ROWS}
    />
    <TrustedCompaniesSection />
    <BlogArticlesSlider />
  </div>
);
