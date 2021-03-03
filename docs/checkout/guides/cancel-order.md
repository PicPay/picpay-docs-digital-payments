---
id: cancel-order
title: Solicitar cancelamentos
---

## Sobre este guia
Neste guia vamos descrever o passo-a-passo para que você cancelar suas ordens pendentes ou pagas através de nossa API de e-commerce.

## Pré-requisitos

Antes de iniciar sua integração, você deve possuir credenciais válidas. Você pode conferir como obter suas credenciais [neste artigo](/checkout/intro/getting-started#antes-de-começar).

## Como funciona?

### Autenticação

O PicPay disponibiliza duas chaves de integração: O x-picpay-token e o x-seller-token. Para esta operação, você deverá utilizar o x-picpay-token em suas requisições.

### Funcionamento básico

Você poderá cancelar qualquer ordem gerada por seu e-commerce através de nosso end-point de cancelamento. Confira abaixo as regras:

**Cenário 1** Se já foi pago, o cliente PicPay será estornado caso sua conta de Lojista no PicPay tenha saldo para realizar o estorno e caso o cliente PicPay tenha recebido algum cashback nesta transação, este valor será estornado do cliente (para isto o mesmo deve possuir saldo). Todas esses requisitos devem ser cumpridos para que o estorno da transação ocorra com sucesso. Neste caso, o authorizationId também deve ser enviado no corpo da requisição.

```bash
curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments/{referenceId}/cancellations' \ 
    --header 'x-picpay-token: {sua_chave_de_integracao}' \ 
    --header 'Content-Type: application/json' \ 
    --data-raw '{ "authorizationId": "601327196d038600273bbf1c" }'
```
_Exemplo de cancelamento de ordem paga._

No exemplo acima, esta ordem irá passar do status paid para refunded

**Cenário 2** Se ainda não foi pago, a transação será cancelada em nosso servidor e não permitirá pagamento por parte do cliente PicPay. Neste caso, o referenceId é suficiente para a operação.

```bash
curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments/{referenceId}/cancellations' \ 
    --header 'x-picpay-token: {sua_chave_de_integracao}' \ 
    --header 'Content-Type: application/json' \ 
    --data-raw ''`
```
_Exemplo de cancelamento de ordem pendente._

No exemplo acima, esta ordem irá passar do status created para expired.

Para transações pagas com saldo, o valor será devolvido à carteira do usuário quase que imediatamente após a operação. O estorno de uma transação feita com cartão de crédito pode demorar alguns dias ser refletido na fatura do cliente.

## Próximos passos

- [Entenda os possíveis status de um pagamento](/checkout/guides/order-status);
- [Entenda um pouco mais sobre as notificações que o PicPay envia](/checkout/guides/notifications);

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-empresas@picpay.com. 
