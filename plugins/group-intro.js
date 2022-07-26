let handler = async (m, { conn }) => {


let krtu = `0۪۪ѕιℓαкαη ιηтяσ, вιαя кєηαℓαη ∂σηg >_<

ηαмα:
υмυя:
кєℓαѕ:
αѕкσт:
αℓαѕαη кє ѕιηι кєηαρα:

тєяιмα кαѕιн ѕυ∂αн ιηтяσ :>
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
