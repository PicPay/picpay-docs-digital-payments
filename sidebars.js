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
      label: 'Plugins',
      items: [
        'checkout/plugins/vtex',
        'checkout/plugins/magento'        
      ],
    },

    {
      type: 'category',
      label: 'Resources',
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
      ],
    },
  ]

};