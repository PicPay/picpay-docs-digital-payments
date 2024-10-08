---
id: order-status
title: Get payment status
---

## About this guide

In this guide, we will describe the step-by-step process for you to check the status of your orders generated through our e-commerce API.

## Prerequisites

Before starting your onboarding, you must have valid credentials. You can check how to obtain your credentials [in this article](../intro/getting-started#antes-de-começar).

## How does it work?

### Authentication

PicPay provides two integration keys: `x-picpay-token` and `x-seller-token`. For this operation, you should use the `x-picpay-token` in your requests.

### Basic operation

You can check the status of any order generated by your e-commerce using the unique **referenceId** provided at the time of the payment request. The query endpoint will return only the status of your order, along with the fields specified within `additional_info`.

:::info Information
The buyer's data or the QR code generated during the payment intent creation will not be returned by the query endpoint.
:::

**Step 1**: Your e-commerce should perform a GET request using the `referenceId` provided at the time of the request (and also sent in notifications for each status change). Learn more about notifications [here].

```bash
curl -X GET \ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \ 
    -H 'Content-Type: application/json' \ 
    -H 'x-picpay-token: {your_integration_key}' \ '`
```

_Example of request to check the status of an order._

### Payment lifecycle

When calling the payments endpoint, an order is created within PicPay with the status `created`. An order in the `created` status can either be paid or canceled. If it is canceled or reaches the expiration date (provided in expirationDate at the time of order creation), the order will transition to the `expired` status.

Orders successfully paid by users will have their status updated to `paid`. If PicPay identifies any fraudulent behavior during the payment process, it will analyze the order, which will then have the "analysis" status.

Below is a summary of the statuses explained above, as well as other relevant statuses:

- `created`: payment order created;
- `expired`: payment deadline expired or order canceled;
- `authorized`: authorized and awaiting capture;
- `paid`: paid;
- `refunded`: paid and refunded;
- `chargeback`: paid and with chargeback;

## Next steps

- [Understand how to request a full cancellation](./cancel-order);
- [Learn more about the notifications that PicPay sends](./notifications);

## Getting help

We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at relacionamento-negocios@picpay.com.