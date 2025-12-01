import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
console.log("WebSocket rodando em ws://localhost:8080");

wss.on("connection", (ws) => {
  console.log("Novo cliente conectado");

  ws.on("message", (message) => {
    console.log("Recebido:", message.toString());
    // envia a mensagem de volta para todos os clientes
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("Cliente desconectou");
  });
});
