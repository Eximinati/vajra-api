const fetch = require("node-fetch");

async function request(url) {
   try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
   } catch (error) {
      console.error(error);
      return null;
   }
}

module.exports = request