module.exports = ({
  name: "start",
  code: `
  $addCmdReactions[✅]
  $description[$username, Berhasil Memulai Permainan Silakan ketik \`$getServerVar[prefix]help\` untuk melihat semua list command ]
  $setGlobalUserVar[start;1]
  $onlyif[$getGlobalUserVar[start]<=0;]
`
})