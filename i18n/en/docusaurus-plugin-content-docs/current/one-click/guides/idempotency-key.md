---
id: idempotency-key
title: Idempotency
sidebar_label: Idempotency
hide_title: false
description: Learn how Idempotency works in PicPay 1-Click
keywords: 
    - PicPay 1-Click
    - Information
    - Idempotency
    - Idempotency-Key    
    - API
---

## About this guide

In this guide we will describe how Idempotence works in **PicPay 1-Click**.

## Before Starting

Before processing online payments by our **PicPay 1-Click** solution, you must have a valid, non-expired `access_token`. You can check how to generate your tokens [neste artigo](/one-click/guides/oauth2-flow).

## How It works

Idempotence works as a way to prevent the same request from being executed twice, thus ensuring that the same event is not launched twice, ensuring the consistency of the data sent.
It is used by sending the `x-Idempotency-Key` header with a value in string format with a size limit in payment and refund requests.

###

This value will be used as a key to retrieve the result of the same request. This way, if the client has doubts about whether a particular request was accepted or not, it can simply execute the request again with the same value in the `x-Idempotency-Key` header.

- If there is a request that has already been processed, we will repeat the same result without processing the request again, thus, there will be no duplication of payment or refund.
- If there is no request already processed for the sent key, we will process the request normally.

If there is any type of processing in progress at the time of the request (billing or refund) for that same key, we will return the HTTP status code 208 - Already Reported. It is necessary to repeat the call to be sure that the operation has been completed.

It is important to note that if the error is of the retryable type, a new request with the same idempotency key will result in a retry of the request. If the error is not retryable, the result of the request for the same `x-Idempotency-Key` will always be the same.

The following table contains a classification of the types of retainable errors.

| Erro Type PicPay | Status Code | Message |
|---|--|--|
| Duplicated_Transaction | (400) Bad Request | Duplicated transaction |
| Funding_source_unavailable | (403) Forbidden | Funding source unavailable |
| Insufficient_funds | (406) Not Acceptable | Insufficient funds |
| Invalid_funding_source | (406) Not Acceptable | Invalid founding source |
| Account_closed | (406) Not Acceptable | The account is closed |
| Account_on_hold | (406) Not Acceptable | The account is on hold |
| Refund_exceeds_limit | (406) Not Acceptable | Refund value is invalid |
| Request_timeout | (408) Request Timeout | Request took too long to process |
| Service_unavailable | (503) Service Unavailable | Service temporarily unavailable. Please try again later |

## Next steps

- [Requesting a refund](/one-click/guides/refund-payments);
- [Consulting user informations](/one-click/guides/user-info);

## Getting help

We hope this article has helped! If you have any questions, you can consult our FAQ or contact us by e-mail : atendimento-empresas@picpay.com