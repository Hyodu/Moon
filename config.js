import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
import path, { join } from 'path'
import { getRandomImageBoys } from 'module-gatadios'
import { fileURLToPath, pathToFileURL } from 'url'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

global.owner = [
['888888', 'Saad', true], // put your number inside the 8888
['']]

global.botNumberCode = '' 
global.confirmCode = ''

global.suittag = ['']
global.mods = []
global.prems = []


global.isdev = [['88888888'], [''], ['']]


global.packname = 'Moon'
global.author = 'Moon'
global.wm = 'Moon'
global.wm2 = 'Moon'
global.des = 'Islamic bot.'

global.vs = 'V1'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'arabic'
global.dev = 'Saad'
global.devnum = '+888 8888 8888'

global.dis = '- '
global.cen1 = '- '
global.cen2 = ' -'


global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')


global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('🌙 | Done updated config.js'))
import(`${file}?update=${Date.now()}`)
})
