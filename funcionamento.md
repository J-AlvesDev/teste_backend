metodos HTTP:

- GET = listar
- POST = criar
- PUT = atualizar
- DELETE = apagar

estatus http:

alguns exemplos para status do http são:

2xx = sucesso
3xx = redirecionamento
4xx = erro no cliente
5xx erro no servidor

REQUEST E RESPONSE:

request(requisição) é o front-end pedindo algo para o back-end

response(resposta) é a resposta do back-end para o front-end

por exemplo, acessar um site que precisa de email e senha. Ao digitar o email e senha no campo de login (front-end) o ffront-end vai requisitar o acesso para o back-end. O back-end vai comparar o email e senha informados com o qque ele tem no baanco de dados. caso ambos estejam corretos, o back-endd retornará (resposta) uma permissão de acesso.

thunder client:

para testar a funcionalidade o back-end sem ter criado um front, poddemos usar a extensão do thinder client. Ele simula o consumo de sua api como se fosse o cliente, o que é ótimo para testar o código

explicando cada parte do código:

app.post("/usuarios", (request, response) => {
console.log(request);

response.status().send("tudo ok");
});

app.post... cria uma rota para a criação de novos usuários

response.status().send("...") é a resposta do servidor, dependendo da funncionalidade do código
