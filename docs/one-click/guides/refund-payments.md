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

Este guia descreve o passo a passo para processar reembolsos utilizando a solução de pagamentos logada **PicPay 1-Click**.

## Antes de começar

Antes de processar pagamentos online através de nossa solução de **PicPay 1-Click**, você deve possuir um `access_token` válido e não expirado. Você pode conferir como gerar seus tokens [neste artigo](/one-click/guides/oauth2-flow).

## Como funciona

### Autenticação

Além do `access_token`, gerado dinamicamente, o endpoint de pagamentos requer também um `client_id` e `client_secret`, que serão fornecidos durante o processo de integração.

:::caution Atenção 
Seus dados de autenticação, como `client_id` e `client_secret`, não devem ser compartilhados de forma alguma e devem ser armazenados de maneira segura em seus servidores. 
:::

### Idempotência
A idempotência é uma forma de garantir que a mesma solicitação não seja processada mais de uma vez, evitando duplicações de pagamento ou reembolso. Isso é feito através do envio do header `x-Idempotency-Key` em cada requisição. Você pode conferir o funcionamento da idempotência [neste artigo](/one-click/guides/idempotency-key).

### Solicitando um reembolso de uma cobrança à carteira do usuário

A solicitação de reembolso deverá ser gerada com o `transaction_id` ou `reference_id` através do end-point `v1/payments/refund`, indicando o valor a ser reembolsado no corpo da requisição. No exemplo abaixo, estamos solicitando o reembolso de R$ 0,10 na carteira do usuário.

:::info Informação
O campo `transaction_id` é gerado no momento da criação do pagamento.
:::

```bash
curl --location 'https://api.picpay.com/v1/payments/refund' \
--header 'Authorization: Bearer {{access_token}}' \
--header 'x-Idempotency-Key: {{idempotency_key}}' \
--header 'Content-Type: application/json' \
--data '{
  "value": 0.10,
  "transaction_id": "e646263b-2b4d-4b2c-93d8-2568fbffb744",
  "reference_id": "04c923a4-34d6-43e8-89db-1b563f887b53"
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
