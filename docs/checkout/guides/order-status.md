---
id: order-status
title: Obter status do pagamento
---

## Sobre este guia
Neste guia vamos descrever o passo-a-passo para que você consulte o status de suas ordens geradas através de nossa API de e-commerce.

## Pré-requisitos

Antes de iniciar sua integração, você deve possuir credenciais válidas. Você pode conferir como obter suas credenciais [neste artigo](/checkout/intro/getting-started#antes-de-começar).

## Como funciona?

### Autenticação

O PicPay disponibiliza duas chaves de integração: O x-picpay-token e o x-seller-token. Para esta operação, você deverá utilizar o x-picpay-token em suas requisições.

### Funcionamento básico

Você poderá consultar o status de toda ordem gerada por seu e-commerce através do referenceId único informado no momento da requisição de pagamento. O endpoint de consulta irá retornar apenas o status de sua ordem, assim como os campos informados dentro de additional_info.

:::info Informação
Os dados do comprador ou o QRCode gerado na criação da intenção de pagamento não serão devolvidos pelo endpoint de consulta.
:::

**Passo 1**: O seu e-commerce deve efetuar um GET utilizando o referenceId informado no momento da requisição (e que também enviamos por notificação a cada mudança de status). Entende um pouco mais sobre notificações [aqui]

```bash
curl -X GET \ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \ 
    -H 'Content-Type: application/json' \ 
    -H 'x-picpay-token: {sua_chave_de_integracao}' \ '`
```
_Exemplo de requisição para consultar o status de uma ordem._

### Ciclo de vida de um pagamento

Ao chamar o endpoint de pagamentos, uma ordem é gerada dentro do PicPay com status created. A ordem de status created poderá ser ou paga ou cancelada. Caso seja cancelada ou atinja a data de expiração (informada em expirationDate, no momento da criação da ordem), a ordem passara para o status expired.

As ordens pagas com sucesso pelos usuários terão seu status atualizado para paid. Caso o PicPay identifique algum comportamento fraudulento no processo de pagamentos, irá analisar a ordem que por sua vez ficará com o status analysis.

Abaixo um resumo sobre os status explicados acima, assim como outros status relevantes:

-   `created`: registro criado;
-   `expired`: prazo para pagamento expirado ou ordem cancelada;
-   `authorized`: autorizado e aguardando captura;
-   `paid`: pago;
-   `refunded`: pago e devolvido;
-   `chargeback`: pago e com chargeback;
    
## Próximos passos

- [Entenda como solicitar um cancelamento total](/checkout/guides/cancel-order);
- [Entenda um pouco mais sobre as notificações que o PicPay envia](/checkout/guides/notifications);

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-negocios@picpay.com. 