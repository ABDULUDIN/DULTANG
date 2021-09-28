module.exports = ({
  name: "upgrade",
  aliases: ['', ''],
  code: `
  $if[$message==]
  $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  $title[UPGRADE]
  $color[GREEN]
  $description[
  
  __**MOBIL**__
  Nama : **Speaker $getGlobalUserVar[speaker]/100**
  Harga : **$getGlobalUserVar[speaker1]**
  Harga Tahu : **2×**
  Penggunaan : \`$getServerVar[prefix]upgrade speaker\`
  
  ]
  $footer[request by $username]
  $addtimestamp
  
  $elseIf[$tolowercase[$message]==speaker]
  $title[UPGRADE]
  $color[BLUE]
  $description[$username, Speaker telah di upgrade $sub[$getGlobalUserVar[speaker];1]➡$getGlobalUserVar[speaker]]
  $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$getGlobalUserVar[speaker1]]]
  $setGlobalUserVar[speaker1;$math[$getGlobalUserVar[speaker1]*2]]
  $setGlobalUserVar[speaker;$sum[$getGlobalUserVar[speaker];1]]
  $setGlobalUserVar[hasil;$sum[$getGlobalUserVar[hasil];1]]
  $onlyif[$getGlobalUserVar[speaker]<=99;Speaker kamu telah level MAX]
  $onlyif[$getGlobalUserVar[coin]>=$getGlobalUserVar[speaker1];Coin kamu tidak cukup untuk upgrade]
  $endelseIf
  
  $else
  $endif
  `
})