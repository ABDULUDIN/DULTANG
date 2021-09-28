module.exports = ({
  name: "deposit",
  aliases: ['dep', 'd'],
  code: `
  $username, Kamu memasukan $numberSeparator[$message;,] Coin ke bank
  $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$message]]
  $setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$message]]
  $onlyIf[$isNumber[$message[1]]==true;Harap masukan jumlah uang!]
 $onlyIf[$message<=$getGlobalUserVar[coin];Coin kamu tidak cukup untuk memasukannya ke bank]
 $argsCheck[>1;Contoh: \`$getServerVar[prefix]dep 100\`]
 $onlyIf[$getGlobalUserVar[coin]>1;Kamu tidak memiliki coin sama sekali]
 $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})