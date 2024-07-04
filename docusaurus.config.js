const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PicPay - Pagamentos Digitais',
  tagline: 'Documentação - Pagamentos Online',
  url: 'https://picpay.github.io',
  baseUrl: '/picpay-docs-digital-payments/',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  favicon: 'img/favicon.png',
  organizationName: 'PicPay', // Usually your GitHub org/user name.
  projectName: 'picpay-docs-digital-payments', // Usually your repo name.
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    localeConfigs: {
        pt: {
            label: `🇧🇷 Português`,
            direction: 'ltr',
        },
        en: {
            label: `🇺🇸 English`,
        }
    },
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '\u2600',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    googleAnalytics: {
      trackingID: 'G-52VCWRLND8',
    },
    gtag: {
      trackingID: 'G-52VCWRLND8',
    },
    navbar: {
      logo: {
        alt: 'Logo PicPay',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/checkout/intro/getting-started',
          label: 'QR Code e Push',
          className: 'navbar_custom_link',
          sidebarId: 'docs',
        },
        {
          to: '/one-click/intro/overview',
          label: 'PicPay 1-Click',
          className: 'navbar_custom_link',
          sidebarId: 'pagamentoLogado',
        },
        {
          href: 'https://picpay.github.io/picpay-docs-ms-ecommerce-checkout/docs/introduction',
          label: 'Gateway PicPay',
          hrefEn: 'https://picpay.github.io/picpay-docs-ms-ecommerce-checkout/en/docs/introduction',
          target: '_self',
          className: 'navbar_custom_link',
        },
        {
          href: 'https://picpay.github.io/picpay-docs-ms-ecommerce-pix/docs/introduction',
          label: 'Pix',
          hrefEn: 'https://picpay.github.io/picpay-docs-ms-ecommerce-pix/en/docs/introduction',
          target: '_self',
          className: 'navbar_custom_link',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    languageTabs: [{
      highlight: "bash",
      language: "curl",
    }],
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentações',
          items: [
            {
              label: 'QR Code e Push',
              to: '/',
            },
            {
              label: 'PicPay 1-Click',
              to: 'one-click/intro/overview',
            },
          ],
        },
        {
          title: 'Sobre o PicPay',
          items: [
            {
              label: 'Política de privacidade',
              href: 'https://picpay.com/site/privacidade',
            },
            {
              label: 'Dúvidas frequentes',
              href: 'https://ajudaempresas.picpay.com/hc/pt-br/categories/360003836611-PicPay-E-commerce',
            },
            {
              label: 'PicPay.com',
              href: 'http://picpay.com.br/',
            },
          ],
        },
        {
          title: 'Veja mais',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/picpay',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PicPay. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Jogando pra home de docs
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [[require.resolve('docusaurus-lunr-search'), { languages: ['pt'] }]],

  scripts: [
    {
      src: '/picpay-docs-digital-payments/js/hotjar.js',
    },
  ],
};

module.exports = config;