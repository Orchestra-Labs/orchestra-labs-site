const path = (base: string, ...parts: string[]) => [base, ...parts].join('/');

const AMBASSADORS = '/ambassadors';

export const ROUTES = {
  HOME: '/',
  WHITEPAPER: '/whitepaper',
  PRIVACY_POLICY: '/privacy-policy',
  AMBASSADORS: {
    ROOT: AMBASSADORS,
    BASIC_DETAILS: path(AMBASSADORS, 'basic-details'),
    EXAMPLE_TASKS: path(AMBASSADORS, 'example-tasks'),
    LEVEL_BENEFITS: path(AMBASSADORS, 'level-benefits'),
    LEVEL_PROGRESSION: path(AMBASSADORS, 'level-progression'),
    ADDITIONAL_ROLES: path(AMBASSADORS, 'additional-roles'),
    TWEET_GUIDE: path(AMBASSADORS, 'tweet-guide'),
    MEME_GUIDE: path(AMBASSADORS, 'meme-guide'),
    COMMUNITY_PAGES: path(AMBASSADORS, 'community-pages'),
  },
};

// External product sites
export const EXTERNAL_SITES = {
  SYMPHONY: 'https://symphony.orchestralabs.org',
  SYMPHONY_DOCS: 'https://symphony.orchestralabs.org/docs',
  SYMPHONY_EXPLORER: 'https://symphony.orchestralabs.org/explorer',
  SYMPHONY_WHITEPAPER: 'https://symphony.orchestralabs.org/whitepaper',
  ARIA: 'https://aria.orchestralabs.org',
  ARIA_DOCS: 'https://aria.orchestralabs.org/docs',
};
