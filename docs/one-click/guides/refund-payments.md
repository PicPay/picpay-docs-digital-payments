---
id: refund-payments
title: Reembolsando pagamentos
sidebar_label: Reembolsando pagamentos
hide_title: false
description: Aprenda como reembolsar pagamentos na nossa solução de PicPay 1-Click
keywords: 
    - PicPay 1-Click
    - Reembolso    
    - Login
---

## Sobre este guia

Neste guia vamos descrever o passo-a-passo para que você solicite reembolsos de pagamentos gerados através de nossa solução de pagamentos logada.

## Antes de começar

Antes de processar pagamentos online através de nossa solução de **PicPay 1-Click**, você deve possuir um `access_token` válido e não expirado. Você pode conferir como gerar seus tokens [neste artigo](/one-click/guides/oauth2-flow).

## Como funciona

### Autenticação

Além do `access_token`, gerado dinamicamente, o end-point de pagamentos necessita também de uma `Api-Key` que lhe será informada junto com seu `client_id` e `client_secret`.

:::caution Sobre o Api-Key
O `Api-Key` não deverá ser compartilhado de forma alguma e deverá ficar armazenado de forma segura em seus servidores. 
:::

### Solicitando um reembolso de uma cobrança à carteira do usuário

A solicitação de reembolso deverá ser gerada com o `transaction_id` através do end-point `v1/payments/{{transaction_id}}/refund`, indicando o valor a ser reembolsado no corpo da requisição. No exemplo abaixo, estamos solicitando o reembolso de R$ 3,00 na carteira do usuário.

:::info Informação
O campo `transaction_id` é gerado no momento da criação do pagamento.
:::


```bash
curl --location --request POST 'https://api.picpay.com/v1/payments/{{transaction_id}}/refund' \
--header  'Api-Key: {{api_key}}' \
--header 'Authorization: Bearer {access_token}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'value=3'
```
Caso a solicitação seja processada com sucesso, retornará um código HTTP 204

#### Como será feito o reembolso?

O saldo será retornado ao mesmo lugar da origem dos fundos, ou seja:

- Caso a transação tiver sido feita por cartão de crédito, será estornada no cartão;
- Caso a transação tiver sido feita no saldo, o saldo retornará a carteira do cliente;
- Caso a transação seja mista (Saldo + Cartão), parte retornara como saldo na carteira e parte será estornada no cartão;


#### Mensagens de erro

Não informamos os códigos de erro no processo de estorno. Apenas informamos se a transação foi estornada ou não. Exemplo:

```json
{
    "message": "Transaction could not be refund"
}
```

## Próximos passos

- [Consultando informações dos usuários](/one-click/guides/user-info);

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-empresas@picpay.com. 
