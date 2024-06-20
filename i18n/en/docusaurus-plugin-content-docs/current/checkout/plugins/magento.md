---
id: magento
title: Magento
---

## Introduction

In this guide, we will describe step-by-step how you can integrate PicPay into your e-commerce with Magento 1 or 2.

## Before getting started

Before starting your onboarding, you must have valid credentials. You can check how to obtain your credentials [in this article](/checkout/intro/getting-started#antes-de-começar).

## How to use

### Access the official GitHub page for the plugins

- Link to Magento 1: https://github.com/PicPay/magento1
- Link to Magento 2: https://github.com/PicPay/magento2

### Installation for Magento 1

To set up PicPay as a payment method in Magento 1, we provide two options:

- **CDN**  
Download our plugin through our CDN and copy the files to your environment: https://cdn.picpay.com/ecommerce/Picpay_Payment-1.0.2.tgz

- **Composer**  
Perform the installation using Composer.

```bash
composer require picpay/magento1
``` 

### Installation for Magento 2

**Composer**  
Perform the installation using Composer.

***Step 1***
```bash
composer require picpay/magento2
```

***Step 2***
```
php bin/magento setup:upgrade
```

***Step 3***
```
    php bin/magento setup:di:compile
```

***Step 4***
``` 
php bin/magento setup:static-content:deploy pt_BR en_US
```

### Manual installation for Magento 2

Perform this first step only if your Magento does not have Laminas (versions earlier than 2.3.5).<br/>
If your Magento does not have Laminas, install the dependency.

***Step 1***
```
composer require laminas/laminas-http:>2.4.0
```
***Step 2***
```
composer require firebase/php-jwt:*
``` 
***Step 3***
```
composer require bacon/bacon-qr-code:*
```

Download the file from **[GitHub](https://github.com/picpay/magento2)** and paste the files into the folder **app/code/Picpay/Payment**.

Then run the installation commands below:

***Step 1***
``` 
php bin/magento setup:upgrade
``` 
***Step 2***
``` 
php bin/magento setup:di:compile
```
***Step 3***
``` 
php bin/magento setup:static-content:deploy pt_BR en_US
```

### Configurations

To configure the PicPay module for Magento 2, access:
- **Administrator Panel** > **Sales** > **Picpay** > **Settings** > Locate the PicPay option within the menu **Other payment methods**;
- Next, in the menu **PicPay**, click on **Credentials** and **General Settings**;
<br/>

_Attention: This configuration enables the use of the PicPay module._

- Enter the credentials used for PicPay services (_PicPay API Token_ and _PicPay Seller Token_). If you don't have them, you need to contact the payment method.

## Credentials and General Settings

Below are the details of each configuration:
- **Title**: Enter the title of the configuration;
- **PicPay API Token**: Enter the PicPay API Token;
- **PicPay Seller Token**: Enter the PicPay Seller Token;
- **Hours to Expire**: Transaction expiry time in hours (only numbers);
- **Status for new orders**: Status assigned to newly created orders before payment confirmation through server notifications;
- **Payment from applicable countries**: Enter here the countries where payment is applicable;
- **Enable order status notification**: Check this option if you want to enable order status notification;
- **Enable debug log**: When you activate this function, logs will be recorded on the server for debugging purposes.

## Checkout and Layout Settings
In this field, you will configure the checkout behavior:
- **Checkout Modality**: Determine the page where the payment process will occur.
- **QRCode Width in "Same Page Mode (Transparent)"**: Specify the QRCode size in pixels for the transparent checkout mode. Use numbers only.
- **QRCode Width on Payment Information Page**: Set the QRCode size in pixels for the payment information page. Use numbers only.
- **Use Custom Text in Form**: Enable this option if you want to display a custom message on the Checkout page.
- **Show QRCode on Success Page**: Determine whether to display the QRCode on the success page.
- **Message to Show Alongside QRCode on Success Page**: Enter the message that will be displayed next to the QRCode on the success page.

### Logs

This functionality presents Callbacks in the Magento options menu. If there is any error feedback, such as refund or capture issues, the error log can be found in the Magento's own log file.
- **Path**: ```magento_root_folder/var/logs```

### Callbacks

Through the menu below, it is possible to view the callback payload returned to PicPay.
- **Path**: Sales > PicPay > Callbacks

### Next steps

- [Understand the possible statuses of a payment](/checkout/guides/order-status);
- [Understand how to request a full cancellation](/checkout/guides/cancel-order);
- [Learn more about the notifications that PicPay sends](/checkout/guides/notifications);

## Getting help

We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at relacionamento-negocios@picpay.com.

Additionally, you can also open an issue in our software repositories [Magento 1](https://github.com/PicPay/magento1/issues) or [Magento 2](https://github.com/PicPay/magento2/issues).
