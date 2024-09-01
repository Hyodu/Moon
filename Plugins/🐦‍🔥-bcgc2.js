const handler = async (m, {conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
  const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid);
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map((v) => v[0]);
  const fproducto = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? {remoteJid: '17608914335@s.whatsapp.net'} : {})}, message: {'productMessage': {'product': {'productImage': {'mimetype': 'image/jpeg', 'jpegThumbnail': imagen1}, 'title': `From owner`, 'description': '', 'currencyCode': 'USD', 'priceAmount1000': '0', 'retailerId': 'Ghost', 'productImageCount': 1}, 'businessOwnerJid': `0@s.whatsapp.net`}}};
  if (!m.quoted) throw `> سوي رد على شي ما عشان اعلنه للناس.`;
  for (const id of groups) {
    await conn.sendMessage(id, {forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map((v) => v.id)}, {quoted: fproducto});
  }
  m.reply(`> *تم الإرسال إلى ${groups.length} مجموعة*`);
};
handler.help = ['tag_gc'];
handler.tags = ['🐦‍🔥'];
handler.command = /^(برودكاست2)$/i;
handler.owner = true;
export default handler;
