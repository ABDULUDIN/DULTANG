module.exports = ({
  name: "ambil",
  aliases: ['a', 'abl'],
  code: `
  $title[Hasil Penjualan Tahu]
  $color[GREEN]
  $description[Kamu Menghasilkan $numberSeparator[$math[$getGlobalUserVar[ambil]*$getGlobalUserVar[hasil]];,] Coin dari penjualan tahu]
  $setGlobalUserVar[ambilcontoh1;$getGlobalUserVar[ambilcontoh]]
  $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$math[$getGlobalUserVar[ambil]*$getGlobalUserVar[hasil]]]]
  $setGlobalUserVar[ambil;0]
  $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})