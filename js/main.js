var input = document.getElementById('chat-input');
var messages = document.getElementById('chat-messages');

// Listen for the user to press enter in the input field
input.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    // If the user pressed enter, get the value from the input field
    var value = input.value;

    // Clear the input field
    input.value = '';

    // Add the message to the chatbox
    messages.innerHTML += '<p>' + value + '</p>';
    input.scrollIntoView();
  }
});