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

Possuindo um `access_token` válido, o processo de geração de uma cobrança na carteira dos clientes é extremamente simples e fluido. A cobrança deverá ser gerada através do end-point `v1/payments/charge`, indicando o valor a ser debitado no corpo da requisição. No exemplo abaixo, estamos solicitando a cobrança de R$ 3,00 na carteira do usuário.

```bash

curl --location --request POST 'https://api.picpay.com/v1/payments/charge' \
--header 'Api-Key: {{api_key}}' \
--header 'Authorization: Bearer {access_token} \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'value=3'

```

Abaixo um exemplo de retorno de sucesso. O campo `transaction_id` deve ser guardado pois é a chave para processos de estorno.

```json
{
    "transaction_id": "246599282",
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

## Próximos passos

- [Solicitando um reembolso](/one-click/guides/refund-payments);
- [Consultando informações dos usuários](/one-click/guides/user-info);


## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-empresas@picpay.com. 
