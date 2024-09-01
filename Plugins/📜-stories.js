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
        var moon = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/0140ee14bca7d280917ab.png' }}, { upload: conn.waUploadToServer });
        
        const interactiveMessage = {
            body: { text: `*مرحبا بك في قسم القصص الدينية اختر قسم القصص عن طريق الزر اسفله :*`.trim() },
            footer: { text: ``.trim() },  
            header: {
                title: `> *نَحۡنُ نَقُصُّ عَلَيۡكَ أَحۡسَنَ ٱلۡقَصَصِ*`,
                subtitle: `\n\n`,
                hasMediaAttachment: true,
                imageMessage: moon.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
            {
            name: 'single_select',
              buttonParamsJson: JSON.stringify({
                title: 'الــقــصــص',
                sections: [
                  {
                    title: '↓ الــقــصــص ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - قــصــص الأنــبــيــاء',
                        title: '',
                        description: '',
                        id: '#انبياء' 
                      },
                      {
                        header: '⌗ - قــــصـــص الأقــوام',
                        title: '',
                        description: '',
                        id: '#يوت قصص الاقوام السابقة - اسلام'
                      }
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
        }, { userJid: conn.user.jid, quoted: fkontak2 });
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'moon.jpg', m, { quoted: fkontak2 });      
    }    
}; 
handler.help = ['stories'];
handler.tags = ['📜'];
handler.command = /^(قصص)$/i;

export default handler;