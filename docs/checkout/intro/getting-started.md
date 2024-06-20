---
id: getting-started
title: Como começar
---


## Antes de começar

Antes de iniciar sua integração, você deve possuir credenciais válidas para a utilização da nossa API. Você pode obter suas credenciais através desta página.

Após finalizar o seu cadastro, suas credenciais estarão disponíveis no painel lojista, na aba _Integrações._

:::info Informação
Suas credenciais são únicas e nunca devem ser compartilhadas com terceiros.
:::

![img](../../../static/img/guides/vtex-keys.png)



:::caution Atenção
A geração de novos tokens no portal tem efeito imediato e invalida as credencias geradas anteriormente.
:::

## Opções de integração

O PicPay disponibiliza algumas formas de integração. Abaixo vamos falar um pouco mais sobre cada uma para que você possa entender qual é a melhor opção para o seu e-commerce.

| **Integração** | **A quem se destina** | **Link para o passo-a-passo** |
|--|--| -- |
| VTEX | Lojistas que já estão integrados ou possuem uma parceria com a VTEX; | [VTEX](../plugins/vtex.md) |
| Magento 2 | Lojistas que possuem seus e-commerces com Magento 2 | [Magento](../plugins/magento.md) |
| API Pública | Lojistas que desejam criar e customizar sua própria experiência (Seja via web, aplicativo ou outros canais). | [API Pública](../guides/accepting-payments.md) |

:::info Informação
Estamos trabalhando para desenvolver novas integrações. Quer saber mais ou tem interesse em alguma plataforma específica? Nos envie um e-mail para [relacionamento-negocios@picpay.com](mailto:relacionamento-negocios@picpay.com "mailto:relacionamento-negocios@picpay.com"). É desenvolvedor e tem necessidade de alguma plataforma? Aceitamos PRs
:::

## Testando sua integração

Atualmente o PicPay não disponibiliza ambiente de SandBox. Todos os testes serão feitos no ambiente de produção e não geram qualquer ônus ao desenvolvedor/lojista, sendo que todos os pagamentos realizados podem ser imediatamente estornados (Através de nossa API de cancelamento, ou pelo painel lojista).

![img](../../../static/img/guides/cancel-transactions.gif)

## Próximos passos

- [Aceitando pagamentos com a API pública](/checkout/guides/accepting-payments);
- [Entenda os possíveis status de um pagamento](/checkout/guides/order-status);
- [Entenda como solicitar um cancelamento total](/checkout/guides/cancel-order);
- [Entenda um pouco mais sobre as notificações que o PicPay envia](/checkout/guides/notifications);

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-negocios@picpay.com