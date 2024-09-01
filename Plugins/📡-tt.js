
import axios from 'axios';
const { proto, generateWAMessageFromContent, generateWAMessageContent } = (await import("@whiskeysockets/baileys")).default;

let handler = async (message, { conn, text }) => {
    if (!text) return conn.sendMessage(message.chat, { text: '> *الأمر ليس للاستخدام العادي 🌙*' }, { quoted: message });

    try {
        let response = await tiktokSearch(text);
        if (!response.status) throw new Error(response.resultado);
        let searchResults = response.resultado;
        shuffleArray(searchResults);
        let selectedResults = searchResults.slice(0, 7);
        let videoMessages = await Promise.all(selectedResults.map(result => createVideoMessage(result.videoUrl, conn)));
        let results = videoMessages.map((videoMessage, index) => ({
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: '' }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: `*By : ${global.wm}*` }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: selectedResults[index], hasMediaAttachment: true, videoMessage: videoMessage
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
        }));
        const responseMessage = generateWAMessageFromContent(message.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({ text: `> *🌙 : ${text}*` }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: '' }),
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: results })
                    })
                }
            }
        }, { quoted: message });
        await conn.relayMessage(message.chat, responseMessage.message, { messageId: responseMessage.key.id });
    } catch (error) {
        await conn.sendMessage(message.chat, { text: error.toString() }, { quoted: message });
    }
};
handler.help = ['tiktoksearch'];
handler.tags = ['📡'];
handler.command = /^(تت)$/i;
export default handler;

async function tiktokSearch(query) {
    try {
        const response = await axios.post("https://tikwm.com/api/feed/search", new URLSearchParams({keywords: query, count: '10', cursor: '0', HD: '1'}), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Cookie: "current_language=en",
                "User-Agent": "Mozilla/5.0 (Linux Android 10 K) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            }
        });
        const videos = response.data.data.videos;
        if (videos.length === 0) return {status: false, resultado: ""};
        return {
            status: true,
            resultado: videos.map(v => ({
                description: v.title ? v?.title : "",
                videoUrl: v.play ? v.play : ""
            }))
        };
    } catch (error) {
        return { status: false, resultado: error.message };
    }
}

async function createVideoMessage(url, conn) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = response.data;
        const { videoMessage } = await generateWAMessageContent({ video: buffer }, { upload: conn.waUploadToServer });
        return videoMessage;
    } catch (error) {
        throw new Error(`> *حدث خطأ المرجوا الابلاغ* : ${error.message}`);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}