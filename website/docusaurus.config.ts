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

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-github-org', // Cseréld a saját GitHub org/user nevedre
  projectName: 'hidra-it-materials', // Cseréld a saját repo nevedre

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'hu', // Magyar alapértelmezett
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Távolítsd el vagy cseréld saját repo URL-re az "Edit this page" linkhez
          // editUrl: 'https://github.com/your-org/hidra-it-materials/tree/main/packages/create-docusaurus/templates/shared/',
          editUrl: undefined, // Ez eltávolítja az "Edit this page" linket mindenhol
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Távolítsd el vagy cseréld saját repo URL-re
          // editUrl: 'https://github.com/your-org/hidra-it-materials/tree/main/packages/create-docusaurus/templates/shared/',
          editUrl: undefined, // Ez eltávolítja a blog "Edit this page" linket
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
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
          href: 'https://github.com/orgs/HIDRA-FK/repositories', // Cseréld saját GitHub repo URL-re
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
              href: 'https://hidrakepzes.hu/gyik', // Opcionálisan cseréld HIDRA-specifikusra
            },
            {
              label: 'HIDRA Facebook',
              href: 'https://www.facebook.com/felnottkepzes.hidra/?locale=hu_HU', // Add meg sajátot vagy távolítsd el
            },
          ],
        },
        {
          title: 'Továbbiak',
          items: [
            {
              label: ' HIDRA Weboldal',
              href: 'https://www./hidrakepzes.hu',
            },
            {
              label: 'HIDRA GitHub',
              href: 'https://github.com/orgs/HIDRA-FK/repositories', // Saját repo
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
