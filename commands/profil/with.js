module.exports = ({
  name: 'with',
  aliases: ['w'],
  code: `
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$message]]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message]]
$username, kamu mengambil $numberSeparator[$message] Coin dari bank!
$onlyIf[$isNumber[$message[1]]==true;Jumlah berupa nomor!]
$onlyIf[$message<=$getGlobalUserVar[bank;$authorID];Kamu tidak bisa mengambil lebih dari jumlah coin di bank!]
$argsCheck[>1;Sebutkan jumlah coin untuk di tarik dari bank?]
$onlyIf[$getGlobalUserVar[bank;$authorID]>0;Kamu tidak memiliki coin di bank!]
$onlyif[$getGlobalUserVar[start]>=1;Ketik \`$getServerVar[prefix]start\` untuk memulai permainan]`
})