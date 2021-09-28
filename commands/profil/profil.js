module.exports = ({
  name: "profil",
  aliases: ['p', 'pf'],
  code: `
  $onlyif[$isBot[$mentioned[1;yes]]!=true;]
  $title[$username[$mentioned[1;yes]]]
  $thumbnail[$userAvatar[$mentioned[1;yes]]]
  $color[GREEN]
  $description[
  $getGlobalUserVar[bio;$mentioned[1;yes]]
  
  **PENJUALAN**
  1 Tahu / $getGlobalUserVar[hasil;mentioned[1;yes]] Coin
  Sekarang terjual $getGlobalUserVar[ambil;mentioned[1;yes]] Tahu
  
  
  __**MOBIL**__
  **Speaker** $getGlobalUserVar[speaker;mentioned[1;yes]]/100
  **Dapur** $getGlobalUserVar[dapur;mentioned[1;yes]]/10
  **Tenda** $getGlobalUserVar[tenda;mentioned[1;yes]]/10
  **Mobil** $getGlobalUserVar[mobil;mentioned[1;yes]]/10
  **Pelang** $getGlobalUserVar[pelang;mentioned[1;yes]]/11
  **Pendingin** $getGlobalUserVar[pendingin;mentioned[1;yes]]/11
  **Tv** $getGlobalUserVar[tv;mentioned[1;yes]]/11
  
  __**RESEP**__
  **Air Jeruk** $getGlobalUserVar[airjeruk;mentioned[1;yes]]/∞
  **Tahu** $getGlobalUserVar[tahu;mentioned[1;yes]]/50
  **Telur** $getGlobalUserVar[telur;mentioned[1;yes]]/50
  
  __**PROMOSI**__
  **Toko Online** $getGlobalUserVar[tokoonline;mentioned[1;yes]]/10
  **Brosur** $getGlobalUserVar[brosur;mentioned[1;yes]]/10
  ]
  
  $footer[request by $username]
  $addTimeStamp
  $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})