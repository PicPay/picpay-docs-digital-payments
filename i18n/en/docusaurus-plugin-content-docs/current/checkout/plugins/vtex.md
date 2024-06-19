---
id: vtex
title: VTEX
---

## Introduction

In this guide, we will describe the step-by-step process for you to use PicPay within your e-commerce with VTEX.

## Before getting started

Before starting your onboarding, you must have valid credentials. You can check how to obtain your credentials [in this article](/checkout/intro/getting-started#antes-de-começar).

## How to use

### Getting your integration keys

Your integration keys will be available within the [retail panel](https://lojista.picpay.com/ecommerce-token), in the integrations menu.

![VTEX integration keys](../../../../../../static/img/guides/vtex-keys.png)

These keys must be copied and inserted into your VTEX configuration panel.

:::caution Attention
Every time new tokens are generated using the **Generate Tokens** button, old tokens will be invalidated.
:::

:::warning Issues obtaining keys.
Due to an instability in our new merchant panel (https://painel-empresas.picpay.com/), we recommend obtaining VTEX integration keys through the old merchant panel(https://lojista.picpay.com/ecommerce-token).
:::

### Enabling PicPay as a payment method

Within your VTEX panel, you will need to configure PicPay as a new payment gateway.

**Step 1** - Within the payments section, click on **Settings**.

![Menu VTEX](../../../../../../static/img/guides/vtex-menu.png)

**Step 2** -On the Gateways Affiliations tab, click the + button.

![New gateway](../../../../../../static/img/guides/vtex-novo-gateway.png)

**Step 3** -Select the PicPay connector.

![Connectors](../../../../../../static/img/guides/vtex-conectores.png)

### Configuring your keys within VTEX

Fill in the fields `Application Key` and `Application Token` with your PicPay account information and save the settings.

![Connectors](../../../../../../static/img/guides/vtex-config.png)

## Next steps

- [Understand the possible statuses of a payment](/checkout/guides/order-status);

## Getting help

We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at relacionamento-negocios@picpay.com.
