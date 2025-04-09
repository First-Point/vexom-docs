// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CosmoHub Docs',
  tagline: 'Explore the future of blockchain technology with our intelligent AI agents',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.cosmohub.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'First-Point', // Usually your GitHub org/user name.
  projectName: 'cosmohub-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // If you want to enable the "edit this page" links, uncomment and update with your repo URL
          // editUrl: 'https://github.com/First-Point/cosmohub-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cosmohub-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CosmoHub Docs',
        logo: {
          alt: 'CosmoHub Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // Removing the blog link
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/First-Point',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://cosmohub.ai',
            label: 'CosmoHub.ai',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'User Guide',
                to: '/docs/category/user-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X (Twitter)',
                href: 'https://x.com/cosmohubai',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/cosmohubai',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/First-Point',
              },
              {
                label: 'Arena',
                href: 'https://arena.social/cosmohubai?ref=cosmohubai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'CosmoHub.ai',
                href: 'https://cosmohub.ai',
              },
              {
                label: 'First Point',
                href: 'https://firstpoint.com.tr/',
              },
              {
                label: 'First Point Blog',
                href: 'https://blog.firstpoint.com.tr/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CosmoHub. All rights reserved. | Built by First Point`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
