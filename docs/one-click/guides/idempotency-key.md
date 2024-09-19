---
id: idempotency-key
title: Idempotência
sidebar_label: Idempotência
hide_title: false
description: Aprenda como funciona a Idempotência no PicPay 1-Click
keywords: 
    - PicPay 1-Click
    - Informações
    - Idempotência
    - Idempotency-Key    
    - API
---

## Sobre este guia

Neste guia vamos descrever o funcionamento da Idempotência no **PicPay 1-Click**.

## Antes de começar

Antes de processar pagamentos online através de nossa solução de **PicPay 1-Click**, você deve possuir um `access_token` válido e não expirado. Você pode conferir como gerar seus tokens [neste artigo](/one-click/guides/oauth2-flow).

## Como funciona

A idempotência funciona como uma forma de evitar que a mesma solicitação seja executada duas vezes, garantindo assim que o mesmo evento não seja lançado de forma duplicada, assegurando a consistência dos dados enviados.
Sua utilização se dá a partir do envio do header `x-Idempotency-Key` com um valor no formato de string com limitação de tamanho nas requisições de pagamentos e reembolsos.

###

Esse valor será utilizado como uma chave para recuperar o resultado da mesma requisição. Dessa forma, se o cliente tiver dúvidas se uma determinada solicitação foi acatada ou não, basta reexecutar a requisição com o mesmo valor no header `x-Idempotency-Key`.

- Caso exista uma requisição já processada, iremos repetir o mesmo resultado sem processar a requisição novamente, assim, não haverá duplicação de pagamento ou reembolso.
- Caso não exista uma requisição já processada para a chave enviada, iremos processar a requisição normalmente.

Caso exista algum tipo de processamento em andamento no momento da requisição (cobrança ou reembolso) para aquela mesma chave, iremos retornar o HTTP status code 208 - Already Reported. É necessário repetir a chamada para ter certeza de que a operação foi finalizada.

É importante destacar que, caso o erro seja do tipo retentável, uma nova requisição com a mesma chave de idempotência resultará em uma retentativa da requisição. Caso o erro não seja retentável, o resultado da requisição para o mesmo `x-Idempotency-Key` será sempre o mesmo.

A tabela a seguir contém uma classificação dos tipos de erros retentáveis.

| Erro Type PicPay | Status Code | Message |
|---|--|--|
| Duplicated_Transaction | (400) Bad Request | Duplicated transaction |
| Funding_source_unavailable | (403) Forbidden | Funding source unavailable |
| Insufficient_funds | (406) Not Acceptable | Insufficient funds |
| Invalid_funding_source | (406) Not Acceptable | Invalid founding source |
| Account_closed | (406) Not Acceptable | The account is closed |
| Account_on_hold | (406) Not Acceptable | The account is on hold |
| Refund_exceeds_limit | (406) Not Acceptable | Refund value is invalid |
| Request_timeout | (408) Request Timeout | Request took too long to process |
| Service_unavailable | (503) Service Unavailable | Service temporarily unavailable. Please try again later |

## Próximos passos

- [Consultando informações dos usuários](/one-click/guides/user-info);
- [Solicitando um reembolso](/one-click/guides/refund-payments);

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-negocios@picpay.com. 
