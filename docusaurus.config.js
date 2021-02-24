const path = require('path')

module.exports = {
  title: 'PicPay',
  tagline: 'Documentação - Pagamentos Online',
  url: 'https://mrcsvg.github.io',
  baseUrl: '/picpay-digitalpayments-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'mrcsvg', // Usually your GitHub org/user name.
  projectName: 'picpay-digitalpayments-docs', // Usually your repo name.
  
 

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

    announcementBar: {
      id: 'officialDocumentation',
      backgroundColor: '#E3F7EA', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      content:
        'Olá 💚! Esta é apenas uma documentação temporária de pagamentos online. A documentão oficial do PicPay você encontra no  <a target="_blank" rel="noopener noreferrer" href="https://studio.picpay.com/">PicPay Studio</a>!',
    },


    navbar: {
     // title: 'PicPay',
      logo: {
        alt: 'Logo PicPay',
        src: 'img/PP-logo.png',
      },
      items: [
        {
          label: 'Pagamentos',
          position: 'left',
          items: [
            {
              label: "QR Code",
              to: "/checkout/intro/getting-started",
            },
            {
              label: "Pagamento logado",
              to: "/pagamento-logado/intro/overview",
            }
          ]
        },
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
              label: 'Pagamento Logado',
              to: 'docs/doc2/',
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
              href: 'https://ajudaempresas.picpay.com/hc/pt-br/categories/360004972752-PicPay-Studio-',
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
            'https://github.com/mrcsvg/poc-picpay-docs/tree/main',
        },


/*         blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  
  plugins: [
    [ 
      require.resolve('docusaurus-lunr-search'), { languages: ['pt'] }],
    ]
};
