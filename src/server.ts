import fastify from "fastify";

const app = fastify();

app.get("/", () => {
    return 'ola teste fastify'
})

app.get("/teste", () => {
    return 'ola teste '
})

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server rodando na 3333");
})