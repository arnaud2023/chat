// Fonction pour ajouter un message au chat
function addMessage(message) {
  const chatDisplay = document.getElementById('chat-display');
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatDisplay.appendChild(messageElement);
}

// Écouteur d'événement pour le bouton d'envoi
document.getElementById('send-button').addEventListener('click', function() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  if (message) {
    addMessage(message);
    messageInput.value = '';
  }
});