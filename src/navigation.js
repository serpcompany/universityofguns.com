import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: 'https://serp.ly/@serptravel/youtube',
          target: '_blank',
        },
      ],
    },
    {
      text: 'Content',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Glossary',
        //   href: getPermalink('/glossary'),
        // },
      ],
    },
   
  ],
  actions: [{ text: 'Subscribe', href: '/subscribe', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Website', href: 'https://serp.travel' },
        { text: 'About', href: '/about' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Newsletter', href: '/subscribe' },
        { text: 'Forum', href: '/#' },
        { text: 'Community', href: '/#' },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Substack', href: 'https://serptravel.substack.com/', target: '_blank' },
        { text: 'Hashnode', href: 'https://serptravel.hashnode.dev/', target: '_blank' },
        { text: 'Medium', href: 'https://medium.com/serp-travel', target: '_blank' },
        { text: 'Pages', href: 'https://serptravel.pages.dev', target: '_blank' },
        { text: 'Pages', href: 'https://reddit.com/r/serptravel', target: '_blank' },
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms & Conditions', href: '/terms' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
        { text: 'DMCA', href: '/dmca' },
        { text: 'Archive', href: '/archive' },
        { text: 'Tags', href: '/tags' },
      ],
    },
  ],
//   secondaryLinks: [
//     { text: 'Free Stuff', href: 'https://stuff' },
//   ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@serptravel/twitter', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://serp.ly/@serptravel/instagram', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://serp.ly/@serptravel/facebook', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://serp.ly/@serptravel/youtube', target: '_blank' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://serp.ly/@serptravel/linkedin', target: '_blank' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://serp.ly/@serptravel/tiktok', target: '_blank' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://serp.ly/@serptravel/medium', target: '_blank' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://serp.ly/@serptravel/reddit', target: '_blank' },
  ],
 
};
