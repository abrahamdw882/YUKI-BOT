import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ʏᴜᴋɪ ʙᴏᴛ ᴍᴅ 』*', `ʜᴀɪ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ ʏᴜᴋɪ ʙᴏᴛ ᴍᴅ,ᴀᴋᴜ ᴅɪ ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴏʟᴇʜ ꜱᴇꜱᴇᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ ᴜᴢᴜɪ ᴄʜᴀɴ,ʙᴇʟɪᴀᴜ ᴍᴀꜱɪʜ ᴘᴇᴍᴜʟᴀ ᴅᴀɴ ᴍᴀꜱɪʜ ʙᴇʟᴀᴊᴀʀ ʙᴀɴʏᴀᴋ ʜᴀʟ,ᴅᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ ʜᴀɴʏᴀ ɪɴɢɪɴ ᴛᴀᴜ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴅɪ ᴅᴜɴɪᴀ ʙᴏᴛ,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://chat.whatsapp.com/BpuUbEx8niML0pmEqkbp8L', 'ɢʀᴜᴘ ʏᴜᴋɪ ʙᴏᴛ', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nʜᴀɪ ʏᴜᴋɪ ʙᴏᴛ`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler