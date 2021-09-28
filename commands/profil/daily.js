module.exports = ({
  name: "daily",
  aliases: ['', ''],
  code: `
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$random[1;200]]]
$color[RANDOM]
$description[Berhasil mengambil $random[1;200] Coin dari Daily!]
$cooldown[1d;{description:daily selanjutnya **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]

  
  $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})