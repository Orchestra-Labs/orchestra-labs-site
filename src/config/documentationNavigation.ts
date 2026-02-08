import { NavItem } from '@/types';
import { ROUTES } from './routes';

export const AMBASSADOR_NAVIGATION: Record<string, NavItem> = {
  OVERVIEW: {
    id: '1',
    label: 'Overview',
    href: ROUTES.AMBASSADORS.ROOT,
  },
  BASIC_DETAILS: {
    id: '2',
    label: 'Basic Details',
    description: 'Basic details about the ambassador program',
    href: ROUTES.AMBASSADORS.BASIC_DETAILS,
  },
  EXAMPLE_TASKS: {
    id: '3',
    label: 'Example Tasks',
    description: 'Example tasks for what can be done to progress',
    href: ROUTES.AMBASSADORS.EXAMPLE_TASKS,
  },
  LEVEL_BENEFITS: {
    id: '4',
    label: 'Level Benefits',
    description: 'Benefits of reaching each level',
    href: ROUTES.AMBASSADORS.LEVEL_BENEFITS,
  },
  LEVEL_PROGRESSION: {
    id: '5',
    label: 'Level Progression',
    description: 'Requirements and responsibilities for each level',
    href: ROUTES.AMBASSADORS.LEVEL_PROGRESSION,
  },
  ADDITIONAL_ROLES: {
    id: '6',
    label: 'Additional Roles',
    description: 'Additional roles outside the ambassador program',
    href: ROUTES.AMBASSADORS.ADDITIONAL_ROLES,
  },
  TWEET_GUIDE: {
    id: '7',
    label: 'Post Guide',
    description: 'How to improve your posts on X for the ambassador program',
    href: ROUTES.AMBASSADORS.TWEET_GUIDE,
  },
  MEME_GUIDE: {
    id: '8',
    label: 'Meme Guide',
    description: 'How to improve your memes for the ambassador program',
    href: ROUTES.AMBASSADORS.MEME_GUIDE,
  },
  COMMUNITY_PAGES: {
    id: '9',
    label: 'Community Pages',
    description: 'For those in our community that speak the same language',
    href: ROUTES.AMBASSADORS.COMMUNITY_PAGES,
  },
};
