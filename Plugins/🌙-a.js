import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' && device !== 'web') {
        var moon = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/739ae068aea122b14a106.png' }}, { upload: conn.waUploadToServer });
        
        const interactiveMessage = {
            body: { text: `- *مواقيت*\n> يعطيك مواقيت الصلاة في كل بلد\n- *#قرآن*\n> يجيب لك البوت مقطع قرآن\n- *#دعاء*\n> يجيب لك البوت دعاء حلو\n- *#حديث*\n> يجيب لك البوت حديث\n- *#ذكر*\n> يجيب لك قائمة الاذكار\n- *#ايه*\n> يجيب لك اية صوتية من سورة ما\n- *#اسم <عدد>*\n> يجيب لك شرح اسماء الله الحسنى`.trim() },
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

handler.help = ['commands'];
handler.tags = ['🌙'];
handler.command = /^(a)$/i;

export default handler; 