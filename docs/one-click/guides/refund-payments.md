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

A solicitação de reembolso deverá ser gerada com o `transaction_id` ou `reference_id` através do end-point `v1/payments/refund`, indicando o valor a ser reembolsado no corpo da requisição. No exemplo abaixo, estamos solicitando o reembolso de R$ 3,00 na carteira do usuário.

:::info Informação
O campo `transaction_id` é gerado no momento da criação do pagamento.
:::

```bash
curl --location 'https://api.picpay.com/v1/payments/refund' \
--header 'Api-Key: {{api_key}}' \
--header 'Authorization: Bearer {{access_token}}' \
--header 'x-Idempotency-Key: {{idempotency_key}}' \
--header 'Content-Type: application/json' \
--data '{
  "value": 3,
  "transaction_id": "daef8a44-b408-4df1-b726-c579723f1116",
  "reference_id": "f997bbef-8e17-4e59-b1a9-de1fe1dedd51"
}'
```

Caso a solicitação seja processada com sucesso, retornará um código HTTP 200

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

Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-negocios@picpay.com.
