import fs from 'fs'

let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)

    if (!text) {
        let groupedFiles = ar.reduce((acc, file, index) => {
            let fileNameWithoutExt = file.replace('.js', '')
            let firstChar = [...fileNameWithoutExt][0]
            if (!acc[firstChar]) {
                acc[firstChar] = []
            }
            acc[firstChar].push({ index: index + 1, name: fileNameWithoutExt })
            return acc
        }, {})

        let msg = `\n`
        for (let char in groupedFiles) {
            msg += `\`قائمة حرف الـ\` "${char}"\n${groupedFiles[char].map(v => `${v.index}. ${v.name}`).join('\n')}\n\n`
        }

        return m.reply(msg)
    }

    let num = parseInt(text.trim())
    if (isNaN(num) || num < 1 || num > ar.length) return m.reply(`╰♡╯ اختار رقم من القائمة ╭♡╮:\n\n${ar.map((v, i) => `${i + 1}. ${v.replace('.js', '')}`).join('\n')}`)

    let selectedFile = ar[num - 1]
    let filePath = './plugins/' + selectedFile
    let fileContent = fs.readFileSync(filePath, 'utf-8')
    return conn.sendMessage(m.chat, {text: fileContent}, {quoted: m})
}

handler.help = ['ملف'].map(v => v + ' <رقم>')
handler.tags = ['host']
handler.command = /^(getplugin|gp|ملف)$/i

handler.rowner = true

export default handler