let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Yuki Sohma bot
*✉️ Nama RL* : Uzui Iyan Chan
*♀️ Gender* : Perempuan
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 01 Juni 1997
*🎨 Umur* : 20+
*🧮 Kelas* : Udh selesai
*🧩 Hobby* : Nonton anime, main game.
*💬 Sifat* : baik hati,pemalu,tidak suka cwok sombong
*🗺️ Tinggal* : Indonesia, Bekasi, jln Bppp 
*❤️ Suka* : warna hitam,warna merah,furry,warna kuning
*💔 Benci* : bts,hentai,ff aku lupa

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @lionsuzunee
*🏮 Chanel Youtube* : IkawaTeam
*🐈 Github:* LionSuzune,IkawaTeam,LyliaSasha,JulianZuikaku

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
