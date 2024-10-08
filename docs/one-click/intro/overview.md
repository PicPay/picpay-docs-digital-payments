---
id: overview
title: Visão geral
---

## O que é o PicPay 1-Click?

O **PicPay 1-Click** é uma solução de pagamento destinada a lojistas, oferecendo uma forma rápida e sem atritos de cobrar consumidores. A solução é baseada no consentimento prévio do usuário e utiliza o fluxo OAuth 2.0 Authorization Code Grant, garantindo segurança e praticidade para realizar cobranças na carteira digital do consumidor.

## Como funciona?

O funcionamento segue três etapas principais:

**Autorização**: O consumidor deve autorizar a loja a efetuar cobranças em sua carteira PicPay. Para isso, o lojista redireciona o consumidor para o fluxo de autorização, onde ele efetua login e confirma as permissões necessárias.

**Login e Autenticação**: O consumidor realiza o login na plataforma do PicPay, que utiliza o Keycloak como ferramenta de autenticação e gerenciamento de identidades. 

**Cobrança**: Após o consumidor autorizar o lojista, este poderá gerar cobranças automáticas através da API, utilizando o Access Token gerado no fluxo de autorização.

## Funcionalidades disponíveis.

Atualmente, a API do PicPay 1-Click oferece as seguintes funcionalidades:

- Geração de cobrança na carteira dos usuários;
- Estorno total de valores aprovados;
- Consultar informações dos usuários logados;
    
Saiba mais sobre cada funcionalidade nos nossos guias ao longo desta página.

## Próximos passos

- [Como começar](/one-click/intro/getting-started);

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-negocios@picpay.com
