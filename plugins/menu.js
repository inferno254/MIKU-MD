const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "🧚‍♀️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =` ╭─────────────━┈⊷
│*👾 ʙᴏᴛ ɴᴀᴍᴇ*: 𝙼𝙸𝙺𝚄 ᴍᴅ
│*👨‍💻 ᴏᴡɴᴇʀ*: ᴍᴀʟᴠɪɴ ᴋɪɴɢ    
│*👤 ɴᴜᴍʙᴇʀ*: 263780934873
│*📟Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│
│*🧬Version*: 1.0.0
│*💻 HOST* :  ${os.hostname()}
│*💫 ᴘʀᴇғɪx:* .
╰─────────────━┈⊷ 

╭━❮ 𝙰𝙸 ❯━╮
┃◆ .𝙰𝚒
╰━━━━━━━━━━━━━━━⪼
╭━◆ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 ◆━╮
┃◆ .𝙼𝚎𝚗𝚞
┃◆ .𝙰𝚕𝚒𝚟𝚎
┃◆ .𝙾𝚠𝚗𝚎𝚛
┃◆ .𝚁𝙴𝚂𝚃𝙰𝚁𝚃
┃◆ .𝙿𝚒𝚗𝚐
┃◆ .𝚅𝚒𝚍𝚎𝚘
┃◆ .𝙿𝙻𝙰𝚈
┃◆ .𝙼𝙸𝙺𝚄
┃◆ .𝙵𝙰𝙲𝚃
┃◆ .𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃◆ .𝙳𝚎𝚖𝚘𝚝𝚎
╰━━━━━━━━━━━━━━━⪼

 © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ
`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
