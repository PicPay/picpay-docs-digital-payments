---
id: accepting-payments
title: Accepting Payments
hide_title: true
---

# Accepting Payments with the public API

## About this guide

In this guide we will describe the step-by-step process for you to accept online payments with PicPay, as well as the basic flow of a payment with QR Code and the payment lifecycle.

## Prerequisites

Before starting your onboarding, you must have valid credentials. You can check how to obtain your credentials [in this article](../intro/getting-started#antes-de-começar).

## How does it work?

### Authentication

PicPay provides two integration keys: `x-picpay-token` and `x-seller-token`. For this operation, you should use the `x-picpay-token` in your requests.

### Basic operation

PicPay operates as an asynchronous payment method. This means a payment intent is generated through our payment API and remains in the `pending` status until the user completes the payment using the PicPay app. Below is the basic flow of QR Code payments.

![img](../../../../../../static/img/guides/sequence-diagram-qrcode.png)


**Step 1**: The customer selects PicPay as the payment method on your e-commerce platform;

**Step 2:** Your e-commerce platform must make a server-side call to our payment API (/payments), generating a payment intent with a pending status within PicPay;

```bash
curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments'  \ 
--header 'x-picpay-token: {your_integration_key}'  \ 
--header 'Content-Type: application/json'  \ 
--data-raw '{ "referenceId": "102039", 
    "callbackUrl": "http://localhost/mockVtexPostCallback/?httpStatus=200", 
    "expiresAt": "2020-12-12T15:53:00+05:00", 
    "returnUrl": "http://www.picpay.com/#transacaoConcluida", 
    "value": 10, 
    "additionalInfo": [ null ], 
    "buyer": { 
        "firstName": "João", 
        "lastName": "dos Testes", 
        "document": "010.091.001-91" 
    } 
}'
```

_Example of request: The e-commerce creates a payment intent of 10 reais on PicPay for the customer João dos Testes._

**Step 3:** PicPay returns the QR Code in the API payments callback response (URL for redirection in paymentUrl and encoded image in qrcode.base64);

```json
{  
    "referenceId":  "102039",  
    "paymentUrl":  "https://app.picpay.com/checkout/NWZkOTFjZTA4.....ZWJmM2QxMzA2",  
    "qrcode":  {  
        "content":  "https://app.picpay.com/checkout/NWZkOTFjZTA4.....ZWJmM2QxMzA2",  
        "base64":  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGb...(muitos caracteres)..II="  
    },  
    "expiresAt":  "2020-12-12T08:53:00-02:00"  
}
```

_Example response to step 3 request._

**Step 4:** In your e-commerce, you display the QR code to your customer by either redirecting to the URL or showing the QR code directly;

![img](../../../../../../static/img/guides/ecommerce-qrcode-redirect.png)
*Image 2 - Example using redirection*


![img](../../../../../../static/img/guides/ecommerce-qrcode-embeeded.png)
*Image 3 - Example using the QR code on the page*

**Step 5:** If we identify that your customer is also a PicPay user, we will send a notification within the PicPay app informing them about the pending payment. In all cases, we will also send a pending payment email containing the link to our checkout page. At this point, there will be a payment intent with a pending status (learn more about the payment lifecycle here).

**Step 6:** The customer makes the payment through the PicPay app (using either their balance or a credit card).

:::info Information
If the customer does not make the payment by the expiration date (sent at the time of creation), the payment will move to the status expired.
:::

**Step 7:** If the payment is successful, PicPay sends a notification to the e-commerce via **POST** to the callback URL provided in the payment request as callbackUrl.

Your e-commerce should be prepared to receive a **POST** at the endpoint /callback, using the `x-seller-token` in the header for authentication of the request. To confirm the receipt of the callback, your e-commerce must respond with **HTTP Status 200**.

```bash
curl -X POST \ http://www.sualoja.com.br/callback \ 
    -H 'Content-Type: application/json'  \ 
    -H 'x-seller-token: 4ef4edbd-5cda-42da-860b-0e8d7b90c784'  \ 
    -d '{   
            "referenceId" : "102030", 
            "authorizationId" : "555008cef7f321d00ef236333" 
        }'
```

_Example of notification that PicPay sends to the e-commerce._

:::info Information
However, for security reasons, we will not disclose the new status in this request. Therefore, your store (upon receiving our notification) should query our order status endpoint.
:::

:::caution Attention

If the callback does not arrive within the time determined by you, we recommend that a direct status check of the order be performed (**step 8**). This is applicable in cases that require instant confirmations (such as in-store purchases or vending machines, for example).

:::

Learn more about the notifications that PicPay sends [in this article](./notifications).

**Step 8:** Your e-commerce should perform a GET request using the referenceId sent in the notification to obtain the payment status.

```bash
curl -X GET \ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \ 
    -H 'Content-Type: application/json'  \ 
    -H 'x-picpay-token: {your_integration_key}'  \  }'
```

_Example of notification that PicPay sends to the e-commerce._

**Passo 9:** If the payment is confirmed, display confirmation on your e-commerce site.

## Next steps

- [Understand the possible statuses of a payment](./order-status);
- [Understand how to request a full cancellation](./cancel-order);
- [Learn more about the notifications that PicPay sends](./notifications);

## Getting help

We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at relacionamento-negocios@picpay.com.
