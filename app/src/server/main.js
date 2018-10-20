let webSocketServerConfig = {
  host: 'localhost',
  port: '9000'
};

// WebSocket Server
var Server = require('ws').Server;

var server = new Server({ port: webSocketServerConfig.port });

var messages = [];

server.on("connection", function(webSocket) {
  webSocket.on("message", function(message) {
    object = {
      type: "message",
      value: `${new Date()}: ${message}`
    };

    // Store data
    messages.push(object);

    data = JSON.stringify(object);

    console.log(data);

    server.clients.forEach(function(client) {
      client.send(data);
    });
  });

  webSocket.on("close", function() {
    console.log("Client disconnected.");
  });
});
