const axios = require('axios');

const WapifyClient = {
  apiURL: 'https://app.wapify.net/api/',

  sendMessage: async function (number, msg, instance, apiKey) {
    try {
      const response = await axios.post(`${this.apiURL}text-message.php`, {
        number,
        msg,
        instance,
        apiKey
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  sendMediaMessage: async function (number, msg, media, instance, apiKey) {
    try {
      const response = await axios.post(`${this.apiURL}media-message.php`, {
        number,
        msg,
        media,
        instance,
        apiKey
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  createGroup: async function (member, groupName, instance, apiKey) {
    try {
      const response = await axios.post(`${this.apiURL}create-group.php`, {
        member,
        groupName,
        instance,
        apiKey
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};

module.exports = WapifyClient;
