---
id: user-info
title: Getting User Information
sidebar_label: Getting User Information
hide_title: false
description: Learn how to get basic information from users in our solution PicPay 1-Click
keywords: 
- PicPay 1-Click
- Informations
- Birth Date
- e-mail    
- Login
---

## About this guide

In this guide we will describe the step-by-step for you to consult information of authenticated users through our logged payment solution.

## Before starting

Before processing online payments by our **PicPay 1-Click** solution, you must have a valid, non-expired access_token. You can check how to generate your tokens [in this article](/one-click/guides/oauth2-flow).

## How it works

### Authentication

For this operation, only the `access_token`, generated dynamically, is needed

### Getting basic information from logged in users

Just the `access_token` it is possible to obtain some basic information from the logged in client. Below an example:

```bash
curl --location --request GET 'https://api.picpay.com/oauth2/userinfo' \
--header 'Authorization: Bearer {access_token}' 
```
Below is an example of a successful return.

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

The customer will authorize the e-commerce to have access to this information when consenting to permissions, explained
 [aqui](/one-click/guides/oauth2-flow#solicitando-a-autorização-do-usuário)

:::

#### Error Messages

If an error occurs, we will inform the reason in the response to the request.

```json
{
    "error": "invalid_token",
    "error_description": "Token verification failed"
}
```

## Next steps

- [Making a charge](/one-click/guides/process-payments);
- [Requesting a refund](/one-click/guides/refund-payments);

## Getting help

We hope this article has helped! If you have any questions, you can consult our FAQ or contact us by e-mail : atendimento-empresas@picpay.com