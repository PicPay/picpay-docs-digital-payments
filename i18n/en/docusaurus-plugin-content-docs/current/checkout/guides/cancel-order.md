---
id: cancel-order
title: Request cancellations
---

## About this guide

In this guide, we will describe the step-by-step process for canceling your pending or paid orders through our e-commerce API.

## Prerequisites

Before starting your onboarding, you must have valid credentials. You can check how to obtain your credentials [in this article](../intro/getting-started#antes-de-começar).

## How does it work?

### Authentication

PicPay provides two integration keys: `x-picpay-token` and `x-seller-token`. For this operation, you should use the `x-picpay-token` in your requests.

### Basic operation

You can cancel any order generated by your e-commerce through our cancellation endpoint. Check the rules below:

**Scenario 1** If the payment has already been made, the PicPay customer will be refunded provided that your Merchant account on PicPay has sufficient balance to cover the refund. If the PicPay customer received any cashback for this transaction, that amount will also be deducted from the customer (for this, the customer must have sufficient balance). All these requirements must be met for the transaction refund to be successful. In this case, the `authorizationId` must also be included in the request body.

```bash
curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments/{referenceId}/cancellations' \ 
    --header 'x-picpay-token: {your_integration_key}' \ 
    --header 'Content-Type: application/json' \ 
    --data-raw '{ "authorizationId": "601327196d038600273bbf1c" }'
```
_Example of a paid order cancellation:_

In the example above, this order will change from the status paid to refunded.

**Scenario 2** If the payment has not yet been made, the transaction will be canceled on our server, preventing payment by the PicPay customer. In this case, the referenceId is sufficient for the operation.

```bash
curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments/{referenceId}/cancellations' \ 
    --header 'x-picpay-token: {your_integration_key}' \ 
    --header 'Content-Type: application/json' \ 
    --data-raw ''`
```
_Example of cancellation of a pending order._

In the example above, this order will change from the status created to expired.

For transactions paid with balance, the amount will be returned to the user's wallet almost immediately after the operation. Refunding a transaction made with a credit card may take a few days to appear on the customer's statement.

## Next steps

- [Understand the possible payment statuses](/checkout/guides/order-status);
- [Learn more about the notifications that PicPay sends](/checkout/guides/notifications);

## Getting help

We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at relacionamento-negocios@picpay.com.
