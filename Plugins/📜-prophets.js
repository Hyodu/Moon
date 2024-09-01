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
        var moon = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/966a90fa69a6d83525120.png' }}, { upload: conn.waUploadToServer });
        
        const interactiveMessage = {
            body: { text: `*اختر قصة النبي المرادة عن طريق الزر اسفله :*`.trim() },
            footer: { text: ``.trim() },  
            header: {
                title: `> *تِلْكَ الرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلَى بَعْضٍ*`,
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
                    title: '↓ اب البشر و أول الخلق ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه آدم عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة آدم عليه السلام' 
                      },
                    ]
                  },
                    {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه شــيــت عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة شيت عليه السلام' 
                      },
                    ]
                  }, 
               {
                    title: '↓  أول من خط بالقلم ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه إدريــس عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة إدريس عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓ شـيـخ الـمـرسـلـيـن ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه نــوح عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة نوح عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓ الــعــابــر ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه هــود عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة هود عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓ مــعــجــزة الـنـاقـة ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه صــالــح عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة صالح عليه السلام' 
                      }
                    ]
                  }, 
                  {
                    title: '↓ اب الأنـبـيـاء وخـلـيـل الـلـه ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه ابــراهــيــم عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة ابراهيم عليه السلام' 
                      },
                    ]
                  }, 
                  {
                    title: '↓ الـذبـيـح ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه اسـمـاعـيـل عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة اسماعيل عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓ تـحـريـم الـلـواط ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه لــوط عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة لوط عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓ الــكــنــعــانــي ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه اسـحـاق عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة اسحاق عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓ اســرائــيــل ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه يـعـقـوب عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة يعقوب عليه السلام' 
                      },
                    ]
                  },
                                 {
                    title: '↓ الــصــديــق ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه يــوســف عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة يوسف عليه السلام' 
                      },
                    ]
                  }, 
                  {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه شــعــيــب عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة شعيب عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓ كـلـيـم الـلـه ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه مــوســى عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة موسى عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه هـارون عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة هارون عليه السلام' 
                      },
                    ]
                  },
                                 {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه داود عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة داود عليه السلام' 
                      },
                    ]
                  }, 
                  {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه سـلـيـمـان عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة سليمان عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه إلـيـاس عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة الياس عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه الــيــســع عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة اليسع عليه السلام' 
                      },
                    ]
                  },
                                 {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه يــونــس عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة يونس عليه السلام' 
                      },
                    ]
                  }, 
                  {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه زكـريـا عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة زكريا عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه يـحـيـى عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة يحيى عليه السلام' 
                      },
                    ]
                  },
                  {
                    title: '↓  ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - نـبـي الـلـه عـيـسـى عـلـيـه الـسـلام',
                        title: '',
                        description: '',
                        id: '#يوت قصة عيسى عليه السلام' 
                      },
                    ]
                  },
                                 {
                    title: '↓ خــاتــم الأنـبـيـاء ↓',
                    highlight_label: '',
                    rows: [
                      {
                        header: '⌗ - رسـول الـلـه مـحـمـد ﷺ',
                        title: '',
                        description: '',
                        id: '#يوت قصة محمد عليه السلام' 
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
        }, { userJid: conn.user.jid, quoted: fkontak2 });
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'moon.jpg', m, { quoted: fkontak2 });      
    }    
};

handler.help = ['prophets'];
handler.tags = ['📜'];
handler.command = /^(انبياء)$/i;

export default handler;