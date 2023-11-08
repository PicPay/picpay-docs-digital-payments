# Backup Studio

Aqui se encontra o _dump_ do [Picpay Studio](https://studio.picpay.com).

Devido a forma como foi construído, algumas estruturas não são definidas quando abre-se diretamente o arquivo `index.html`. Por isso, um _script_ Python foi criado, de forma a permitir visualizar a página no endereço http://localhost:8000. Para tal, siga as instruções:

1. Certifique-se de que o runtime Python 3 está instalado em seu computador, ou efetue a instalação do mesmo, seguindo as instruções do [site oficial](https://www.python.org/downloads/).
2. Com o Python instalado, abra um Prompt de comando no Windows, ou uma janela de terminal no Linux ou macOS.
3. Acesse esse diretório
4. Execute o comando: `python3 server.py`
5. O seguinte texto será impresso em tela

```shell
$> python3 server.py
serving at http://localhost:8000
```

6. Acesse o endereço indicado no seu navegador: http://localhost:8000
