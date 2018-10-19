$(document).ready(function() {
  var webSocket = new WebSocket('ws://localhost:9000');

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
