---
id: notifications
title: Gerenciar notificações
---

## Sobre este guia
Neste guia vamos descrever o passo-a-passo para que você receba notificações sobre mudança de status de suas ordens geradas através de nossa API de e-commerce.

## Pré-requisitos

Antes de iniciar sua integração, você deve possuir credenciais válidas. Você pode conferir como obter suas credenciais [neste artigo](/checkout/intro/getting-started#antes-de-começar).


## Como funciona?

### Autenticação

O PicPay disponibiliza duas chaves de integração: O x-picpay-token e o x-seller-token. Para esta operação, você deverá estar pronto para receber requisições em seus servidores, utilizando o x-seller-token para autenticar as requisições.

### Funcionamento básico

Após qualquer mudança de status em suas ordens o PicPay notificará a URL de callback (callbackUrl) informada no momento da requisição de pagamento. Acompanhe abaixo como seu e-commerce deve estar preparado para receber as notificações.

**Passo 1:** Imediatamente após qualquer mudança de status de uma ordem, o PicPay envia uma notificação para seu e-commerce via **POST** na URL de _callback,_ fornecida na requisição de pagamento como callbackUrl.

Seu e-commerce deverá estar preparado para receber um **POST** no endpoint /callback, utilizando o x-seller-token no _header_ para autenticação da requisição. Para que o recebimento do _callback_ seja considerado confirmado, seu e-commerce deve responder com **HTTP Status 200**.

```bash
curl -X POST \ http://www.sualoja.com.br/callback \ 
    -H 'Content-Type: application/json' \ 
    -H 'x-seller-token: 4ef4edbd-5cda-42da-860b-0e8d7b90c784' \ 
    -d '{ 
            "referenceId" : "102030", 
            "authorizationId" : "555008cef7f321d00ef236333" 
        }'
```
_Exemplo de notificação que o PicPay envia para o e-commerce._

Por questões de segurança é extremamente importante que o seu e-commerce faça a validação do x-seller-token

**Passo 2:** O seu e-commerce deve efetuar um GET utilizando o referenceId que enviamos por notificação, através para obtenção do novo status do pagamento.

```bash
curl -X GET \ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \ 
    -H 'Content-Type: application/json' \ 
    -H 'x-picpay-token: {sua_chave_de_integracao}' \ '
```

_Exemplo de obtenção de status_

### Situações de notificação

Seu e-commerce será notificado nas seguintes situações:

-   Pedido expirado: não é mais possível paga-lo usando PicPay;
-   Pagamento em análise: usuário pagou porém o pagamento está sob análise;
-   Pedido pago;
-   Pedido completado: saldo disponível para saque;
-   Pagamento devolvido: foi pago e estornado para o cliente;
-   Pagamento com chargeback: cliente solicitou à operadora o cancelamento do pagamento;

## Próximos passos

- [Entenda os possíveis status de um pagamento](/checkout/guides/order-status);
- [Entenda como solicitar um cancelamento total](/checkout/guides/cancel-order);

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-empresas@picpay.com. 