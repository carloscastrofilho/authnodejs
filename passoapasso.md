npm init

npm install typescript @types/node -D

npx tsx --init

acessar repositorio do tsc config no github
https://github.com/tsconfig/bases

selecionar versão de nodejs que esta usando:

trocar o conteudo do tsconfig.json
e incluir 
  "include": ["src"]

  para executar a conversao de ts para js
   npx tsc
   apos a execução teremos o js pronto

para evitar a fadiga vamos usar o tsx

npm install tsx -D

npx tsx src/server.ts

npx tsx watch src/server.ts

frame work a ser utilizado

fastify

npm i fastify



```
import fastify from "fastify";

const app = fastify();

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server rodando na 3333");
})
```


incluindo a rota raiz "/"
```

import fastify from "fastify";

const app = fastify();

app.get("/", () => {
    return 'ola teste fastify'
})

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server rodando na 3333");
})
```