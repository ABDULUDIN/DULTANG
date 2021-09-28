const Aoijs = require("aoi.js")
const app = require("./app.js")
const bot = new Aoijs.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  token: process.env.TOKEN, //Discord Bot Token in env
  prefix: ["$getServerVar[prefix]"], //Change PREFIX to your Prefix
  autoUpdate: true, // set to true if version should be updated automatically after a package update
})
//rich preserence
bot.status({
  text: "$allmembersCount Member | $serverCount Server",
  type: "PLAYING",
  status: "idle",
  time: 12
})
bot.status({
  text: "0.1 | T!Help",
  type: "PLAYING",
  status: "idle",
  time: 12
})

bot.command({
name: "$alwaysExecute", 
code: `
  $math[$getGlobalUserVar[ambil]+1]
  $setGlobalUserVar[ambil;$sum[$getGlobalUserVar[ambil];1]
  $onlyif[$getGlobalUserVar[start]>=1;]
  $onlyif[$getGlobalUserVar[ambil]<=$getGlobalUserVar[coinmax];]
  
  `
})

bot.variables({
  prefix: "/",
  user: "1",
  start: "0",
  coin: "50", //500
  coinmax: "500",
  bank: "0",
  premium: "0",
  bio: "Tahu Bulat... Tahu Bulat...",
  ambil: "1",
  penjualan: "2",
  ambilcontoh: "1",
  ambilcontoh1: "1",
  ambilmax: "500",
  hasil: "1",
  speaker: "1", //max 100
  speaker1: "50",
  dapur: "1", //max 10
  dapur1: "60",
  tenda: "1", //max 10
  tenda1: "80",
  mobil: "1", //max 10
  mobil1: "90",
  pelang: "1", //max 11
  pelang1: "40",
  pendingin: "1", //max 11
  pendingin1: "70",
  tv: "1", //max 11
  tv1: "85",
  airjeruk: "1", //tanpa batas
  airjeruk1: "30",
  tahu: "1", //max 50
  tahu1: "25",
  telur: "1", //max 50
  telur1: "35",
  tokoonline: "1", //max 10
  tokoonline1: "200",
  brosur: "1", //max 10
  brosur1: "150",
  

})
bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder
