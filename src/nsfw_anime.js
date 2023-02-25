const request = require("./request.js");

// Boobs
async function boobs() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/nsfw/boobs");
   return imageUrl;
};

// Lesbian
async function lesbian() {
   let {url: imageUrl} = await request("https://anime-api.hisoka17.repl.co/img/nsfw/lesbian");
   return imageUrl;
};

// Lewd
async function lewd() {
   let {url: imageUrl} = await request("https://nekos.life/api/v2/img/lewd");
   return imageUrl;
};


// Tits
async function tits() {
   let {url: imageUrl} = await request("https://nekos.life/api/v2/img/tits");
   return imageUrl;
};

// Cum
async function cum() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/cum");
   return imageUrl;
};

// Ugly
async function ugly() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/uglybastard");
   return imageUrl;
};



// Gang bang
async function gangBang() {
   let {url: imageUrl} = await request("https://akaneko-api.herokuapp.com/api/gangbang");
   return imageUrl;
};
// 'my api'

// ass
async function ass() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/ass");
   return imageUrl;
};

// foxgirl
async function foxgirl() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/foxgirl");
   return imageUrl;
};

//doujin
async function doujin() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/doujin");
   return imageUrl;
};

//feet
async function feet() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/feet");
   return imageUrl;
};

//bdsm
async function bdsm() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/bdsm");
   return imageUrl;
};

//femdom
async function femdom() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/femdom");
   return imageUrl;
};

//glasses
async function glasses() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/glasses");
   return imageUrl;
};

//hentai
async function hentai() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/hentai");
   return imageUrl;
};

//netorare
async function netorare() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/netorare");
   return imageUrl;
};

//maid
async function maid() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/maid");
   return imageUrl;
};

//masturbation
async function masturbation() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/masturbation");
   return imageUrl;
};

//orgy
async function orgy() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/orgy");
   return imageUrl;
};

//panties
async function panties() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/panties");
   return imageUrl;
};

//pussy
async function pussy() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/pussy");
   return imageUrl;
};

//school
async function school() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/school");
   return imageUrl;
};

//succubus
async function succubus() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/succubus");
   return imageUrl;
};

//tentacles
async function tentacles() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/tentacles");
   return imageUrl;
};

//thighs
async function thighs() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/thighs");
   return imageUrl;
};

//uniform
async function uniform() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/uniform");
   return imageUrl;
};

//yuri
async function yuri() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/yuri");
   return imageUrl;
};

//waifu
async function waifu() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/waifu");
   return imageUrl;
};

//neko
async function neko() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/neko");
   return imageUrl;
};

//blowjob
async function blowjob() {
   let {url: imageUrl} = await request("https://aku-aku-aku.onrender.com/nsfw/blowjob");
   return imageUrl;
};
module.exports = {
   boobs, hentai, lesbian, ass, thighs, lewd, feet, pussy, 
   tits, bdsm, cum, femdom, maid, orgy, panties, blowjob,
   ugly, uniform, gangBang, glasses, tentacles, masturbation,
   yuri, succubus, school , neko , waifu , netorare 
};