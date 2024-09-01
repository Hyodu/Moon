import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' && device !== 'web') {
        var moon = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/ec125c30c5385f21a3c71.png' }}, { upload: conn.waUploadToServer });
        
        const interactiveMessage = {
            body: { text: ``.trim() },
            footer: { text: `> *{ وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ }*`.trim() },  
            header: {
                title: ``,
                subtitle: `\n\n`,
                hasMediaAttachment: true,
                imageMessage: moon.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                     {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: '☀️ الــصــبــاح ☀️',
                            id: `.صباح`
                        })
                    },
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: '🌤️ الــمــســاء 🌤️',
                            id: `.مساء`
                        })
                    },
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({
                            display_text: '🌙 الــنــوم 🌙',
                            id: `.نوم`
                        })
                    },
          ],
        messageParamsJson: ''
            }
        };

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });
        
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'Moon.jpg', m);
    }
};

handler.help = ['dikr'];
handler.tags = ['✨'];
handler.command = /^(ذكر|دكر|اذكار|ادكار)$/i;

export default handler;