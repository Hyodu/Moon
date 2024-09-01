import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' && device !== 'web') {
        var moon = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/739ae068aea122b14a106.png' }}, { upload: conn.waUploadToServer });
        
        const interactiveMessage = {
            body: { text: `*السلام عليكم ورحمة الله وبركاته،  @${mentionId.split('@')[0]} انا قمر بوت ديني خاص، للتعرف على المزيد اضغط اسفله :*`.trim() },
            footer: { text: `> *Powered by Saad - 英雄*`.trim() },  
            header: {
                title: `> *مَا يَلْفِظُ مِنْ قَوْلٍ إِلا لَدَيْهِ رَقِيبٌ عَتِيدٌ*`,
                subtitle: `\n\n`,
                hasMediaAttachment: true,
                imageMessage: moon.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                               name: 'single_select',
              buttonParamsJson: JSON.stringify({
                title: 'الـقـائـمـة',
                sections: [
                  {
                    title: '↓ الاوامـــر ↓',
                    highlight_label: '🌙',
                    rows: [
                      {
                        header: '⌗ - اوامــر ديــنــيــة',
                        title: '',
                        description: '',
                        id: '#a' 
                      },
                    ]
                  },
               {
                    title: '↓ الـقـسـم الأول ↓',
                    highlight_label: '📜',
                    rows: [
                      {
                        header: '⌗ - قــســم الـمـحـتـوى',
                        title: '',
                        description: '',
                        id: '#b' 
                      },
                        {
                    title: '↓ الـقـسـم الـثـانـي ↓',
                    highlight_label: '📜',
                    rows: [
                      {
                        header: '⌗ - قــســم الـتـعـلـيـمـات',
                        title: '',
                        description: '',
                        id: '#c' 
                      },
                    ]
                  }
                    ]
                }),
                messageParamsJson: ''
            },
              {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"　ِ ҉  𝖦𝗂𝗍𝗁𝗎𝖻","url":"https://github.com/Hyodu/Moon","merchant_url":"https://www.google.com"}'
            }
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

handler.help = ['main'];
handler.tags = ['🌙'];
handler.command = /^(اوامر|أوامر|الاوامر|هيلب|الأوامر|مينيو|allmenu|cmd|قمر)$/i;

export default handler;
