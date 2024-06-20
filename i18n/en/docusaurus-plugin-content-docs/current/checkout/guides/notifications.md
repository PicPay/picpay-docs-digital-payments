---
id: notifications
title: Manage notifications
---

## About this guide

In this guide, we will describe the step-by-step process for receiving notifications about status changes for your orders generated through our e-commerce API.

## Prerequisites

Before starting your onboarding, you must have valid credentials. You can check how to obtain your credentials [in this article](../intro/getting-started#antes-de-começar).

## How does it work?

### Authentication

PicPay provides two integration keys: `x-picpay-token` and `x-seller-token`. For this operation, you should use the `x-picpay-token` in your requests.

### Basic operation

After any status change in your orders, PicPay will notify the callback URL (callbackUrl) provided at the time of the payment request. Below is how your e-commerce should be prepared to receive these notifications.

**Step 1:** Immediately after any status change of an order, PicPay sends a notification to your e-commerce via **POST** to the callback URL provided in the payment request as callbackUrl.

Your e-commerce should be ready to receive a **POST** at the endpoint /callback, using the x-seller-token in the header for request authentication. To confirm the receipt of the callback, your e-commerce must respond with **HTTP Status 200**.

```bash
curl -X POST \ http://www.sualoja.com.br/callback \ 
    -H 'Content-Type: application/json' \ 
    -H 'x-seller-token: 4ef4edbd-5cda-42da-860b-0e8d7b90c784' \ 
    -d '{ 
            "referenceId" : "102030", 
            "authorizationId" : "555008cef7f321d00ef236333" 
        }'
```

_Example of notification that PicPay sends to the e-commerce._

For security reasons, it is extremely important that your e-commerce validates the `x-seller-token`.

**Step 2:** Your e-commerce should perform a GET request using the referenceId sent in the notification to obtain the new payment status.

```bash
curl -X GET \ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \ 
    -H 'Content-Type: application/json' \ 
    -H 'x-picpay-token: {sua_chave_de_integracao}' \ '
```

_Example of status retrieval._

### Notification situations

Your e-commerce will be notified in the following situations:

- Order expired: it's no longer possible to pay using PicPay;
- Payment under analysis: user has paid but the payment is under review;
- Order paid;
- Order completed: funds are available for withdrawal;
- Payment refunded: payment was made and refunded to the customer;
- Payment with chargeback: customer requested cancellation of the payment through the card issuer;

## Next steps

- [Understand the possible payment statuses](./order-status.md);
- [Understand how to request a full cancellation](./cancel-order.md);

## Getting help

We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at relacionamento-negocios@picpay.com.