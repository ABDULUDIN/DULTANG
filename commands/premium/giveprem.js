module.exports = ({
  name: "givepremium",
  aliases: ['gpremium', 'gp'],
  code: `$onlyif[$isBot[$mentioned[1;yes]]!=true;]
  Memberikan Tahu Premium Ke <@$mentioned[1]>
  $setGlobalUserVar[premium;$message[1];$findMember[$messageSlice[1]]]

  $onlyForIDs[727040496446341140;648790431064391710;]
  $onlyif[$getGlobalUserVar[start]>=1;ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})