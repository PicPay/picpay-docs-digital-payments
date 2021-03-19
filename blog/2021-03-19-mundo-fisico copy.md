---
slug: Pagamentos digitais para mundo físico
title: Olá, mundo físico
author: Marcus Garcia
author_title: Product Manager @ PicPay
author_url: https://github.com/marcus-garcia
author_image_url: https://avatars.githubusercontent.com/u/12819808?s=60&v=4
tags: [mundo-fisico, pagamentos]
---

Olá, mundo físico!

Recentemente fizemos uma melhoria em nossa API de pagamentos que simplifica a sua utilização por lojistas do mundo físico. Se você se encaixa nessa categoria, confira abaixo como se beneficiar.

## O que muda?

Não é sempre que o lojista do mundo físico possui os dados do cliente (como CPF, e-mail, telefone, etc), dado que a compra é presencial.

Solicitar estes dados em uma transação presencial pode aumentar a fricção junto ao ponto de venda e por isso removemos a obrigatoriedade destes dados.

## Como utilizar

É muito simples! =)

Basta incluir o campo `purchaseMode` em sua requisição com o valor `in-store` e pronto! Desta forma os dados de `buyer` deixam de ser obrigatórios. Confira um exemplo abaixo:


```bash {11}
curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments'  \ 
--header 'x-picpay-token: {sua_chave_de_integracao}'  \ 
--header 'Content-Type: application/json'  \ 
--data-raw '{ "referenceId": "102039", 
    "callbackUrl": "http://localhost/mockVtexPostCallback/?httpStatus=200", 
    "expiresAt": "2020-12-12T15:53:00+05:00", 
    "returnUrl": "http://www.picpay.com/#transacaoConcluida", 
    "value": 10, 
    "additionalInfo": [ null ], 
    "channel" : "name-of-your-channel",
    "purchaseMode" : "in-store",
    "buyer": { 
        "firstName": "João", 
        "lastName": "dos Testes", 
        "document": "010.091.001-91" 
    } 
}'
```

**Importante**
> Apesar de não ser obrigatório, vocÊ ainda poderá enviar os dados de `buyer` na requisição. Lembre-se que os níveis de conversão aumentam consideravelmente quando os dados de `buyer` são enviados, já que o cliente recebe uma notificação via push.

## Pontos de atenção

As credenciais do lojista serão bloqueadas caso o PicPay identifique que o lojista está enviando transações 100% online (ecommerces, por exemplo) como `in-store`, apenas para "driblar" a obrigatoriedade dos dados de `buyer`.

## Obtendo ajuda
Esperamos ter ajudado com este artigo! Ficou alguma dúvida? Você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-empresas@picpay.com.