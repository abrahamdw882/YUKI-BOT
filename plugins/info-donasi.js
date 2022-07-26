import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*──「DONASI YUKI」──*
☞  DANA : 085795586847
☞  PULSA : 085795586847
☞  PULSA2 : 0887433094409
☞  GOPAY : 0887433094409

ARIGATOU SUDAH DONASI YUKI BOT
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/LionSuzune/', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
