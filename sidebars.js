module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introdução',
      collapsed: false,
      items: [
        'checkout/intro/overview',
        'checkout/intro/getting-started'
      ],
    },
    {
      type: 'category',
      label: 'Guias',
      items: [ 
        'checkout/guides/accepting-payments',
        'checkout/guides/cancel-order',
        'checkout/guides/notifications',
        'checkout/guides/order-status'
      ],
    },
    {
      type: 'category',
      label: 'Plugins e plataformas',
      items: [
        'checkout/plugins/vtex',
        'checkout/plugins/magento'        
      ],
    },

    {
      type: 'category',
      label: 'Recursos',
      items: [
        'checkout/resources/api-reference',
        //'checkout/resources/english/api-reference',
        'checkout/resources/postman',
        'checkout/resources/faq'
        
      ],
    },
  ],

  pagamentoLogado: [
    {
      type: 'category',
      label: 'Introdução',
      collapsed: false,
      items: [
        'one-click/intro/overview',
        'one-click/intro/getting-started'
      ],
    },
    {
      type: 'category',
      label: 'Guias',
      items: [ 
        'one-click/guides/oauth2-flow',
        'one-click/guides/process-payments',
        'one-click/guides/refund-payments',
        'one-click/guides/user-info'
      ],
    },
  
    {
      type: 'category',
      label: 'Recursos',
      items: [
        'one-click/resources/api-reference',
        'one-click/resources/postman-collection',
      ],
    },
  ],

  pagamentoLogadoenglish: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'one-click-en/guides/oauth2-flow',
        'one-click-en/guides/process-payments',
        'one-click-en/guides/refund-payments',
        'one-click-en/guides/user-info'
      ],
    },

    {
      type: 'category',
      label: 'Resources',
      items: [
        'one-click-en/resources/api-reference',
      ],
    },
  ]

};