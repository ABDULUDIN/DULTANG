module.exports = ({
  name: "setbio",
  aliases: ['', ''],
  code: `
  $title[Mengubah Bio Menjadi]
  $color[RANDOM]
  $description[
  \`\`\`$message\`\`\`
  ]
  $setGlobalUserVar[bio;$message]
  $onlyif[$getGlobalUserVar[premium]>=1;Maaf, Commands Ini Hanya Untuk Tahu Premium]
  $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})