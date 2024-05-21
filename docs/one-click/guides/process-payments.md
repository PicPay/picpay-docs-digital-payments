---
id: process-payments
title: Processando pagamentos
sidebar_label: Processando pagamentos
hide_title: false
description: Aprenda como processar pagamentos na nossa solução PicPay 1-Click
keywords: 
    - PicPay 1-Click
    - Pagamento    
    - Login
---

## Sobre este guia

Neste guia vamos descrever o passo-a-passo para que você processe pagamentos com o PicPay através de nossa solução de pagamentos logada.

## Antes de começar

Antes de processar pagamentos online através de nossa solução de **PicPay 1-Click**, você deve possuir um `access_token` válido e não expirado. Você pode conferir como gerar seus tokens [neste artigo](/one-click/guides/oauth2-flow).

## Como funciona

### Autenticação

Além do `access_token`, gerado dinamicamente, o end-point de pagamentos necessita também de uma `Api-Key` que lhe será informada junto com seu `client_id` e `client_secret`.

:::caution Sobre o Api-Key
O `Api-Key` não deverá ser compartilhado de forma alguma e deve ficar armazenado de forma segura em seus servidores. 
:::

### Gerando uma cobrança na carteira do usuário

Possuindo um `access_token` e `api_key` válidos, o processo de geração de uma cobrança na carteira dos clientes é extremamente simples e fluido. A cobrança deverá ser gerada através do end-point `v1/payments/charge`, indicando o valor a ser debitado no corpo da requisição. No exemplo abaixo, estamos solicitando a cobrança de R$ 3,00 na carteira do usuário.

```bash

curl  --location --request POST 'https://api.picpay.com/v1/payments/charge' \
--header 'Api-Key: {{api_key}}' \
--header 'Authorization: Bearer {{access_token}}' \
--header 'Content-Type: application/json' \
--header 'x-Idempotency-Key: {{idempotency_key}}' \
--data '{
    "value": 0.1,
    "reference_id": "c413fcb5-d963-4b93-8218-3b776f656553",
    "auto_capture": true
}'

```

Abaixo um exemplo de retorno de sucesso. Os campos `transaction_id` e `reference_id` devem ser guardados pois são as chaves para processos de estorno.

```json
{
    "transaction_id": "e646263b-2b4d-4b2c-93d8-2568fbffb744",
    "reference_id": "04c923a4-34d6-43e8-89db-1b563f887b53",
    "created_at": "2021-02-22 19:29:16"
}
```

#### Qual será a origem dos fundos ?

O valor da cobrança poderá ser debitado do cartão de crédito, saldo ou ambos (saldo + cartão). Caso o cliente possua a opção de *Usar saldo* habilitada no App, iremos consumir primeiramente o saldo do usuário e posteriormente (caso não haja saldo suficiente), efetuar uma cobrança no cartão.

Exemplo: Estou efetuando uma compra de R$60, possuo R$19 de saldo em minha carteira. O PicPay irá consumir os R$19 e efetuar uma cobrança de R$41 no cartão cadastrado.

#### Mensagens de erro

Não informamos os códigos de erro nos retornos das transações. Apenas informamos se a transação foi aprovada ou não.

```json
{
    "message":"Unauthorized transaction."
}
```

#### Timeout de cobrança

> Atualmente um pagamento tem como timeout padrão o valor de 30 segundos. Esse gerenciamento é feito internamente para evitar problemas com cobranças indevidas.
> Na prática, caso o pagamento demore mais de 30s para retornar um sucesso a api vai retornar um erro 500 e caso o pagamento seja resolvido posteriormente ele automaticamente será desfeito através de um reembolso automático.
> 
> Caso a sua api tenha um timeout diferente de 30 segundos será preciso solicitar essa alteração para a sua integração

Nesses casos a requisição responderá com o HTTP Status Code **408 Request Timeout** e com o seguinte body:

```json
{
    "message": "Request took too long to process.",
    "business_code": "REQUEST_TIMEOUT"
}
```

## Próximos passos

- [Solicitando um reembolso](/one-click/guides/refund-payments);
- [Consultando informações dos usuários](/one-click/guides/user-info);

## Obtendo ajuda

Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-negocios@picpay.com.
