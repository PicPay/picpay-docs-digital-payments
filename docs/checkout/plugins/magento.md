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
***Passo 3***
``` 
php bin/magento setup:di:compile
```
***Passo 4***
``` 
php bin/magento setup:static-content:deploy pt_BR en_US
``` 

### Instalação manual para Magento 2 
Essa primeira etapa faça apenas se seu Magento não tem o Laminas (versões menores que o 2.3.5).<br/>
Caso seu magento não tenha o Laminas, instale a dependência

***Passo 1***
```
composer require laminas/laminas-http:>2.4.0
```
***Passo 2***
```
composer require firebase/php-jwt:*
``` 
***Passo 3***
```
composer require bacon/bacon-qr-code:*
```

Realize o download do arquivo no **[GitHub](https://github.com/picpay/magento2)** e cole os arquivos na pasta 
**app/code/Picpay/Payment**.

Depois rode os comandos de instalação abaixo:

***Passo 1***
``` 
php bin/magento setup:upgrade
``` 
***Passo 2***
``` 
php bin/magento setup:di:compile
```
***Passo 3***
``` 
php bin/magento setup:static-content:deploy pt_BR en_US
```

### Configurações

Para realizar a configuração do módulo PicPay para Magento 2, acesse:
- **Painel Administrador** > **Vendas** > **Picpay** > **Configurações** > localize a opção PicPay dentro do menu **Outros meios de Pagamento**;
- Em seguida, no menu **PicPay**, clique em **Credenciais** e **Configurações Gerais**;
<br/>

_Atenção: Esta configuração habilita a utilização do módulo PicPay._

- Insira as credenciais usadas para os serviços do PicPay (_API Token do PicPay_ e _Seller Token do PicPay_), caso você não tenha a mesma é necessário entrar em contato com o método de pagamento.

## Credenciais e Configurações Gerais

Abaixo os detalhes de cada configuração:
- **Título**: Insira o título da configuração;
- **API Token do PicPay**: Insira o API Token do PicPay;
- **Seller Token do PicPay**: Insira o Seller Token do PicPay;
- **Horas para Expirar**: Horas para expirar a transação (apenas números);
- **Status para novos pedidos**: Status atribuído aos pedidos recém-criados antes da confirmação do pagamento, via notificações do servidor;
- **Pagamento de países aplicáveis**: Insira aqui os países onde o pagamento é aplicável;
- **Habilitar notificação de status do pedido**: Marque esta opção se deseja habilitar a notificação do status do pedido;
- **Habilitar log de debug**: Ao ativar esta função, os logs serão registrados no servidor para fins de depuração.

## Configurações de Checkout e Layout
Neste campo você irá configurar o comportamento do checkout:
- **Modalidade de Checkout**: Determine a página onde o processo de pagamento ocorrerá.
- **Largura do QRCode no "Modo na mesma Página (transparente)"**: Especifique o tamanho do QRCode em pixels para o modo de checkout transparente. Utilize apenas números.
- **Largura do QRCode na página de informações de pagamento**: Defina o tamanho do QRCode em pixels para a página de informações de pagamento. Utilize apenas números.
- **Usar Texto Personalizado no Formulário**: Ative esta opção se deseja exibir uma mensagem personalizada na página de Checkout.
- **Mostrar QRCode na Página de Sucesso**: Determine se deseja exibir o QRCode na página de sucesso.
- **Mensagem para mostrar junto ao QRCode na página de sucesso**: Insira a mensagem que será exibida ao lado do QRCode na página de sucesso.

### Logs

Nesta funcionalidade apresentamos os Callbacks no menu de opções do Magento.
Caso tenha algum retorno de erro, por exemplo estorno/reembolso ou captura, o registro do erro encontra-se no arquivo de logs do próprio Magento.
- **Caminho**: ```pasta_raiz_do_magento/var/logs```

### Callbacks

Através do menu abaixo, é possível visualizar o payload de callback retornado para PicPay.
- **Caminho**: Vendas > PicPay > Callbacks

### Próximos passos

- [Entenda os possíveis status de um pagamento](/checkout/guides/order-status);
- [Entenda como solicitar um cancelamento total](/checkout/guides/cancel-order);
- [Entenda um pouco mais sobre as notificações que o PicPay envia](/checkout/guides/notifications);

## Obtendo ajuda

Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-negocios@picpay.com

Adicionalmente, você também pode abrir um issue em nossos repositórios de [Magento 1](https://github.com/PicPay/magento1/issues) ou [Magento 2](https://github.com/PicPay/magento2/issues).

