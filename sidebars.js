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
        'pagamento-logado/intro/overview',
        'pagamento-logado/intro/getting-started'
      ],
    },
    {
      type: 'category',
      label: 'Guias',
      items: [ 
        'pagamento-logado/guides/oauth2-flow',
        'pagamento-logado/guides/process-payments',
        'pagamento-logado/guides/refund-payments',
        'pagamento-logado/guides/user-info'
      ],
    },
  
    {
      type: 'category',
      label: 'Recursos',
      items: [
        // 'pagamento-logado/resources/api-reference',
        'pagamento-logado/resources/postman-collection',        
      ],
    },
  ]

};