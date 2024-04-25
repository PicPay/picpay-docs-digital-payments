---
id: magento
title: Magento
---

## Introdução

Neste guia vamos descrever o passo-a-passo para que você possa utilizar PicPay dentro do seu e-commerce com Magento 1 ou 2.

## Antes de começar

Antes de iniciar sua integração, você deve possuir credenciais válidas. Você pode conferir como obter suas credenciais [neste artigo](/checkout/intro/getting-started#antes-de-começar).

## Como utilizar

### Acessar a página oficial dos plugins do GitHub

- Link para Magento 1: https://github.com/PicPay/magento1
- Link para Magento 2: https://github.com/PicPay/magento2

### Instalação para Magento 1

Para configurar o PicPay como forma de pagamento no Magento 1 disponibilizamos duas opções:

**CDN**  
Efetue o download de nosso plugin através de nosso CDN e copie os arquivos para seu ambiente: https://cdn.picpay.com/ecommerce/Picpay_Payment-1.0.2.tgz

**Composer**  
Efetue a instalação utilizando Composer.

```bash
composer require picpay/magento1
``` 

### Instalação para Magento 2

**Composer**  
Efetue a instalação utilizando Composer.

***Passo 1***
```bash
composer require picpay/magento2
``` 
***Passo 2***
``` 
php bin/magento setup:upgrade
``` 

### Configurando suas chaves dentro dos Plugins

Em breve.

## Próximos passos

- [Entenda os possíveis status de um pagamento](/checkout/guides/order-status);
- [Entenda como solicitar um cancelamento total](/checkout/guides/cancel-order);
- [Entenda um pouco mais sobre as notificações que o PicPay envia](/checkout/guides/notifications);

## Obtendo ajuda

Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-negocios@picpay.com

Adicionalmente, você também pode abrir um issue em nossos repositórios de [Magento 1](https://github.com/PicPay/magento1/issues) ou [Magento 2](https://github.com/PicPay/magento2/issues).

