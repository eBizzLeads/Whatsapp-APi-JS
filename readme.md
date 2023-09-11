# Wapify JavaScript API Client 🚀
Easily integrate the power of Wapify's messaging capabilities into your JavaScript applications. This API client offers a seamless method to send text and media messages, as well as manage group functions using Wapify's API.


# Features ✨
Easy Text Messaging - Simplify the process of sending out text messages.
Media Messaging - Distribute messages with media attachments effortlessly.
Group Management - Create and manage user groups with just a few lines of code.
# Requirements 🛠️
Node.js & npm installed on your machine.
Installation & Setup 📌

Ensure to replace placeholders like "Your API Key" and "Your Instance Key" with your actual Wapify credentials in the client code.

Usage Examples 📖
javascript
Copy code
const WapifyClient = require('./WapifyClient');

(async () => {
  let response;

  // Send Text Message
  response = await WapifyClient.sendMessage("91xxxxxxxx", "Your text message", "Your Instance Key", "Your API Key");
  console.log(response);

  // Send Media Message
  response = await WapifyClient.sendMediaMessage("91xxxxxxxx", "Caption for media", "https://link.to/media.jpg", "Your Instance Key", "Your API Key");
  console.log(response);

  // Create a Group
  response = await WapifyClient.createGroup("91xxxxxxxx,91xxxxxxx", "Your Group Name", "Your Instance Key", "Your API Key");
  console.log(response);
})();