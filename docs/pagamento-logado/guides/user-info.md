---
id: user-info
title: Obtendo informações do usuário
sidebar_label: Informações do usuário
hide_title: false
description: Aprenda como obter informações básicas dos usuários na nossa solução de Pagamento Logado
keywords: 
    - Pagamento logado
    - Informações
    - Data de nascimento
    - e-mail    
    - Login
---

## Sobre este guia

Neste guia vamos descrever o passo-a-passo para que você consulte informações de usuários autenticados através de nossa solução de pagamentos logada.

## Antes de começar

Antes de processar pagamentos online através de nossa solução de **Pagamento Logado**, você deve possuir um `access_token` válido e não expirado. Você pode conferir como gerar seus tokens [neste artigo](/pagamento-logado/guides/oauth2-flow).

## Como funciona

### Autenticação

Para esta operação, apenas o `access_token`, gerado dinamicamente, é necessário 

### Obtendo informações básicas dos usuários logado

Apenas com o `access_token` é possível obter algumas informaões básicas do cliente logado. Abaixo um exemplo:

```bash
curl --location --request GET 'https://api.picpay.com/oauth2/userinfo' \
--header 'Authorization: Bearer {access_token}' 
```

Abaixo um exemplo de retorno de sucesso.

```json
{
    "seller": "polenta.store@pm.me",
    "sub": "f:Xxxxxxx-xxxx-xxxx-xxxx-xxxxxxx:xxxxx",
    "email_verified": true,
    "birthdate": "2020-03-05",
    "preferred_username": "polento",
    "email": "polenta.the.dog@gmail.com"
}
```

:::info

O cliente irá autorizar o e-commerce a ter acesso a essas informações no momento do concentimento de permissões, explicado [aqui](/pagamento-logado/guides/oauth2-flow#solicitando-a-autorização-do-usuário)

:::

#### Mensagens de erro

Caso algum erro ocorra, informaremos o motivo na resposta da requisição
```json
{
    "error": "invalid_token",
    "error_description": "Token verification failed"
}
```

## Próximos passos

- [Efetuando uma cobrança](/pagamento-logado/guides/process-payments);
- [Solicitando um reembolso](/pagamento-logado/guides/refund-payments);

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-empresas@picpay.com. 
