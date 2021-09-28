
module.exports = ({
 name: "pay",
 aliases: ['give'],
 code: `**$username** memberikan **$noMentionMessage Coin** ke **$username[$mentioned[1]]**!
 $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];$noMentionMessage];$authorID]
$onlyIf[$noMentionMessage<=$getGlobalUserVar[coin;$authorID];{description:Kamu tidak memiliki cukup coin!}{color:ff0000}]
$onlyIf[$mentioned[1]!=$authorID;{description: Kamu tidak bisa memberikan coin kepada diri sendiri}{color:ff0000}]
$onlyIf[$mentioned[1]!=;{description::E_afalse: Mention seseorang dan sebutkan jumlah coin, Contoh**: \`$getServerVar[prefix]give <@user> <amount>\`}{color:ff0000}]
$onlyIf[$isBot[$mentioned[1]]!=true;]
$onlyIf[$getGlobalUsetVar[start]>=1;Ketik \`$getServerVar[prefix]start\` untuk memulai permainan
$onlyIf[$isNumber[$noMentionMessage]==true;{description: Contoh: \`$getServerVar[prefix]give <@user> <amount>\`}{color:ff0000}]
$suppressErrors[{description:Contoh: $getServerVar[prefix]give <@user> <amount>}{color:ff0000}]`
})