const path = require('path')

module.exports = {
  title: 'PicPay - Pagamentos Digitais',
  tagline: 'Documentação - Pagamentos Online',
  url: 'https://picpay.github.io',
  baseUrl: '/picpay-docs-digital-payments/',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  favicon: 'img/favicon.png',
  organizationName: 'PicPay', // Usually your GitHub org/user name.
  projectName: 'picpay-docs-digital-payments', // Usually your repo name.
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
      trackingID: 'G-52VCWRLND8'
    },
    gtag: {
      trackingID: 'G-52VCWRLND8'
    },
    announcementBar: {
      id: 'officialDocumentation',
      backgroundColor: '#E3F7EA', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      content:
        'Olá 💚! Este é um domínio temporário para nossa documentação de pagamentos online. Em breve migraremos para o <a target="_blank" rel="noopener noreferrer" href="https://studio.picpay.com/">PicPay Studio</a>!',
    },
    navbar: {
     // title: 'PicPay',
      logo: {
        alt: 'Logo PicPay',
        src: 'img/PP-logo.png',
      },
      items: [
        {to: "/checkout/intro/getting-started", label: "QR Code e Push" },
        {to: "/one-click/intro/overview", label: "PicPay 1-Click" },
        {to: "/one-click-en/guides/user-info", label: "PicPay 1-Click (English)" },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/picpay/',
          label: 'GitHub',
          position: 'right',
        },
      ],


    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentações',
          items: [
            {
              label: 'E-commerce',
              to: '/',
            },
            {
              label: 'PicPay 1-Click',
              to: 'one-click/intro/overview',
            },
            {
              label: 'PicPay 1-Click (English)',
              to: 'one-click-en/guides/user-info-en',
            },
            {
              label: 'Assinaturas',
              href: 'https://studio.picpay.com/docs/assinaturas',
            },
            {
              label: 'Remessa de Crédito',
              href: 'https://studio.picpay.com/docs/b2p',
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
              label: 'Release notes',
              to: 'blog',
            },
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
          editUrl:
            'https://github.com/picpay/picpay-docs-digital-payments/tree/main',
        },
         blog: {
          showReadingTime: true,
          blogTitle: 'Change Log',
          blogDescription: "Mudanças e novidades a respeito de nossas soluções de pagamento digital",
          blogSidebarTitle: 'Posts recentes',
          routeBasePath: 'change-log',
          // Please change this to your repo.
        }, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [ 
       require.resolve('docusaurus-lunr-search'), { languages: ['pt'] }
    ],    
    


    ],

    scripts: [ 
/*       {
        src: '/js/google-tag-manager.js'
      },  */
      {
        src: '/picpay-docs-digital-payments/js/hotjar.js'
      },   
    ],


};
