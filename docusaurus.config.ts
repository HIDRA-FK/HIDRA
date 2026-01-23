import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IT Materials',
  tagline: 'Informatika tanuláshoz szakirodalmi összefoglaló',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub Pages deployment config - JAVÍTVA!
  url: 'https://hidra-itmaterials.netlify.app',
  baseUrl: '/',

  organizationName: 'hidra-fk',
  projectName: 'HIDRA',
  trailingSlash: true,  // Fontos GitHub Pages-hez

  onBrokenLinks: 'throw',

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
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: undefined,
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
    image: 'img/l.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'HIDRA',
      logo: {
        alt: 'HIDRA Logo',
        src: 'img/l.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/orgs/HIDRA-FK/repositories',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentáció',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Közösség',
          items: [
            {
              label: 'HIDRA GYIK',
              href: 'https://hidrakepzes.hu/gyik',
            },
            {
              label: 'HIDRA Facebook',
              href: 'https://www.facebook.com/felnottkepzes.hidra/?locale=hu_HU',
            },
          ],
        },
        {
          title: 'Továbbiak',
          items: [
            {
              label: 'HIDRA Weboldal',
              href: 'https://hidrakepzes.hu',  // Javítva a www./ hibát
            },
            {
              label: 'HIDRA GitHub',
              href: 'https://github.com/orgs/HIDRA-FK/repositories',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HIDRA IT Materials. Minden jog fenntartva.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
