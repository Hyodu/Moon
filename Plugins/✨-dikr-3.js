import fetch from 'node-fetch';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    const fkontak2 = {
        key: {
            participants: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            fromMe: false,
            id: 'Halo'
        },
        message: {
            contactMessage: {
                displayName: `${m.pushName}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        participant: '0@s.whatsapp.net'
    };

    if (device !== 'desktop' && device !== 'web') {      
        const ne = await (await fetch('https://raw.githubusercontent.com/Hyodu/Moon/main/database/API/adkar/night.txt')).text();
        const mo = ne.split('\n');
        const moo = await mo[Math.floor(Math.random() * mo.length)];
        if (moo == '') throw 'Error';

        var moon = await prepareWAMessageMedia({ image: { url: moo } }, { upload: conn.waUploadToServer });
        const interactiveMessage = {
            body: { text: '> *🩵*' },
            header: {
                hasMediaAttachment: true,
                imageMessage: moon.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        "name": "quick_reply",
                        "buttonParamsJson": "{\"display_text\":\"الــتــالــي\",\"id\":\".نوم\"}"
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
        }, { userJid: conn.user.jid, quoted: fkontak2 });
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'moon.jpg', m, { quoted: fkontak2 });      
    }    
};
handler.help = ['dikr'];
handler.tags = ['✨'];
handler.command = /^(النوم|نوم|الليل|اذكار-النوم|اذكار-الليل)$/i; 
export default handler;