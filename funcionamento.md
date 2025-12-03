no package.json, adicionar "type": "module" (nova forma e criar backend com express )

no terminal, wscreva:
node --watch server.js
isso fará o servidor rodar novamente após cada vez que você salvar o código, sem necessidade de parar e rodar manualmente

metodos HTTP:

- GET = listar
- POST = criar
- PUT = atualizar
- DELETE = apagar

status http:

alguns exemplos para status do http são:

2xx = sucesso
3xx = redirecionamento
4xx = erro no cliente
5xx erro no servidor

REQUEST E RESPONSE:

request(requisição) é o front-end pedindo algo para o back-end

query params (get):
consultas de "variaveis" no navegador
um ponto de interrogação (?) é adicionado após a rota, com as variáveis sendo procuradas, tendo um "&" para adicionar mais um tipo de variável na pesquisa, por exemplo:
servidor.com/usuaios?estado=saopaulo&cidade+saopaulo
aqui, nós estamos filtrando/procurando por usuários do estado de São Paulo e da cidade de São Paulo

route params (get/put/delete):
consultar,editar ou apagar uma informação especifica
após a rota, adicionamos uma barra "/" e colocamos a informação especifica procurada, por exemplo:
servidor.com/usuaios/5
aqui estamos filtrando/procurando pelo usuario especifico de ID=5

body params (post/put/patch)
dados enviados no corpo de uma requisição HTTP
eles não são visíveis na URL e geralmente contêm dados complexos, por exemplo, nome de usuário e senha para um login, como um objeto JSON, para enviar informações de um recurso para o servidor.
{"nome": "Fulano", "email": "fulanodasilva@exemplo.com"}
esses dados são sensíveis para aparecer em uma URL, por isso usamos o body

response(resposta) é a resposta do back-end para o front-end

por exemplo, acessar um site que precisa de email e senha. Ao digitar o email e senha no campo de login (front-end) o front-end vai requisitar o acesso para o back-end. O back-end vai comparar o email e senha informados com o que ele tem no banco de dados. caso ambos estejam corretos, o back-end retornará (resposta) uma permissão de acesso.

thunder client:

para testar a funcionalidade o back-end sem ter criado um front, poddemos usar a extensão do thinder client. Ele simula o consumo de sua api como se fosse o cliente, o que é ótimo para testar o código

explicando cada parte do código:

const app = express();
salvando o express() na variável app, para facilitar o código

app.use(express.json());
configurar o express para ler arquivos json, já que por padrão ele não utiliza esse formato

app.post("/usuarios", (request, response) => {
console.log(request);
response.status().send("tudo ok");
});

app.post... cria uma rota para a criação de novos usuários

response.status().send("...") é a resposta do servidor, dependendo da funncionalidade do código

(o mesmo vale para os outros metodos)

criando API de usuarios:

-criar usuarios

vamos utilizar o body params:
no thunder client (método post), vamos sair da query e ir para o body.
no body, criamos nossa lista no formato json

exemplo:

{
"nome": "fulano",
"idade": 50,
"email": "fulanodasilva@exemplo.com"
}

após criado, clique em send para o server
se tudo deu certo, aas informações estarão no terminal
(para facilitar a visualização das informações, vamos colocar um console.log(request.body) dentro do app.post("/usuarios", (request, response) => {}), mas isso não é necessário no código final)
agora vamos passar as informações para nossa lista de usuarios
usuarios.push(request.body); (no lugar do console.log(request.body) )
criamos um response.status(201) para confirmar que o usuario foi criado sem problemas

-listar usuarios

para listar o nosso usuario, no metodo get, fazemos um response.status(200).json(usuarios) -> status(200) é para mostrar o status de que deu tudo certo no http
agora, se você ir em send, na rota get do thunder client, aparecerá a lista dos usuarios criados

agora que sabemos que essa parte funciona, vamos criar um banco de daos para salvar as informações dos usuarios de forma segura.


primeiro, crie uma conta no MONGODB caso não tenha uma.


-editar usuarios
-deletar usuarios
