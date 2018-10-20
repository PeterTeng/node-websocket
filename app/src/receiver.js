WEB_SOCKET_HOST = 'localhost';
WEB_SOCKET_PORT = '9000';
WEB_SOCKET_URL  = `ws://${WEB_SOCKET_HOST}:${WEB_SOCKET_PORT}`;

$(document).ready(function() {
  var webSocket = new WebSocket(WEB_SOCKET_URL);

  webSocket.addEventListener("open", function(event) {
    window.notify_bar("Connected to Socket Server.");
  });

  // Actions in DOM
  webSocket.addEventListener("message", function(event) {
    data = JSON.parse(event.data);
    if (data.type === "message") {
      console.log('Message from server ', data.value);
    }
    $(".messages").append(`<p>${data.value}</p>`);

    // Play sound
    // var audio = new Audio('sounds/bell.mp3');
    // audio.play();
  });
});
