module.exports = {
   anime: require("./src/anime.js"),
   nsfw: {
      anime: require("./src/nsfw_anime.js"),
      // real: require("./src/nsfw_real.js")
   }
};

require("vajra-api");