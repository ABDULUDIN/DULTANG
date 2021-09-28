module.exports = ({
  name: "weekly",
  aliases: ['', ''],
  code: `
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$random[1;400]]]
$color[RANDOM]
$description[Berhasil mengambil $random[1;400] Coin dari Weekly!]
$cooldown[7d;{description:Weekly selanjutnya **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyIf[$getGlobalUserVar[premium]>=1;Maaf commands ini hanya untuk tahu premium]

  
  $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})