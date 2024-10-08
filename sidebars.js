module.exports = {
  walletPicPay: [
    {
      type: 'category',
      label: 'Ecommerce Wallet',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Introdução',
          collapsed: false,
          items: ['checkout/intro/overview', 'checkout/intro/getting-started'],
        },
        {
          type: 'category',
          label: 'Guias',
          items: [
            'checkout/guides/accepting-payments', //
            'checkout/guides/cancel-order',
            'checkout/guides/notifications',
            'checkout/guides/order-status',
          ],
        },
        {
          type: 'category',
          label: 'Plugins e plataformas',
          items: ['checkout/plugins/vtex', 'checkout/plugins/magento'],
        },

        {
          type: 'category',
          label: 'Recursos',
          items: [
            'checkout/resources/api-reference',
            //'checkout/resources/english/api-reference',
            'checkout/resources/postman',
            'checkout/resources/faq',
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'PicPay One-Click',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Introdução',
          collapsed: false,
          items: ['one-click/intro/overview', 'one-click/intro/getting-started'],
        },
        {
          type: 'category',
          label: 'Guias',
          items: [
            'one-click/guides/oauth2-flow', //
            'one-click/guides/process-payments',
            'one-click/guides/refund-payments',
            'one-click/guides/user-info',
            'one-click/guides/idempotency-key',
          ],
        },

        {
          type: 'category',
          label: 'Recursos',
          items: [
            'one-click/resources/api-reference', //
            'one-click/resources/postman-collection',
          ],
        },
      ]
    }
  ],

  subscriptions: [
    {
      type: 'category',
      label: 'Introdução',
      collapsed: false,
      items: [
        'subscriptions/intro/overview', //
        'subscriptions/intro/sign-up',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: ['subscriptions/api-ref/webhooks'],
    },
  ],
};
