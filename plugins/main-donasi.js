let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ 📍 *BNK MAYBANK*
├No: 008074679622
├
├ 📍 *Touch nGO* 
├ No: 1151905021
├
├ 📍 *SHOPE PAY*
├  No: +601151905021
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih =D

Contact person Owner:
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Thanks', 'thanks', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
