import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'HIDRA IT Tudástár',
  tagline: 'Gyakorlati útmutatók és tananyagok fejlesztőknek',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // Production URL settings
  url: 'https://hidra-fk.github.io',
  baseUrl: '/HIDRA/',

  // GitHub / Deployment settings
  organizationName: 'HIDRA-FK',
  projectName: 'HIDRA',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Localization
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/HIDRA-FK/HIDRA/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Tech Blog & Hírek',
          blogDescription: 'Aktuális informatikai trendek és HIDRA hírek',
          postsPerPage: 5,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    
    metadata: [
      {name: 'keywords', content: 'informatika, oktatás, programozás, webfejlesztés, hidra képzés'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'HIDRA Akadémia',
      logo: {
        alt: 'HIDRA Logo',
        src: 'img/l.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tananyagok',
        },
        {
          to: '/blog', 
          label: 'Szakmai Blog',
          position: 'left'
        },
        // {
        //   to: '/projects', 
        //   label: 'Projektek',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/orgs/HIDRA-FK/repositories',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tanulás',
          items: [
            {
              label: 'Kezdő lépések',
              to: '/docs/intro',
            },
            // {
            //   label: 'Technológiák',
            //   to: '/docs/category/technologiak',
            // },
          ],
        },
        {
          title: 'Közösség & Kapcsolat',
          items: [
            {
              label: 'HIDRA Képzések',
              href: 'https://hidrakepzes.hu',
            },
            {
              label: 'Facebook Közösség',
              href: 'https://www.facebook.com/felnottkepzes.hidra/?locale=hu_HU',
            },
            {
              label: 'Gyakori Kérdések',
              href: 'https://hidrakepzes.hu/gyik',
            },
          ],
        },
        {
          title: 'Fejlesztés',
          items: [
            {
              label: 'Forráskód (GitHub)',
              href: 'https://github.com/orgs/HIDRA-FK/repositories',
            },
            {
              label: 'Jelents hibát',
              href: 'https://github.com/orgs/HIDRA-FK/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HIDRA Felnőttképzés. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'java', 'php', 'sql', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
