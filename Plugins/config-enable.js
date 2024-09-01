var handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

let isEnable = /تفعيل|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'ترحيب':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'الحذف':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break 
case 'مضاد-الحذف':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `> *قم بتفعيل او تعطيل هذه الخيارات :*
- الترحيب
- مضاد-الحذف
- الحذف`, m, fake, )
throw false
}
conn.reply(m.chat, `*${isEnable ? '❕' : '❗'} الميزة ${type} - ${isEnable ? 'مفعلة' : 'معطلة'} en ${isAll ? 'للبوت' : isUser ? '' : 'للشات.'}*`, m, fake, )

}
handler.help = ['en', 'dis'].map(v => v + 'able')
handler.tags = ['nable', 'owner']
handler.command = /^((تفع|تعط)يل|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler