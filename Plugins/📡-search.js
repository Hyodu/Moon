import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'
import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    if (!text) throw "> `المرجوا استعمال الأمر كالتالي` :\n\n- #يوت halal beats sound\n- #يوت سورة الكوثر";

    if (device !== 'desktop' || device !== 'web') {      
        const results = await yts(text);
        const videos = results.videos.slice(0, 20);
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideo = videos[randomIndex];

        var messa = await prepareWAMessageMedia({ image: {url: randomVideo.thumbnail}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `- العنوان : *${randomVideo.title}*\n- عدد النتائج : *${results.videos.length}*`.trim() },
            footer: { text: `> *Powered by Saad - 英雄*`.trim() }, 
            header: {
                title: ``,
                hasMediaAttachment: true,
                imageMessage: messa.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'اضغط هنا',
                            sections: videos.map((video) => ({
                                title: video.title,
                                rows: [
                                  {
                                     header: video.title,
                                     title: video.author.name,
                                     description: 'تحميل صوتية',
                                 id: `.يوت.1 ${video.url}`
                },
                                    {
                                        header: video.title,
                                        title: video.author.name,
                                        description: 'تحميل فيديو',
                                        id: `.يوت.2 ${video.url}`
                                    }
                                ]
                            }))
                        })
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
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

    } else {
        const results = await yts(text);
        const tes = results.all;
        const teks = results.all.map((v) => {
            switch (v.type) {
                case 'video': return `
                ° *_${v.title}_*
                ↳ 🫐 *_${v.url}_*
                ↳ 🕒 *_${v.timestamp}_*
                ↳ 📥 *_${v.ago}_*
                ↳ 👁 *_${v.views}_*`;
            }
        }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
        conn.sendFile(m.chat, tes[0].thumbnail, 'error.jpg', teks.trim(), m);      
    }    
};
handler.help = ['ytsearch <نص>'];
handler.tags = ['search'];
handler.command = /^(يوت)$/i;
export default handler; 