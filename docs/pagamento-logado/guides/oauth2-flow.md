---
id: oauth2-flow
title: Autenticação e autorização
sidebar_label: Autenticação e autorização
hide_title: false
description: Aprenda como obter tokens de acesso para sua aplicação através de nossos serviços oauth2.
keywords: 
    - Pagamento logado
    - Autenticação
    - Autorização
    - Login
    - Token
---

## Sobre este guia

Neste guia vamos descrever o passo-a-passo para que você obtenha um token de acesso para processar pagamentos online com o PicPay através de nossa solução de pagamentos logada.

## Antes de começar

### Registro do aplicativo

Antes de iniciar sua integração, você deve possuir credenciais válidas. Atualmente, para este produto, o processo de criação de credenciais é realizado diretamente pelo time do PicPay.

Para esta solução de pagamentos, o e-commerce já deve ser um parceiro do PicPay. Os dados necessários para realizar o registro do aplicativo são:
- E-mail de cadastro;
- URL de redirecionamento ou URL de callback;

:::info

A solução de **Pagamento Logado** não está disponível para todos os nossos lojistas. Se interessou? Basta entrar em contato através do e-mail relacionamento-empresas@picpay.com demonstrando interesse.

:::

### Obtenção do `client_id` e `client_secret` 

Após o registro do aplicativo, o PicPay compartilhará com o e-commerce as credenciais de acesso, na forma de um `client_id` e um `client_secret`. 

#### Um pouco mais sobre o `client_id`
O client ID é uma sequência exposta publicamente usada pela API de serviço para identificar o aplicativo e também para criar URLs de autorização que são apresentadas aos usuários.

#### Um pouco mais sobre o `client_secret`
 O client secret é usado para autenticar a identidade do aplicativo na API de serviço quando o aplicativo solicita o acesso à conta de um usuário e deve ser mantido privado entre o aplicativo e a API.


## Como funciona?

O fluxo básico de autenticação e autorização consiste na geração de um código após o usuário digitar seu login/senha em uma interface do PicPay.

Com o código gerado, o e-commerce deve gerar um token que será utilizado em toda comunicação `server to server` com o PicPay. Este token possibilitará que o usuário efetue as seguintes operações (dependendo do escopo configurado):

- Processar pagamentos;
- Reembolsar pagamentos;
- Obter informações do usuário;

### Redirecionando usuário para tela de login e senha

Inicialmente, seu e-commerce deverá redirecionar seus clientes para a página de login e senha do PicPay. Para isso, seu e-commerce deverá gerar a URL, que deverá conter seu `client_id` e url de redirecionamento. Exemplo:

```bash
curl --location --request GET 'https://api.picpay.com/oauth2/auth?client_id=xxxxxxxxxxxx&response_type=code&redirect_uri=http://yourwebsite.com/api/payments'

https://api.picpay.com/oauth2/auth?client_id=CLIENT_ID&response_type=code&redirect_uri=CALLBACK_URL&scope=scopes

```

Breve explicação sobre os parametros da URL acima:

- `client_id`: Identificador da aplicação fornecido pelo PicPay;
- `redirect_uri`:  URL para onde o serviço redireciona o agente do usuário após a concessão de um código de autorização
- `response_type` Deve ser igual a `code`, especificando que seu aplicativo está solicitando uma concessão de código de autorização

### Solicitando a autorização do usuário

Ao utilizar a URL do [passo anterior](/pagamento-logado/guides/oauth2-flow#redirecionando-usuário-para-tela-de-login-e-senha), o cliente será redirecionado para uma página de login e senha. Seu cliente deverá então efetuar o login através de seu usuário e senha do PicPay.

![img](../../../static/img/guides/pagamento-logado/login.png)

Após o login, o cliente deverá revisar as permissões solicitadas pelo aplicativo. 

:::info Informação
As permissões solicitadas irão depender das configurações de escopo setadas no momento da criação das credenciais.
:::

![img](../../../static/img/guides/pagamento-logado/authorization.png)

:::caution Atenção
O cliente poderá conceder ou não as permissões. Sua aplicação deverá estar preparada para receber os dois tipos de resposta.

Após o concentimento inicial, o PicPay não solicitará novamente as permissões ao cliente. 
:::


### Obtendo o código de autorização

Caso o cliente autorize o aplicativo no [passo anterior](/pagamento-logado/guides/oauth2-flow#solicitando-a-autorização-do-usuário), o usuário será redirecionado para a URL de retorno indicada.

O código de autorização será enviado como um parâmetro junto a URL indicada e deverá ser utilizado para a geração dos tokens no passo seguinte.

![img](../../../static/img/guides/pagamento-logado/get-with-code.png)

### Solicitação dos tokens

Para realizar as solicitações de pagamento, reembolso ou consulta de informações, o e-commerce deverá informar um token válido como um dos parâmetros do header de cada requisição.

Para tanto, o e-commerce deverá solicitar um access token com o código de autorização obtido no *passo 3* e o `client_id` e o `client_secret`.

Exemplo de requisição de token:
```bash
curl -X POST \   
https://api.picpay.com/oauth2/token \  
-H "Content-Type='application/x-www-form-urlencoded'" \  
-d "grant_type=authorization_code" \  
-d "client_id=CLIENT_ID" \  
-d "code=AUTHORIZATION_CODE"  
-d "redirect_uri=REDIRECT_URI" 
``` 

Caso esteja tudo certo, enviaremos o token como no exemplo abaixo:

```json
{
  "access_token": "ACCESS_TOKEN",
  "expires_in": 300, // tempo em segundos
  "refresh_expires_in": 1800,
  "refresh_token": "REFRESH_TOKEN",
  "token_type": "bearer",
  "id_token": "ID_TOKEN",
  "not-before-policy": 1585954424,
  "session_state": "fa158d89-9228-45c6-8486-e159f28b5bd5",
  "scope": "openid email profile"
}
```

:::info Tempo de expiração de um token

O tempo de expiração do token será exibido em segundos. Após a expiração o token deverá ser atualizado através do `refresh_token`.

A duração dos tokens poderá ser configurada na criação e configuração das credenciais pelo PicPay.

:::

### Atualização dos tokens 

Após um período pre-determinado, o `access_token` concedido à aplicação irá expirar, sendo necessária a solicitação de um novo `access_token`. Para isso, utiliza-se um `refresh_token`, gerado na mesma solicitação do `access_token` (ver Autenticação e Autorização). Abaixo um exemplo de requisição:


```bash
curl -X POST \
https://api.picpay.com/oauth2/token \
-H "Content-Type='application/x-www-form-urlencoded'" \
-d "grant_type=refresh_token" \
-d "client_id=CLIENT_ID" \
-d "client_secret=CLIENT_SECRET" \
-d "refresh_token=REFRESH_TOKEN"
```

:::caution Fluxo de atualização de tokens

O fluxo de atualização de tokens precisa ser obrigatoriamente previsto em sua aplicação dado que o `refresh_token` irá expirar em algum momento. Caso o token não seja atualizado o usuário deverá fazer login e senha novamente.

:::

## Próximos passos

Com um `access_token` válido, seu aplicativo poderá efetuar cobranças, reembolsos ou consultar algumas informações básicas dos usuários. Confira abaixo os próximos passos:

- [Efetuando uma cobrança](/pagamento-logado/guides/process-payments);
- [Solicitando um reembolso](/pagamento-logado/guides/refund-payments);
- [Consultando informações dos usuários](/pagamento-logado/guides/user-info);


## Obtendo ajuda
Esperamos ter ajudado com este artigo! Caso tenha restado alguma dúvida, você pode consultar o nosso FAQ ou entrar em contato através do e-mail relacionamento-empresas@picpay.com. 

 
