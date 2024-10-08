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

Este guia descreve o passo a passo para processar pagamentos utilizando a solução de pagamentos logada **PicPay 1-Click**.

## Antes de começar

Antes de processar pagamentos online através de nossa solução de **PicPay 1-Click**, você deve possuir um `access_token` válido e não expirado. Você pode conferir como gerar seus tokens [neste artigo](/one-click/guides/oauth2-flow).

## Como funciona

### Autenticação

Além do `access_token`, gerado dinamicamente, o end-point de pagamentos necessita também de uma `Api-Key` que lhe será informada junto com seu `client_id` e `client_secret`.

:::caution Sobre o Api-Key
O `Api-Key` não deverá ser compartilhado de forma alguma e deve ficar armazenado de forma segura em seus servidores. 
:::

### Idempotência
A idempotência é uma forma de garantir que a mesma solicitação não seja processada mais de uma vez, evitando duplicações de pagamento ou reembolso. Isso é feito através do envio do header `x-Idempotency-Key` em cada requisição. Você pode conferir o funcionamento da idempotência [neste artigo](/one-click/guides/idempotency-key).

### Gerando uma cobrança na carteira do usuário

Com um `access_token`, `api_key` válidos e uma `idempotency_key` para garantir a unicidade da solicitação, o processo de geração de uma cobrança na carteira de clientes é simples e direto. A solicitação de cobrança deve ser feita por meio do endpoint `v1/payments/charge`, informando o valor a ser debitado no corpo da requisição. No exemplo abaixo, é realizada uma cobrança de R$ 0,10 na carteira do usuário.

```bash

curl --location --request POST 'https://api.picpay.com/v1/payments/charge' \
--header 'Api-Key: {{api_key}}' \
--header 'Authorization: Bearer {{access_token}}' \
--header 'Content-Type: application/json' \
--header 'x-Idempotency-Key: {{idempotency_key}}' \
--data '{
    "value": 0.10,
    "reference_id": "c413fcb5-d963-4b93-8218-3b776f656553",
    "auto_capture": true
}'

```

Abaixo um exemplo de retorno de sucesso. Os campos `transaction_id` e `reference_id` são fundamentais e devem ser armazenados, pois serão usados em futuros processos de estorno.

```json
{
    "transaction_id": "e646263b-2b4d-4b2c-93d8-2568fbffb744",
    "reference_id": "04c923a4-34d6-43e8-89db-1b563f887b53",
    "created_at": "2024-09-22 19:29:16"
}
```

Esse fluxo garante que a cobrança seja processada de forma segura e permite futuras operações com base nas transações geradas.

#### Qual será a origem dos fundos ?

O valor da cobrança poderá ser debitado do saldo da carteira, do cartão de crédito cadastrado, ou de ambos (saldo + cartão). Caso o cliente tenha habilitada a opção *Usar saldo* no aplicativo, o saldo disponível será usado primeiro. Se o saldo for insuficiente, a diferença será cobrada no cartão.

Exemplo: Para uma compra de R$60, com R$19 de saldo na carteira, o PicPay debitará os R$19 do saldo e cobrará os R$41 restantes no cartão.

#### Mensagens de erro

Não informamos os códigos de erro nos retornos das transações. Apenas informamos se a transação foi aprovada ou não.

```json
{
    "message":"Unauthorized transaction."
}
```

#### Timeout de cobrança

Se um pagamento demorar mais de **30 segundos** para ser concluído, a API retornará um erro 500. Caso a transação seja processada com sucesso após esse período, ela será automaticamente desfeita e o valor será reembolsado.

Caso a sua api tenha um timeout diferente de 30 segundos será preciso solicitar essa alteração para a sua integração.

Se o tempo limite for excedido, a requisição responderá com o código de status **HTTP 408 Request Timeout** e o seguinte corpo de resposta:

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
