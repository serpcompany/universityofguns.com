import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: 'https://serp.ly/@universityofguns/youtube',
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
    {
      text: 'Gun Laws',
      links: [
        {
          text: 'Concealed Carry Laws',
          href: getPermalink('/category/gun-laws'),
        },
        {
          text: 'Alabama',
          href: getPermalink('/alabama-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Alaska',
          href: getPermalink('/alaska-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Arizona',
          href: getPermalink('/arizona-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Arkansas',
          href: getPermalink('/arkansas-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'California',
          href: getPermalink('/california-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Colorado',
          href: getPermalink('/colorado-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Connecticut',
          href: getPermalink('/connecticut-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Delaware',
          href: getPermalink('/delaware-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Florida',
          href: getPermalink('/florida-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Georgia',
          href: getPermalink('/georgia-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Hawaii',
          href: getPermalink('/hawaii-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Idaho',
          href: getPermalink('/idaho-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Illinois',
          href: getPermalink('/illinois-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Indiana',
          href: getPermalink('/indiana-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Iowa',
          href: getPermalink('/iowa-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Kansas',
          href: getPermalink('/kansas-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Kentucky',
          href: getPermalink('/kentucky-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Louisiana',
          href: getPermalink('/louisiana-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Maine',
          href: getPermalink('/maine-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Maryland',
          href: getPermalink('/maryland-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Massachusetts',
          href: getPermalink('/massachusetts-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Michigan',
          href: getPermalink('/michigan-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Minnesota',
          href: getPermalink('/minnesota-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Mississippi',
          href: getPermalink('/mississippi-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Missouri',
          href: getPermalink('/missouri-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Montana',
          href: getPermalink('/montana-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Nebraska',
          href: getPermalink('/nebraska-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Nevada',
          href: getPermalink('/nevada-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'New Hampshire',
          href: getPermalink('/new-hampshire-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'New Jersey',
          href: getPermalink('/new-jersey-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'New Mexico',
          href: getPermalink('/new-mexico-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'New York',
          href: getPermalink('/new-york-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'North Carolina',
          href: getPermalink('/north-carolina-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'North Dakota',
          href: getPermalink('/north-dakota-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Ohio',
          href: getPermalink('/ohio-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Oklahoma',
          href: getPermalink('/oklahoma-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Oregon',
          href: getPermalink('/oregon-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Pennsylvania',
          href: getPermalink('/pennsylvania-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Rhode Island',
          href: getPermalink('/rhode-island-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'South Carolina',
          href: getPermalink('/south-carolina-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'South Dakota',
          href: getPermalink('/south-dakota-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Tennessee',
          href: getPermalink('/tennessee-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Texas',
          href: getPermalink('/texas-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Utah',
          href: getPermalink('/utah-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Vermont',
          href: getPermalink('/vermont-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Virginia',
          href: getPermalink('/virginia-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Washington',
          href: getPermalink('/washington-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'West Virginia',
          href: getPermalink('/west-virginia-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Wisconsin',
          href: getPermalink('/wisconsin-concealed-carry-weapon-ccw-gun-laws'),
        },
        {
          text: 'Wyoming',
          href: getPermalink('/wyoming-concealed-carry-weapon-ccw-gun-laws'),
        },
      ],
    },
    {
      text: 'Hunting Laws',
      links: [
        {
          text: 'Hunting Laws',
          href: getPermalink('/category/hunting-laws'),
        },
        {
          text: 'Alabama',
          href: getPermalink('/alabama-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Alaska',
          href: getPermalink('/alaska-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Arizona',
          href: getPermalink('/arizona-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Arkansas',
          href: getPermalink('/arkansas-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'California',
          href: getPermalink('/california-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Colorado',
          href: getPermalink('/colorado-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Connecticut',
          href: getPermalink('/connecticut-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Delaware',
          href: getPermalink('/delaware-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Florida',
          href: getPermalink('/florida-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Georgia',
          href: getPermalink('/georgia-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Hawaii',
          href: getPermalink('/hawaii-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Idaho',
          href: getPermalink('/idaho-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Illinois',
          href: getPermalink('/illinois-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Indiana',
          href: getPermalink('/indiana-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Iowa',
          href: getPermalink('/iowa-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Kansas',
          href: getPermalink('/kansas-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Kentucky',
          href: getPermalink('/kentucky-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Louisiana',
          href: getPermalink('/louisiana-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Maine',
          href: getPermalink('/maine-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Maryland',
          href: getPermalink('/maryland-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Massachusetts',
          href: getPermalink('/massachusetts-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Michigan',
          href: getPermalink('/michigan-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Minnesota',
          href: getPermalink('/minnesota-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Mississippi',
          href: getPermalink('/mississippi-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Missouri',
          href: getPermalink('/missouri-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Montana',
          href: getPermalink('/montana-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Nebraska',
          href: getPermalink('/nebraska-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Nevada',
          href: getPermalink('/nevada-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'New Hampshire',
          href: getPermalink('/new-hampshire-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'New Jersey',
          href: getPermalink('/new-jersey-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'New Mexico',
          href: getPermalink('/new-mexico-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'New York',
          href: getPermalink('/new-york-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'North Carolina',
          href: getPermalink('/north-carolina-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'North Dakota',
          href: getPermalink('/north-dakota-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Ohio',
          href: getPermalink('/ohio-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Oklahoma',
          href: getPermalink('/oklahoma-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Oregon',
          href: getPermalink('/oregon-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Pennsylvania',
          href: getPermalink('/pennsylvania-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Rhode Island',
          href: getPermalink('/rhode-island-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'South Carolina',
          href: getPermalink('/south-carolina-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'South Dakota',
          href: getPermalink('/south-dakota-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Tennessee',
          href: getPermalink('/tennessee-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Texas',
          href: getPermalink('/texas-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Utah',
          href: getPermalink('/utah-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Vermont',
          href: getPermalink('/vermont-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Virginia',
          href: getPermalink('/virginia-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Washington',
          href: getPermalink('/washington-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'West Virginia',
          href: getPermalink('/west-virginia-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Wisconsin',
          href: getPermalink('/wisconsin-hunting-laws-licensing-regulations/'),
        },
        {
          text: 'Wyoming',
          href: getPermalink('/wyoming-hunting-laws-licensing-regulations/'),
        },
      ],
    },
    {
      text: 'Shop',
      links: [
        {
          text: 'Gun Holsters',
          href: getPermalink('/category/gun-holsters'),
        },
        {
          text: 'Gun Safes',
          href: getPermalink('/category/gun-safes'),
        },
        {
          text: 'Gun Belts',
          href: getPermalink('/category/gun-belts'),
        },
        {
          text: 'Targets',
          href: getPermalink('/category/shooting-targets'),
        },
        {
          text: 'Knives',
          href: getPermalink('/category/knives'),
        },
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
        { text: 'Website', href: 'https://universityofguns.com' },
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
        { text: 'Substack', href: 'https://universityofguns.substack.com/', target: '_blank' },
        { text: 'Hashnode', href: 'https://universityofguns.hashnode.dev/', target: '_blank' },
        { text: 'Medium', href: 'https://medium.com/universityofguns', target: '_blank' },
        { text: 'Pages', href: 'https://universityofguns.pages.dev', target: '_blank' },
        { text: 'Reddit', href: 'https://reddit.com/r/universityofguns', target: '_blank' },
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
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@universityofguns/twitter', target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://serp.ly/@universityofguns/instagram',
      target: '_blank',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://serp.ly/@universityofguns/facebook',
      target: '_blank',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://serp.ly/@universityofguns/youtube',
      target: '_blank',
    },
    {
      ariaLabel: 'Linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://serp.ly/@universityofguns/linkedin',
      target: '_blank',
    },
    {
      ariaLabel: 'TikTok',
      icon: 'tabler:brand-tiktok',
      href: 'https://serp.ly/@universityofguns/tiktok',
      target: '_blank',
    },
    {
      ariaLabel: 'Medium',
      icon: 'tabler:brand-medium',
      href: 'https://serp.ly/@universityofguns/medium',
      target: '_blank',
    },
    {
      ariaLabel: 'Reddit',
      icon: 'tabler:brand-reddit',
      href: 'https://serp.ly/@universityofguns/reddit',
      target: '_blank',
    },
  ],
};
