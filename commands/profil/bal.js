module.exports = ({
  name: "balance",
  aliases: ['bal', 'b'],
  code: `
  $onlyIf[$isBot[$mentioned[1;yes]]!=true;]
  $thumbnail[$userAvatar[$mentioned[1;yes]]]
  $color[GREEN]
  $title[$username[$mentioned[1;yes]]]
  $description[
  
 💰 Coin
 **$numberSeparator[$getGlobalUserVar[coin;$mentioned[1;yes]];,]**
 
 💳 Bank
 **$numberSeparator[$getGlobalUserVar[bank;$mentioned[1;yes]];,]**]
 $footer[request by $username]
 $addtimestamp
 $onlyif[$getGlobalUserVar[start]>=1;Ketik \`$getServerVar[prefix]start\` untuk memulai permainan]
  `
})