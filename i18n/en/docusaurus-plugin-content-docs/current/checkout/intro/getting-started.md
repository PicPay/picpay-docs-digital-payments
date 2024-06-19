---
id: getting-started
title: How to get started
---

## Before getting started

Before starting your integration, you must have valid credentials to use our API. You can obtain your credentials through this page.

After completing your registration, your credentials will be available in the merchant dashboard, under the _Integrations_ tab.

:::info Information
Your credentials are unique and should never be shared with third parties.
:::

![img](../../../../../../static/img/guides/public-api-tokens.png)

:::caution Attention
Generating new tokens in the portal takes immediate effect and invalidates previously generated credentials.
:::

## Integration options

PicPay offers several integration options. Below, we will discuss each one so you can understand which is the best option for your e-commerce.

| **Integration** | **Who it's for** | **Link to the step-by-step** |
|--|--| -- |
| VTEX | Retailers who are already integrated or have a partnership with VTEX; | [VTEX](../plugins/vtex.md) |
| Magento 2 | Lojistas que possuem seus e-commerces com Magento 2 |[Magento](../plugins/magento.md) |
| Public API | Retailers who want to create and customize their own experience (whether through web, apps, or other channels). | [Public API](../guides/accepting-payments.md) |

:::info Information
We are working to develop new integrations. Want to learn more or interested in a specific platform? Send us an email at [relacionamento-negocios@picpay.com](mailto:relacionamento-negocios@picpay.com "mailto:relacionamento-negocios@picpay.com"). Are you a developer with a need for a specific platform? We accept PRs.
:::

## Testing your integration

Currently, PicPay does not provide a Sandbox environment. All tests will be conducted in the production environment and do not incur any costs to the developer/retailer. Additionally, all payments made can be immediately refunded through our cancellation API or the merchant dashboard.

![img](../../../../../../static/img/guides/cancel-transactions.gif)

## Next steps

- [Accepting payments with the public API](../guides/accepting-payments.md);
- [Understanding the possible payment statuses](../guides/order-status);
- [Understanding how to request a full cancellation](../guides/cancel-order);
- [Understand a bit more about the notifications that PicPay sends](../guides/notifications);

## Getting help

We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at relacionamento-negocios@picpay.com.