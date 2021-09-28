module.exports = ({
  name: "hourly",
  aliases: ['', ''],
  code: `
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$random[1;100]]]
$color[RANDOM]
$description[Berhasil mengambil $random[1;100] Coin dari Hourly!]
$cooldown[1h;{description:hourly selanjutnya **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyIf[$getGlobalUserVar[premium]>=1;Maaf commands ini hanya untuk tahu premium]

  
  $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})