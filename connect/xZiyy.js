/*

KAYANYA YANG DISINI GADA YG PERLU DI UBAH UBAH TERUNTUK USER SCRIPT
JIKA KAMU SUDAH PAHAM TENTANG BOT TIDAK MASALAH SIH
ERROR TANGGUNG SENDIRI

 Allert !
jangan asal ubah nanti eror
// eror? contact me : 6283804078729

jangan hapus Nama gw di Tq To dasar bocah Copy paste
// copy boleh asal apa? asal no delete w m
// apa itu wm: watermark
// apa itu watermark? fungsi google apa

anda bingung? masuk aja gc ini
https://chat.whatsapp.com/Lf6XnvJfYZdESpR9RfEnJh
jangan sungkan² untuk bertanya

 ©Aypa Team
* [`Aprilia`](https://github.com/?)
* [`YanzBotz`](https://github.com/YanzBotz)
* [`Febriansyah`](https://github.com/FebriansyahXd)
* [`Aldi Fauzi`](https://github.com/xZiyyy) // ME xZiyy

Thanks For Using My Project and Thanks For u Has Respect The creator
*/

const process = require('process');
process.on('uncaughtException', console.error)

require('../media/settings/ownerConfig.js');
require('../media/settings/config')
const { default: makeWaSocket, proto, prepareWAMessageMedia, generateWAMessageFromContent, downloadContentFromMessage, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const { util, promisify } = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const path = require("path");
const yts = require ('yt-search');
const chalk = require('chalk')
const crypto = require('crypto')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("../library/TelegraPH")
const moment = require("moment-timezone")
const os = require('os');
const pino = require('pino')
const { pipeline } = require('stream')
const ytdl = require('ytdl-core')
const speed = require('performance-now')
const more = String.fromCharCode(8206); 
const readmore = more.repeat(4001);
const { bytesToSize, getRandomFile, smsg, checkBandwidth, sleep, formatSize, getRandom, format, getBuffer, isUrl, jsonformat, nganuin, pickRandom, runtime, clockString, shorturl, formatp, fetchJson, color, getGroupAdmins } = require("../library/myfunc");
const { addExif } = require('../library/exif')
const yetedln = require("../media/scraper/yetedln")
const apiUrlw = 'https://clairity-nine.vercel.app'

// game
// read database
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let tebakjkt48 = []
let _family100 = db.data.game.family100 = []

const list = JSON.parse(fs.readFileSync("./media/database/list.json"))


module.exports = fuzzy = async (fuzzy, m, msg, chatUpdate, store) => {
const { type, sender, pushname, isGroup } = m
try {

// no multi prefix
//must use prefix
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const prefix = /^[°zZ#$*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'

const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''   
const order = body.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await fuzzy.decodeJid(fuzzy.user.id);
const senderNumber = sender.split('@')[0]
const pureNumber = botNumber.split('@')[0];
const isBot = botNumber.includes(senderNumber)
const isCreator = (m && m?.sender && [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const q = args.join(' ')
const text = args.join(" ");
const chat = isGroup?[m.chat] : false
const mentionedJid = [m.sender]
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m?.quoted || m;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted?.msg || quoted);
const from = m.key.remoteJid
const isMedia = /image|video|sticker|audio/.test(mime);
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2') 
//group
const groupMetadata = m?.isGroup ? await fuzzy.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
    
const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : false 

let datauser = JSON.parse(fs.readFileSync('./media/database/datauser.json'))

const isUser = datauser.includes(m.sender)
//================== [ TIME ] ==================//
const hariini = moment.tz('Afica/EastAfrica').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Afica/EastAfrica').format('HH : mm : ss')
const wit = moment.tz('Afica/EastAfrica').format('HH : mm : ss')
const wita = moment.tz('Afica/EastAfrica').format('HH : mm : ss')

const time2 = moment().tz('Afica/EastAfrica').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'LESTA_PRO-MD🧜'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'LESTA_PRO-MD🇰🇪'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'LESTA-PRO🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = ' LESTA_PRO-MD 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = ' LESTA_PRO-MD😁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = ' LESTA_PRO-MD🎀'
}
if(time2 < "03:00:00"){
var ucapanWaktu = ' LESTA_PRO-MD 🌃'
}

//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('isBanned' in user)) user.isBanned = false
        if (!('afkReason' in user)) user.afkReason = 'User is Resting For sometime'
} else global.db.data.users[m?.sender] = {
        afkTime: -1,
        afkReason: 'busy and not near phone 🤳',
        isBanned: false,
}

// chats
 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 if (!('autoai' in chats)) chats.autoai = false
 if (!('welcome' in chats)) chats.welcome = false
} else global.db.data.chats[m.chat] = {
autoai: false,
isBanned: false,
welcome: false,
}
// setting
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
if (!('onlygrub' in setting)) setting.onlygrub = false
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
 onlygrub: false,
}
} catch (err) {
}
if (!db.data.settings[botNumber].public) {
if (!isCreator) return
}


//======[ AUTO REGISTER ]=======\\
if (isCmd && !isUser) {
datauser.push(m.sender)
fs.writeFileSync('./media/database/datauser.json', JSON.stringify(datauser, null, 2))
}
//======[ SETTING ]=======\\
// self public
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}

// AUTOREAD
if (db.data.settings[botNumber].autoread) { fuzzy.readMessages([m?.key]) }

if (isCmd) {
let check = list.find(e => e.cmd === command)
if (check) {
await m.reply(check.respon)
}
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
    }
    
    let category = categories.find(cat => cat.category === command);
    
    if (category) {
        if (category.items.length === 0) {
            return m.reply(`Belum ada menu dalam kategori *${category.category}*`);
        }
        
        let menuText = `*MENU ${category.category.toUpperCase()}*\n\n`;
        category.items.forEach((item, index) => {
            menuText += `${index + 1}. ${prefix}${item.cmd}\n`;
        });
        
        return m.reply(menuText);
    }
    
    for (const cat of categories) {
        const item = cat.items.find(item => item.cmd === command);
        if (item) {
            return m.reply(item.respon);
        }
    }

    console.log(
        chalk.bgHex('#00FF00').black.bold(' [ LOG ] '),
        chalk.bgHex('#1B1B1B').green(`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`),
        chalk.bgHex('#4CAF50').black.bold(` ${command.toUpperCase()} `) + '\n' +
        chalk.hex('#2E8B57').bold('⇝ From:'),
        chalk.green.underline(pushname),
        chalk.magenta.bold(`(${m.sender})`) + '\n' +
        chalk.hex('#2E8B57').bold('⇝ In:'),
        chalk.greenBright(m.isGroup ? groupName : 'Private Chat'),
        chalk.hex('#39FF14').dim(from)
    );
} else if (isCmd && !isBot) {
    console.log(
        chalk.bgHex('#00FF00').black.bold(' [ LOG CHAT ] '),
        chalk.bgHex('#1B1B1B').green(`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`),
        chalk.bgHex('#4CAF50').black.bold(` ${body} `) + '\n' +
        chalk.hex('#2E8B57').bold('⇝ From:'),
        chalk.green.underline(pushname),
        chalk.magenta.bold(`(${m.sender})`) + '\n' +
        chalk.hex('#2E8B57').bold('⇝ In:'),
        chalk.greenBright(m.isGroup ? groupName : 'Private Chat'),
        chalk.hex('#39FF14').dim(from)
    );
}

const reply = async (teks) => {
    try {
      fuzzy.sendMessage(
        m.chat, {
          text: teks,
          contextInfo: {
            externalAdReply: {
              body: `Hi ${pushname}`, // Isi deskripsi atau teks tambahan
              containsAutoReply: true, // Menunjukkan ini balasan otomatis (opsional)
              mediaType: 1, // Tipe media (1 untuk gambar, 2 untuk video, dll.)
              mediaUrl: "https://xziyy.my.id", // URL media atau link utama
              renderLargerThumbnail: false, // Membuat thumbnail lebih besar
              showAdAttribution: true, // Menampilkan label "Ad" (opsional)
              sourceUrl: "", // URL sumber yang akan diakses
              thumbnailUrl: global.imgUrl, // URL thumbnail
              title: botname, // Judul link preview
            },
          },
        }, {
          quoted: m
        }
      );
    } catch (error) {
        console.error('Error saat mengirim pesan:', error);
        m.reply('Gagal mengirim pesan, silakan coba lagi.');
    }
};



//======[ PLUGIN ]=======\\
    for (let name in plugins) {
      let plugin = plugins[name]
      if (plugin.command && plugin.command.includes(command)) {
        let turn = plugin.command instanceof Array ?
          plugin.command.includes(command) :
          plugin.command instanceof String ?
          plugin.command == command :
          false
        if (!turn) continue
        if (plugin.owner && !isCreator) {
          m.reply('only owner')
          continue
        }
        if (plugin.group && !isGroup) {
          m.reply('only IN group👥')
          continue
        }
        if (plugin.groupAdmins && !isGroupAdmins) {
          m.reply('YOU ARE NOT AN ADMIN🔮')
          continue
        }
        if (plugin.botGroupAdmins && !isBotGroupAdmins) {
          m.reply('bot must admin')
          continue
        }
        await plugin.exec(m, from, { q, fuzzy, args, command, prefix, reply, quoted, mime, pushname, getBuffer })
      }
    }
    
    // Afk
    for (let jid of mentionUser) {
      if (m.key.fromMe) return
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afkTime
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || 'User is Resting'
      let jgntag = `Jangan Tag Dia!\nDia Lagi Afk ${reason ? 'with reason ' + reason : 'no reason'}\nJam ${clockString(new Date - afkTime)}`.trim()
      m.reply(jgntag)
    }

    if (global.db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender]
      let kembali = `${pushname} berhenti AFK${user.afkReason ? ' after ' + user.afkReason : ''}\nDuring ${clockString(new Date - user.afkTime)}`
      m.reply(kembali)
      user.afkTime = -1
      user.afkReason = ''
    }

    nowa = [`@${global.owner}`]
    if (budy.includes(nowa) && !m.key.fromMe) {
        reply('jangan tag owner kak, owner lagi sibuk..')
    }

//+++++++[ antilink ]++++++++++

  const antilinkgcList = JSON.parse(fs.readFileSync("./media/database/antilinkgc.json"));
    const antisalurgc = m.isGroup ? antilinkgcList.includes(from) : false;

  if (antisalurgc) {
      if (budy.match('chat.whatsapp.com')) {
        if (isAdmins) return reply(`detect link: you are admin so i won't delete`)
        if (m.key.fromMe) return reply(`detect link: you are owner so i won't delete`)
        if (isCreator) return reply(`detect link: you are owner so i won't delete`)
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
        fuzzy.sendMessage(from, {
          text: `@${m.sender.split("@")[0]} Detected a WhatsApp group link and it has been deleted.`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })

      }
    }

 const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}

const pw = crypto.randomBytes(5).toString('hex')

        if (!isCreator && !m.isGroup && db.data.settings[botNumber].onlygrub ) {
        	if (command){
            return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group\n\nhttps://chat.whatsapp.com/HeXU27T77XaCGZYLjZGoVk !\n\nIf you have issue please chat owner wa.me/${global.ownerNumber}`)
            }
        }
        
        
    //GAME
    if (tebakgambar.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakgambar[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakgambar[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nCongratulation  `, m)
        benefit = "300"
        
    
        delete tebakgambar[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (kuismath.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = kuismath[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete kuismath[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await reply(`🎮 Kuis Matematika  🎮\n\nCongratulation\n\nwanna play again? type ${prefix}tebak math`)
        benefit = "300"
        

        delete kuismath[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakasahotak.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakasahotak[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakasahotak[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Asah Otak 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakasahotak[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaksiapakahaku.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaksiapakahaku[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaksiapakahaku[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaksiapakahaku[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaksusunkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaksusunkata[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaksusunkata[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Susun Kata 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaksusunkata[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakbendera.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakbendera[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakbendera[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakbendera[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
if (tebakbendera2.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakbendera2[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakbendera2[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakbendera2[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkabupaten.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkabupaten[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkabupaten[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkabupaten[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkimia.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkimia[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkimia[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkimia[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaktekateki.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaktekateki[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaktekateki[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Teka Teki 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaktekateki[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaklagu.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaklagu[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaklagu[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaklagu[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkata[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkata[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkata[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkalimat.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkalimat[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkalimat[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkalimat[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaklirik.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaklirik[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaklirik[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaklirik[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaktebakan.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaktebakan[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaktebakan[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaktebakan[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakjkt48.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true;
      jawaban = tebakjkt48[from];

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*');
        delete tebakjkt48[from];
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nCongratulation  `, m);
        benefit = "300"
        
        delete tebakjkt48[from];
      }
      else {
        m.reply('*Jawaban Salah!*');
      }
    }
        
if (!global.menuMode) global.menuMode = 'nobutton';
switch(command) {
case 'script':{
reply(`
▧ 「 *LINK SCRIPT* 」
│ https://github.com/Tela634/clairity
│ script :Chat private for bot sale price.
│ Credits: Tela634
│ madein: Kenya🇰🇪
┗─────────────
`)
}
break
case 'getsession': {
if (!isCreator) return m.reply(mess.owner)
await fuzzy.sendMessage(m.chat, {
document: fs.readFileSync('./media/database/session/creds.json'),
mimetype: 'application/json',
fileName: 'creds.json'
}, { quoted: m });
}
break
case 'setmenu':
case 'settingmenu': {
if (!isCreator) return m.reply(mess.owner)
    if (args[0] === 'button') {
        global.menuMode = 'button';
        reply('✅ successful set toMenu button');
    } else if (args[0] === 'nobutton') {
        global.menuMode = 'nobutton';
        reply('✅ Successful set to Menu no button');
    } else {
        reply('⚠️ command not valid! Gunakan: .settingmenu [nobutton/button]');
    }
}
break;

case 'menu': {
let categories = [];
try {
    categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
} catch (err) {
    categories = []; // Jika file tidak ditemukan, gunakan array kosong
}

let menuCategories = "";
if (categories.length > 0) {
    categories.forEach((cat, index) => {
        menuCategories += `\n┏─『 \`${cat.category.toUpperCase()}\` 』\n`;

        // Tampilkan perintah dalam kategori
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                menuCategories += `│ ⿻ ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            menuCategories += `│ ⿻ ${prefix}${cat.items.cmd}\n`;
        }
        
        menuCategories += "┗─────────────❐\n";
    });
} else {
    menuCategories = "";
}

    let speed = require('performance-now');
    let timestampe = speed();
    let latensie = speed() - timestampe;

    let menu;
    
    if (global.menuMode === 'nobutton') {
        menu = `
Hello ${ucapanWaktu} 👋

┏─  *[ LESTA_PRO - B O T ]*───❐
| *Name*: ${global.botname}
| *Version*: beta 1.0.0
| *Speed*: ${latensie.toFixed(4)} detik
| *totalUser*: ${datauser.length}
| *Runtime*: ${runtime(process.uptime())}
| *hariini*: ${hariini}
| *wib*: ${wib}
| *wita*: ${wita}
| *wit*: ${wit}
┗─────────────❐
${menuCategories}

┏─『 \`MAIN MENU\` 』
│ ⿻ ${prefix}script
│ ⿻ ${prefix}tes
│ ⿻ ${prefix}ping
│ ⿻ ${prefix}owner
┗─────────────❐


┏─『 \`OWNER MENU\` 』
│ ⿻ ${prefix}setmenu nobutton/button
│ ⿻ ${prefix}mode self/public
│ ⿻ ${prefix}onlygc on/off
│ ⿻ ${prefix}setimgmenu
│ ⿻ ${prefix}setimgbot
│ ⿻ ${prefix}setbotname
│ ⿻ ${prefix}delsampah
│ ⿻ ${prefix}delsesi
│ ⿻ ${prefix}backup
│ ⿻ ${prefix}getsession
│ ⿻ ${prefix}cekidch
│ ⿻ ${prefix}join
┗─────────────❐

┏─『 \`ARTIFICIAL MENU\` 』───❐
│ ⿻ ${prefix}ai on/off
│ ⿻ ${prefix}yousearch
│ ⿻ ${prefix}cody
│ ⿻ ${prefix}flux 
┗─────────────❐

┏─『 \`GROUP MENU\` 』───❐
│ ⿻ ${prefix}notifikasigc on/off
│ ⿻ ${prefix}afk
│ ⿻ ${prefix}antilinkgc
│ ⿻ ${prefix}linkgroup
│ ⿻ ${prefix}setppgroup
│ ⿻ ${prefix}kick
│ ⿻ ${prefix}add
│ ⿻ ${prefix}everyone
│ ⿻ ${prefix}hidetag
│ ⿻ ${prefix}delete
│ ⿻ ${prefix}opentime
│ ⿻ ${prefix}closetime
┗─────────────❐

┏─『 \`MAKER MENU\` 』───❐
│ ⿻ ${prefix}brat text
│ ⿻ ${prefix}bratvideo text
│ ⿻ ${prefix}sticker
│ ⿻ ${prefix}stickergif
│ ⿻ ${prefix}qc
│ ⿻ ${prefix}emojimix
│ ⿻ ${prefix}qcwhite
│ ⿻ ${prefix}wasted
┗─────────────❐

┏─『 \`STICKER MENU\` 』───❐
│ ⿻ ${prefix}kuromi
│ ⿻ ${prefix}pocoyo
│ ⿻ ${prefix}dino
│ ⿻ ${prefix}emojimix 😴+🥰
┗─────────────❐

┏─『 \`download menu\` 』───❐
│ ⿻ ${prefix}pinterestdl
│ ⿻ ${prefix}play
│ ⿻ ${prefix}ytmp3
│ ⿻ ${prefix}ytmp4
│ ⿻ ${prefix}tiktok
│ ⿻ ${prefix}tiksave
│ ⿻ ${prefix}igdl
│ ⿻ ${prefix}fbdl
┗─────────────❐

┏─『 \`SEARCH MENU\` 』───❐
│ ⿻ ${prefix}pinterest
│ ⿻ ${prefix}rumaysho
│ ⿻ ${prefix}caribuku
│ ⿻ ${prefix}kajian
│ ⿻ ${prefix}gamedva
│ ⿻ ${prefix}soundcloud
┗─────────────❐

┏─『 \`BERITA MENU\` 』───❐
│ ⿻ ${prefix}gempa
│ ⿻ ${prefix}liputan6
┗─────────────❐

┏─『 \`STALKER MENU\` 』───❐
│ ⿻ ${prefix}tikstalk 
│ ⿻ ${prefix}githubstalk
│ ⿻ ${prefix}igstalk
┗─────────────❐

┏─『 \`PRIMBON MENU\` 』───❐
│ ⿻ ${prefix}apakah [text]
│ ⿻ ${prefix}bagaimanakah [text]
│ ⿻ ${prefix}kapankah [text]
│ ⿻ ${prefix}bisakah [text]
│ ⿻ ${prefix}watakcek [text]
│ ⿻ ${prefix}cebelapaimutci [text]
│ ⿻ ${prefix}hobycek [text]
┗─────────────❐

┏─『 \`GAME MENU\` 』───❐
│ ⿻ ${prefix}tebak kata
│ ⿻ ${prefix}tebak tebakan
│ ⿻ ${prefix}tebak bendera
│ ⿻ ${prefix}tebak kalimat
│ ⿻ ${prefix}tebak lirik
│ ⿻ ${prefix}tebak tekateki
│ ⿻ ${prefix}tebak siapakahaku
│ ⿻ ${prefix}tebak asahotak
│ ⿻ ${prefix}tebak susunkata
│ ⿻ ${prefix}tebak kimia
│ ⿻ ${prefix}tebak gambar
│ ⿻ ${prefix}tebak bendera2
│ ⿻ ${prefix}tebak jkt48
┗─────────────❐

┏─『 \`TOOLS MENU\` 』───❐
│ ⿻ ${prefix}hd
│ ⿻ ${prefix}remini
│ ⿻ ${prefix}tourl
│ ⿻ ${prefix}ssweb
│ ⿻ ${prefix}translate 
│ ⿻ ${prefix}languages
┗─────────────❐

┏─『 \`MENU SETTING\` 』───❐
│ ⿻ ${prefix}addmenu
│ ⿻ ${prefix}dellmenu
│ ⿻ ${prefix}addperintah
│ ⿻ ${prefix}dellperintah
│ ⿻ ${prefix}addlist
│ ⿻ ${prefix}addrespon
│ ⿻ ${prefix}dellrespon
│ ⿻ ${prefix}listrespon
┗─────────────❐

┏─ *TQ TO:*───❐
│   - ${global.ownername} (owner)
│   - LESTA_ELIUD
|   - 254701309409@s.whatsapp.net
┗─────────────❐

> type this to get the script:
> *.script*
        `;
     fuzzy.sendMessage(from, {
        image: { url: global.menuimgUrl },
        caption: menu
    });
    } else {
let menuCategoriess = "";
if (categories.length > 0) {
    categories.forEach((cat, index) => {
        menuCategoriess += `\n🏷 *${cat.category.toUpperCase()}*\n`;

        // Tampilkan perintah dalam kategori
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                menuCategoriess += `</> ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            menuCategoriess += `</> ${prefix}${cat.items.cmd}\n`;
        }
    });
} else {
    menuCategoriess = "";
}

        menu = `
┌──[ 📌 INFO BOT ]───
│ 🌟 Nama: ${global.botname}
│ 🚀 Speed: ${latensie.toFixed(4)} detik
│ 👥 Users: ${datauser.length}
└────────────────

${menuCategoriess}

🏷 *MAIN MENU*
</> .script
</> .tes
</> .ping
</> .owner

🏷 *OWNER MENU*
</> ${prefix}setmenu nobutton/button
</> ${prefix}mode self/public
</> ${prefix}onlygc on/off
</> ${prefix}setimgmenu
</> ${prefix}setimgbot
</> ${prefix}setbotname
</> ${prefix}delsampah
</> ${prefix}delsesi
</> ${prefix}backup
</> ${prefix}getsession
</> ${prefix}join
</> ${prefix}cekidch

🏷 *ARTIFICIAL MENU*
</> ${prefix}ai on/off
</> ${prefix}yousearch
</> ${prefix}cody
</> ${prefix}flux 

🏷 *GROUP MENU*
</> ${prefix}notifikasigc on/off
</> ${prefix}antilinkgc
</> ${prefix}linkgroup
</> ${prefix}setppgroup
</> ${prefix}kick
</> ${prefix}add
</> ${prefix}everyone
</> ${prefix}hidetag
</> ${prefix}delete
</> ${prefix}opentime
</> ${prefix}closetime

🏷 *MAKER MENU*
</> ${prefix}brat text
</> ${prefix}bratvideo text
</> ${prefix}sticker
</> ${prefix}stickergif
</> ${prefix}qc
</> ${prefix}emojimix
</> ${prefix}qcwhite
</> ${prefix}wasted

🏷 *STICKER MENU*
</> ${prefix}kuromi
</> ${prefix}pocoyo
</> ${prefix}dino
</> ${prefix}emojimix 😴+🥰

🏷 *DOWNLOAD MENU*
</> ${prefix}pinterestdl
</> ${prefix}play
</> ${prefix}ytmp3
</> ${prefix}ytmp4
</> ${prefix}tiktok
</> ${prefix}tiksave
</> ${prefix}igdl
</> ${prefix}fbdl

🏷 *SEARCH MENU*
</> ${prefix}pinterest
</> ${prefix}rumaysho
</> ${prefix}caribuku
</> ${prefix}kajian
</> ${prefix}gamedva
</> ${prefix}soundcloud

🏷 *BERITA MENU*
</> ${prefix}gempa
</> ${prefix}liputan6

🏷 *STALK MENU*
</> ${prefix}tikstalk 
</> ${prefix}githubstalk
</> ${prefix}igstalk

🏷 *PRIMBON MENU*
</> ${prefix}apakah [text]
</> ${prefix}bagaimanakah [text]
</> ${prefix}kapankah [text]
</> ${prefix}bisakah [text]
</> ${prefix}watakcek [text]
</> ${prefix}cebelapaimutci [text]
</> ${prefix}hobycek [text]

🏷 *GAME MENU*
</> ${prefix}tebak kata
</> ${prefix}tebak tebakan
</> ${prefix}tebak bendera
</> ${prefix}tebak kalimat
</> ${prefix}tebak lirik
</> ${prefix}tebak tekateki
</> ${prefix}tebak siapakahaku
</> ${prefix}tebak asahotak
</> ${prefix}tebak susunkata
</> ${prefix}tebak kimia
</> ${prefix}tebak gambar
</> ${prefix}tebak bendera2
</> ${prefix}tebak jkt48

🏷 *TOOLS MENU*
</> ${prefix}hd
</> ${prefix}remini
</> ${prefix}tourl
</> ${prefix}ssweb
</> ${prefix}translate 
</> ${prefix}languages

🏷 *MENU SETTING*
</> ${prefix}addmenu
</> ${prefix}dellmenu
</> ${prefix}addperintah
</> ${prefix}dellperintah
</> ${prefix}addlist
</> ${prefix}addrespon
</> ${prefix}dellrespon
</> ${prefix}listrespon

> click the button to get script
        `;
await fuzzy.sendMessage(m.chat, {
  footer: `© ${global.botname} - 2025`,
  buttons: [
    {
      buttonId: `.script`,
      buttonText: { displayText: 'S C R I P T' },
      type: 1
    },
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'O W N E R' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: false,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${ownername} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  fileLength: 0,
  caption: menu,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idch,
   newsletterName: global.namech
   }, 
    externalAdReply: {
      title: `Hai haii ${ucapanWaktu} 👋`,
      thumbnailUrl: global.imgUrl,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
    }


}
break;
//======[ AI ]======\\
case 'yousearch': {
  let input = `Ex : ${prefix + command} Siapakah Presiden Indonesia Sekarang`

  if (!text) return m.reply(input)
  const website = axios.create({
    baseURL: "https://app.yoursearch.ai",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const yousearch = async (searchTerm) => {
    const requestData = {
      searchTerm: searchTerm,
      promptTemplate: `Search term: "${searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

Sources:
(1) <URL of the first reference>
(2) <URL of the second reference>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}`,
      searchParameters: "{}",
      searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`,
    };

    try {
      const response = await website.post("/api", requestData);
      return response.data.response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  let hanjing = await yousearch(text)
  reply(`${hanjing}`)
}
break
case 'flux': {
  if (!text) return reply('prompt nya mana?')
  const imgData = await getBuffer(`https://api.siputzx.my.id/api/ai/flux?prompt=${text}`);
  await fuzzy.sendMessage(from, {
    image: imgData,
    caption: "nihh"
  }, {
    quoted: m
  });
}
break;
case 'cody': {
  try {
    if (!text) return reply("Masukkan teks untuk mendapatkan respons.");

    const apiUrl = `${apiUrlw}/api/cody?text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const {
      success,
      answer
    } = response.data;

    if (!success) {
      return reply("Gagal mendapatkan respons dari API.");
    }

    reply(answer);
  } catch (error) {
    console.error("Error fetching Cody response:", error);
    reply("Maaf, terjadi kesalahan saat mengambil respons.");
  }
  break;
}
case 'cody': {
  try {
    if (!text) return reply("Masukkan teks untuk mendapatkan respons.");
    reply('_Tunggu sebentar, sedang membuat gambar..._');

    const apiUrl = `${apiUrlw}/api/cody?text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const {
      success,
      answer
    } = response.data;

    if (!success) {
      return reply("Gagal mendapatkan respons dari API.");
    }

    reply(answer);
  } catch (error) {
    console.error("Error fetching Cody response:", error);
    reply("Maaf, terjadi kesalahan saat mengambil respons.");
  }
  break;
}
//======[ GROUP ]======\\

      case 'everyone': {
        if (!isAdmins && !isCreator) return
        let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
        fuzzy.sendMessage(m.chat, {
          text: `@${m.chat} ${text}`,
          contextInfo: {
            mentionedJid: mem,
            groupMentions: [{
              groupSubject: `everyone`,
              groupJid: m.chat,
            }, ],
          },
        });
      }
      break
case "cekidch": case "idch": {
if (!text) return m.reply("linknya mana?")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await fuzzy.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
case "joingc": case "join": {
if (!isCreator) return reply("cuman owner yg bisa gunain ini")
if (!text) return m.reply("linkgcnya mana?")
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await fuzzy.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

case "addlist":
case "addrespon": {
if (!isCreator) return reply(mess.owner)
if (!text) return m.reply("cmd|responnya")
if (!text.split("|")) return m.reply("cmd|responnya")
let result = text.split("|")
if (result.length < 2) return m.reply("cmd|responnya")
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./media/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

case "dellrespon":
case "delrespon": {
if (!isCreator) return reply(mess.owner)
if (!text) return m.reply("cmd\n\n ketik *.listrespon* untuk melihat semua cmd")
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./media/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

case "listrespon": {
if (!isCreator) return reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n${e.respon}`)
m.reply(`${teks}`)
}
break
case "addmenu": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Masukkan nama Menu! Contoh: .addmenu pulsa")
    
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify([], null, 2));
    }
    
    const categoryName = text.toLowerCase();
    
    let existingCategory = categories.find(cat => cat.category === categoryName);
    if (existingCategory) return m.reply(`menu *${categoryName}* sudah ada!`);
    
    categories.push({
        category: categoryName,
        items: []
    });
    
   fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));
    
    m.reply(`Berhasil menambahkan menu *${categoryName}* ke database!`);
}
break;

case "dellmenu":
case "delmenu": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Masukkan nama menu yang ingin dihapus!")
    
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }
    
    
    const categoryName = text.toLowerCase();
    
    let categoryIndex = categories.findIndex(cat => cat.category === categoryName);
    if (categoryIndex === -1) return m.reply(`menu *${categoryName}* tidak ditemukan!`);
    
    categories.splice(categoryIndex, 1);
    
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));
    
    m.reply(`Berhasil menghapus menu *${categoryName}*!`);
}
break;

case "addrespon":
case "additems":
case "addperintah": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Format: .addperintah menu|perintah|responnya")
    
    const parts = text.split("|");
    if (parts.length < 3) return m.reply("Format tidak valid! Gunakan: menu|perintah|responnya");
    
    const categoryName = parts[0].toLowerCase();
    const cmdName = parts[1].toLowerCase().trim();
    const respon = parts[2].trim();
    
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }
    
    let category = categories.find(cat => cat.category === categoryName);
    if (!category) return m.reply(`Kategori *${categoryName}* tidak ditemukan! Buat dulu dengan .addcategory`);
    
    let existingItem = category.items.find(item => item.cmd === cmdName);
    if (existingItem) return m.reply(`Perintah *${cmdName}* sudah ada dalam kategori *${categoryName}*!`);
    
    category.items.push({
        cmd: cmdName,
        respon: respon
    });
    
    // Simpan perubahan
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));
    
    m.reply(`Berhasil menambahkan perintah *${cmdName}* ke kategori *${categoryName}*!`);
}
break;

case "dellperintah": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Format: .dellperintah menunya|perintahnya")
    
    const parts = text.split("|");
    if (parts.length < 2) return m.reply("Format tidak valid! Gunakan: .dellperintah menunya|perintahnya");
    
    const categoryName = parts[0].toLowerCase();
    const cmdName = parts[1].toLowerCase().trim();

   let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }
    
    let category = categories.find(cat => cat.category === categoryName);
    if (!category) return m.reply(`menu *${categoryName}* tidak ditemukan!`);
    
    let itemIndex = category.items.findIndex(item => item.cmd === cmdName);
    if (itemIndex === -1) return m.reply(`Perintah *${cmdName}* tidak ditemukan dalam menu *${categoryName}*!`);
    
    category.items.splice(itemIndex, 1);
    
    // Simpan perubahan
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));
    
    m.reply(`Berhasil menghapus perintah *${cmdName}* dari menu *${categoryName}*!`);
}
break;

case "menus": {
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database kategori kosong atau tidak ditemukan!");
    }
    
    if (categories.length === 0) return m.reply("Belum ada menu yang tersedia.");
    
    let text = "*DAFTAR KATEGORI MENU*\n\n";
    categories.forEach((cat, index) => {
        text += `${index + 1}. ${cat.category}\n`;
        
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                text += `   ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            text += `   ${prefix}${cat.items.cmd}\n`;
        }
        
        text += "\n";
    });
    
    text += "Gunakan command dengan nama kategori untuk melihat daftar menu dalam kategory tersebut.";
    m.reply(text);
}
break;
case 'notifikasigc':
case "notificationgc": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply("admin doang");
if (!text) return m.reply("on/off")
if (text == "on") {
if (global.db.data.chats[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.data.chats[m.chat].welcome = true
return m.reply("Berhasil menyalakan *notifikasi* di grup ini")
} else if (text == "off") {
if (global.db.data.chats[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.data.chats[m.chat].welcome = false
return m.reply("Berhasil mematikan *notifikasi* di grup ini")
} else return m.reply("on/off")
}
break
      case "hidetag":
      case "z":
      case "h":
        {
          if (!m.isGroup) return reply("gc doang");
          if (!isAdmins && !isCreator) return reply("admin doang");
          if (!m.quoted && !text) return reply("teksnya/replyteks");
          var teks = m.quoted ? m.quoted.text : text;
          var member = await groupMetadata.participants.map((e) => e.id);
          fuzzy.sendMessage(m.chat, { text: teks, mentions: [...member] });
        }
        break;
      case 'antilinkgc': {
        if (!isAdmins) return reply('You are not an admin!');
        if (!m.isGroup) return reply('This command can only be used in groups!');

        if (args[0] === "on") {
          if (antisalurgc) return reply('Antilinkgc is already active in this group.');
          antilinkgcList.push(from);
          fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          reply('Antilinkgc has been enabled in this group.');
          var groupe = await fuzzy.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });

           reply(`⚠️ Warning ⚠️\n\nPlease be aware of  sending links 🔗 in this group📵.`)
            
        }
        else if (args[0] === "off") {
          if (!antisalurgc) return reply('Antilink has been disabled in this group.');
          let off = antilinkgcList.indexOf(from);
          antilinkgcList.splice(off, 1);
          fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          reply('Antilinkgc has been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;


case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins && !isCreator) return reply('only for admin')
  let media = await fuzzy.downloadAndSaveMediaMessage(quoted)
  await fuzzy.updateProfilePicture(m.chat, {
    url: media
  }).catch((err) => fs.unlinkSync(media))
  m.reply('done')
}
break
case 'linkgroup':
case 'linkgc': {
  if (!isBotAdmins) return reply(mess.Badmin)
  let response = await fuzzy.groupInviteCode(from)
  fuzzy.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
    detectLink: true
  })
}
break
case 'd':
case 'del':
case 'delete':
case 'hapus': {
  if (!isAdmins && !isCreator) return reply('only admin')
  if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
  fuzzy.sendMessage(from, {
    delete: {
      remoteJid: from,
      id: m.quoted.id,
      fromMe: m.quoted.fromMe,
      participant: m.quoted.sender
    }
  })
}
break
case 'totag': {
  if (!isAdmins && !isCreator) return reply('only admin')
  if (!m.quoted)
    return reply(`Reply pesan dengan caption ${prefix + command}`);
  fuzzy.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map((a) => a.id),
  });
}
break;
case 'closetime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1] == "detik") {
  var timer = args[0] * `1000`
} else if (args[1] == "menit") {
  var timer = args[0] * `60000`
} else if (args[1] == "jam") {
  var timer = args[0] * `3600000`
} else if (args[1] == "hari") {
  var timer = args[0] * `86400000`
} else {
  return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
  const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
  fuzzy.groupSettingUpdate(from, 'announcement')
  reply(close)
}, timer)
break

case 'opentime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1] == "detik") {
  var timer = args[0] * `1000`
} else if (args[1] == "menit") {
  var timer = args[0] * `60000`
} else if (args[1] == "jam") {
  var timer = args[0] * `3600000`
} else if (args[1] == "hari") {
  var timer = args[0] * `86400000`
} else {
  return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
}
reply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
  const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
  fuzzy.groupSettingUpdate(from, 'not_announcement')
  reply(open)
}, timer)
break
      case 'afk': {
        try {
          var ppimg = await fuzzy.profilePictureUrl(m.sender, 'image');
        }
        catch (err) {
          console.log(err);
          var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
        }

        let user = global.db.data.users[m.sender]
        user.afkTime = +new Date
        user.afkReason = text
        let afkteks = `${pushname} sekarang Kamu Lagi Afk dengan Alasan? ${text ? ': ' + text : 'tidak ada alasan'}`
        m.reply(afkteks)
      }
      break
case 'add': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.Badmin)
  if (!isAdmins && !isCreator) return reply('only bot admin')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await fuzzy.groupParticipantsUpdate(from, [users], 'add')
  reply('succss')
}
break
case 'kick': {
  if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return reply('only admin can use this command')
  let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await fuzzy.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
  m.reply('bye bye kasian deh')
}
break
//======[ DOWNLOAD ]======\\
case 'ccdwn':
case 'capcut':{
  if (!text) return m.reply('Silahkan masukkan URL CapCut yang ingin diunduh!')
  
  m.reply('Sedang memproses, mohon tunggu...')
  
  try {
    const apiUrl = `https://jazxcode.biz.id/downloader/capcutdl?url=${text}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    if (data.status) {
      const videoUrl = data.result.videoUrl
      
      await fuzzy.sendMessage(m.chat, {
        video: {
          url: videoUrl,
        },
        caption:`LESTA_PRO-MD`,
        fileName: `capcut.mp4`,
        mimetype: 'video/mp4'
      });
    } else {
      m.reply('Gagal mengunduh video, periksa URL dan coba lagi.')
    }
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat mengunduh video.')
  }
}
break
case 'fbdl': {

  async function fetchFbVideo(url) {
    const res = await axios.get(`https://api.vreden.my.id/api/fbdl?url=${url}`);
    return res.data.data;
  }

  const fburl = args[0]; // Link Facebook diberikan sebagai argumen

  if (!fburl) {
    return m.reply('Masukkan URL Facebook yang ingin diunduh.');
  }

  reply('Tunggu sebentar, sedang mengunduh video dari Facebook...');
  

  try {
    const result = await fetchFbVideo(fburl);

    if (!result || !result.status) {
      return m.reply('Gagal mengunduh video. Pastikan URL benar.');
    }

    // Menggunakan link HD jika tersedia, jika tidak gunakan SD
    const videoUrl = result.hd_url || result.sd_url;
    const caption = `Judul: ${result.title || 'Video Facebook'}`;

    m.reply('Video berhasil ditemukan! Mengirim video...');
    await fuzzy.sendMessage(m.chat, {
      video: {
        url: videoUrl,
      },
      caption: caption,
      fileName: `fb.mp4`,
      mimetype: 'video/mp4'
    }, {
      quoted: m
    });
    
  } catch (error) {
    console.error('Error fetching Facebook video:', error);
    m.reply('Maaf, terjadi kesalahan saat mengunduh video.');
  }
}
break;
case 'igdl': {
  reply('Tunggu sebentar, sedang mengunduh video dari Instagram...');

  async function fetchInstagramVideo(url) {
    const res = await axios.get(`${apiUrlw}/api/ig-indownloader?url=${encodeURIComponent(url)}`);
    return res.data;
  }

  const igUrl = args[0]; // Link Instagram diberikan sebagai argumen

  if (!igUrl) {
    return m.reply('Masukkan URL Instagram yang ingin diunduh.');
  }

  try {
    const result = await fetchInstagramVideo(igUrl);

    if (!result || result.length === 0) {
      return m.reply('Gagal mengunduh video. Pastikan URL benar.');
    }

    const {
      url
    } = result[0];

    m.reply('Video berhasil ditemukan! Mengirim video...');
    await fuzzy.sendFile(m.chat, url, 'ig_video.mp4', 'Berikut video yang berhasil diunduh.', m);
  } catch (error) {
    console.error('Error fetching Instagram video:', error);
    m.reply('Maaf, terjadi kesalahan saat mengunduh video.');
  }

}
break;

case 'tiksave': {
  reply('Tunggu sebentar, sedang mengunduh video TikTok...');

  async function fetchTikTokVideo(url) {
    const res = await axios.get(`${apiUrlw}/api/tiksave?url=${encodeURIComponent(url)}`);
    return res.data;
  }

  const tiktokUrl = args[0];
  if (!tiktokUrl) {
    return m.reply('Masukkan URL TikTok yang ingin diunduh.');
  }

  try {
    const videoData = await fetchTikTokVideo(tiktokUrl);

    if (!videoData.success) {
      return m.reply('Gagal mengunduh video. Pastikan URL benar.');
    }

    const {
      title,
      videoData: {
        thumbnail,
        downloadLinks
      }
    } = videoData.data;

    const downloadLink = downloadLinks[0].link; // Mendapatkan link unduhan pertama

    await fuzzy.sendFile(m.chat, downloadLink, `ttsave.mp4`, `Nihh".`, m);
  } catch (error) {
    console.error('Error fetching TikTok video:', error);
    m.reply('Maaf, terjadi kesalahan saat mengunduh video.');
  }

}
break;


case 'tt':
case 'tiktok': {
  try {
    if (!text.startsWith('http')) return reply("Masukkan URL yang valid.");
    m.reply('_Mohon tunggu, sedang memproses..._')
    const apiUrl = `${apiUrlw}/api/tiktok?url=${text}`;
    const response = await axios.get(apiUrl);
    const {
      status,
      result
    } = response.data;

    if (!status) {
      return reply("Gagal mendapatkan data. Pastikan URL valid.");
    }

    const title = result.title || "Judul tidak tersedia";
    const author = result.author || "Pembuat tidak diketahui";
    const {
      nowm,
      audio
    } = result;

    let key = await fuzzy.sendMessage(m.chat, {
      video: {
        url: nowm,
      },
      caption: ` Judul: ${title}\n Pembuat: ${author}`,
      fileName: `tiktok.mp4`,
      mimetype: 'video/mp4'
    }, {
      quoted: m
    });

    await fuzzy.sendMessage(m.chat, {
      audio: {
        url: audio,
      },
      fileName: `tiktok.mp3`,
      mimetype: 'audio/mp4'
    }, {
      quoted: key
    });
  } catch (error) {
    console.error("Error fetching TikTok data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data TikTok.");
  }
}
break;
 case 'ytmp3': {
       
  if (!text) return reply(`Gunakan dengan format ${command} link\n\nContoh:\n\n${command} link`);
  
  try {

    // Gunakan scraper baru (Ytdl function)
    const result = await yetedln(text, "audio", "320");
    
    // Siapkan dokumen audio
    let doc = {
      audio: {
        url: result.download
      },
      mimetype: 'audio/mpeg',
      fileName: `${result.title}.mp3`,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: result.title,
          body: `Duration: ${result.duration || "Unknown"}`,
          thumbnailUrl: result.thumbnail,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    };

    // Kirim pesan sedang diproses
    reply(`⏳ Sedang mengunduh audio...\n\n${result.title}`);
    
    // Kirim audio
    await fuzzy.sendMessage(from, doc, {
      quoted: m
    });


  } catch (error) {
    console.error("Error fetching song:", error);
    reply("Maaf, terjadi kesalahan saat mencari data lagu. Coba lagi nanti.");
  }
}
break;
      case 'pinterestdl':
      case 'pindl': {
        const {
          JSDOM
        } = require("jsdom");

        class Pinterest {
          async getURL(url) {
            try {
              const response = await axios.get(url);
              const dom = new JSDOM(response.data);
              const document = dom.window.document;
              let contentUrl = '';
              const video = document.querySelector('video');
              if (video) {
                const videoUrl = video.getAttribute('src');
                contentUrl = videoUrl.replace('hls', '720p').replace('.m3u8', '.mp4');
              }
              else {
                const img = document.querySelector('meta[property="og:image"]');
                if (img) {
                  contentUrl = img.getAttribute('content');
                }
              }
              return contentUrl;
            }
            catch (error) {
              console.error('Error:', error.message);
              return '';
            }
          }

          async getBuffer(rawUrl) {
            try {
              const url = await this.getURL(rawUrl);
              const response = await axios.get(url, {
                responseType: 'arraybuffer'
              });
              return response.data;
            }
            catch (error) {
              console.error('Error:', error.message);
              return null;
            }
          }
        }

        if (!args[0]) {
          return reply(m.chat, `Harap masukkan URL Pinterest.\nContoh: ${usedPrefix}${command} <url>`, m);
        }

        const url = args[0];
        const pinterest = new Pinterest();

        await fuzzy.sendMessage(m.chat, {
          react: {
            text: '🕒',
            key: m.key
          }
        });

        const buffer = await pinterest.getBuffer(url);

        if (buffer) {
          const contentUrl = await pinterest.getURL(url);
          const isImage = contentUrl.endsWith('.jpg') || contentUrl.endsWith('.png') || contentUrl.endsWith('.jpeg');
          if (isImage) {
            await fuzzy.sendMessage(m.chat, {
              image: buffer,
              caption: "Berhasil mengunduh gambar dari Pinterest!"
            }, {
              quoted: m
            });
          }
          else {
            await fuzzy.sendMessage(m.chat, {
              video: buffer,
              caption: "Berhasil mengunduh video dari Pinterest!"
            }, {
              quoted: m
            });
          }
        }
        else {
          reply("Gagal mengambil konten dari URL yang diberikan. Pastikan URL benar atau coba lagi nanti.");
        }
      }
      break
case 'ytmp4': {
  if (!text) return reply(`Gunakan dengan format ${command} link\n\nContoh:\n\n${command} link`);
          
  try {
    // Tentukan kualitas video, default ke 720p jika tidak ditentukan
    let quality = "720";
    
    // Gunakan scraper baru
    const result = await yetedln(text, "video", quality);
    
    // Kirim pesan sedang diproses
    reply(`⏳ Sedang mengunduh video...\n\n${result.title}\nKualitas: ${result.quality}`);
    
    // Kirim video
    await fuzzy.sendMessage(from, {
      video: { url: result.download },
      caption: `*${result.title}*\n\n⏱️ Duration: ${result.duration || "Unknown"}\n📊 Quality: ${result.quality}\n👤 Uploader: ${result.uploader || "Unknown"}`,
      mimetype: 'video/mp4',
      fileName: `${result.title}.mp4`
    }, { quoted: m });
   

    
  } catch (error) {
    console.error("Error fetching video:", error);
    reply("Maaf, terjadi kesalahan saat mencari data video. Coba lagi nanti.");
  }
}
break;
case 'play': {
  if (!text) return m.reply(`• Example :* .play *[query]`)
  m.reply('_Mohon tunggu, sedang memproses..._')

  const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
  const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

  const ddownr = {
    download: async (url, format) => {
      if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
        throw new Error('Format nya gk support wak, coba cek lagi listnya.');
      }

      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        const response = await axios.request(config);

        if (response.data && response.data.success) {
          const {
            id,
            title,
            info
          } = response.data;
          const {
            image
          } = info;
          const downloadUrl = await ddownr.cekProgress(id);

          return {
            id: id,
            image: image,
            title: title,
            downloadUrl: downloadUrl
          };
        } else {
          throw new Error('Failed to fetch video details.');
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    cekProgress: async (id) => {
      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        while (true) {
          const response = await axios.request(config);

          if (response.data && response.data.success && response.data.progress === 1000) {
            return response.data.download_url;
          }
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
  }

  try {
    const searchResults = await yts(text)
    if (!searchResults.videos.length) {
      return m.reply('Tidak menemukan video yang cocok.')
    }

    const videoData = searchResults.videos[0]
    const videoUrl = videoData.url

    try {
      const downloadResult = await ddownr.download(videoUrl, 'mp3')

      if (!downloadResult || !downloadResult.downloadUrl) {
        return m.reply('Gagal mendapatkan audio. Pastikan query valid.')
      }

      await fuzzy.sendMessage(m.chat, {
        audio: {
          url: downloadResult.downloadUrl
        },
        mimetype: "audio/mpeg",
        fileName: `${downloadResult.title || 'Play Downloader'}.mp3`,
      }, {
        quoted: m
      })


    } catch (scraperError) {
      console.error('Scraper error:', scraperError)
      return m.reply('Terjadi kesalahan saat mengunduh audio. Silakan coba lagi.')
    }

  } catch (searchError) {
    console.error('Search error:', searchError)
    return m.reply('Terjadi kesalahan saat mencari video. Silakan coba lagi.')
  }
}
break
//======[ SEARCH ]======\\
case 'pin':
case 'pinterest': {
    if (!args[0]) return m.reply("Masukkan kata kunci pencarian! Contoh: *!pinterest cat*");

    let query = args.join(" ");
    let url = `https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(query)}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (!data.status || !Array.isArray(data.data) || data.data.length === 0) {
            return m.reply("Gagal mengambil gambar. Coba kata kunci lain!");
        }

        let images = data.data.slice(0, 3); // Ambil 3 gambar pertama

        let mediaArray = images.map(item => ({
            image: { url: item.images_url },
            caption: `📌 *Pin:* ${item.pin}\n📆 *Tanggal:* ${item.created_at}\n🖼️ *Judul:* ${item.grid_title || "Tidak ada"}`
        }));

        for (let media of mediaArray) {
            await fuzzy.sendMessage(from, media, { quoted: m });
        }

    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil data.");
    }
}
break;
case 'emojimix': {
  if (!text.includes('+')) return reply(`Contoh: ${prefix + command} 😂+😭`)
  let [emoji1, emoji2] = text.split('+')
  if (!emoji1 || !emoji2) return reply(`Contoh: ${prefix + command} 😂+😭`)
  try {
    let res = await fetch(`https://fastrestapis.fasturl.cloud/maker/emojimix?emoji1=${emoji1}&emoji2=${emoji2}`)
    let buffer = await res.buffer()
    await fuzzy.sendImageAsSticker(m.chat, buffer, m, {
      packname: ``,
      author: `${ownername}`
    })
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan: '+err)
  }
}
break
case 'kuromi': {
  try {
    let query = 'kuromi';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'dino': {
  try {
    let query = 'dino kuning';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'pucoyo': case 'pocoyo': {
  try {
    let query = 'pocoyo';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'caribuku': {
  if (!text) return reply(`Gunakan dengan cara ${command} *judul*\n\n_Contoh_\n\n${command} Nayla`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "📚",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API cari buku
    let {
      data
    } = await axios.get(`${apiUrlw}/api/caribuku?query=${text}`);

    // Cek apakah respons memiliki data buku
    if (!data || !data.length) {
      return reply("Tidak ada buku yang ditemukan. Silakan coba dengan judul yang berbeda.");
    }

    // Menyusun hasil buku dalam format pesan
    let bukuList = `Hasil Pencarian Buku untuk *"${text}"*:\n\n`;
    data.slice(0, 5).forEach((buku, index) => {
      bukuList += `*${index + 1}. ${buku.title}*\n`;
      bukuList += `📖 Rating: ${buku.rating}\n`;
      bukuList += `🔗 [Goodreads Link](${buku.link})\n\n`;
    });

    reply(bukuList); // Menampilkan hasil buku

  } catch (error) {
    console.error("Error fetching book data:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data buku. Silakan coba lagi nanti.");
  }
}
break;

case 'rumaysho': {
  if (!text) return reply(`Gunakan dengan cara ${command} *topik*\n\n_Contoh_\n\n${command} Jum'at`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "⏱️",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API Rumaysho
    let {
      data
    } = await axios.get(`${apiUrlw}/api/rumaysho?query=${encodeURIComponent(text)}`);

    // Cek apakah data yang diterima bukan array kosong
    if (!data || data.length === 0) {
      reply("Maaf, artikel tidak ditemukan untuk pencarian ini.");
      return;
    }

    // Membuat teks hasil pencarian artikel
    let hasil = '*Hasil Pencarian Artikel*:\n\n';
    data.forEach((item, index) => {
      hasil += `*${index + 1}. ${item.title}*\n`;
      hasil += `🔗 ${item.link}\n\n`;
    });

    reply(hasil);
  } catch (error) {
    console.error("Error fetching articles:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.");
  }
}
break;
case 'kajian': {
  if (!text) return reply(`Gunakan dengan cara ${command} *topik*\n\n_Contoh_\n\n${command} Kajian Rutin Kamis Sore`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "⏱️",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API YPIA
    let {
      data
    } = await axios.get(`${apiUrlw}/api/ypia?query=${encodeURIComponent(text)}`);

    // Cek apakah data yang diterima bukan array kosong
    if (!data || data.length === 0) {
      reply("Maaf, tidak ditemukan kajian untuk topik yang dicari.");
      return;
    }

    // Membuat teks hasil pencarian kajian
    let hasil = '*Hasil Pencarian Kajian*:\n\n';
    data.forEach((item, index) => {
      hasil += `*${index + 1}. ${item.title}*\n`;
      hasil += `🔗 ${item.link}\n\n`;
    });

    reply(hasil);
  } catch (error) {
    console.error("Error fetching kajian:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.");
  }
}
break;
case 'soundc':
case 'soundcloud': {
  // Mengecek apakah pengguna memberikan query pencarian
  if (!text) return reply(`Gunakan dengan format ${command} *judul lagu*\n\nContoh:\n\n${command} helena`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "🔍",
      key: m.key
    }
  });

  try {
    // Mengirim request ke API dengan query
    let response = await axios.get(`${apiUrlw}/api/soundcloud?query=${encodeURIComponent(text)}`);

    // Mengambil data dari hasil API
    let results = response.data;

    // Mengecek apakah ada hasil
    if (results.length > 0) {
      let message = `Hasil pencarian SoundCloud untuk *"${text}"*:\n\n`;

      // Looping hasil dan format menjadi string
      results.forEach((item, index) => {
        message += `${index + 1}. *${item.title}*\n`;
        if (item.creator) message += `   🎙️ Creator: ${item.creator}\n`;
        if (item.views) message += `   👀 Views: ${item.views}\n`;
        if (item.duration) message += `   ⏱️ Duration: ${item.duration}\n`;
        if (item.uploadDate) message += `   📅 Uploaded: ${item.uploadDate}\n`;
        message += `   🔗 [Link](${item.url})\n\n`;
      });

      reply(message);
    } else {
      reply("Maaf, tidak ada hasil yang ditemukan untuk pencarian tersebut.");
    }
  } catch (error) {
    console.error("Error fetching SoundCloud results:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data dari SoundCloud.");
  }
}
break;

case 'gamedva': {
  try {
    if (!text) return reply("Masukkan query untuk pencarian.");

    const apiUrl = `${apiUrlw}/api/gamedva?query=${encodeURIComponent(text)}&url=&type=searchApp`;

    const response = await axios.get(apiUrl);
    res = response.data

    if (res.length === 0) {
      return reply("Tidak ditemukan hasil pencarian.");
    }

    const message = res.map(res => {
      const {
        title,
        developer,
        link,
        image,
        version
      } = res
      return `🎮 **${title}**\n🔗 link: ${link}\nimage: ${image}\nversion: ${version}`;
    }).join("\n");

    reply(message);
  } catch (error) {
    console.error("Error fetching GameDVA data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data.");
  }
}
break;
//======[ BERITA ]======\\
case 'gempa': {
  try {
    const apiUrl = `${apiUrlw}/api/gempa`;

    const response = await axios.get(apiUrl);
    const {
      status,
      data
    } = response.data;

    if (status !== "success") {
      return reply("Gagal mendapatkan data gempa.");
    }

    const {
      gempa
    } = data.Infogempa;
    const {
      Tanggal,
      Jam,
      Coordinates,
      Lintang,
      Bujur,
      Magnitude,
      Kedalaman,
      Wilayah,
      Potensi,
      Dirasakan,
      Shakemap
    } = gempa;

    // Menyusun pesan detail gempa
    const message = `
      🌀 **Info Gempa** 🌀
      📅 Tanggal: ${Tanggal}
      🕒 Jam: ${Jam}
      📍 Koordinat: ${Coordinates} (${Lintang}, ${Bujur})
      🌍 Wilayah: ${Wilayah}
      ⚖️ Magnitude: ${Magnitude}
      🌊 Kedalaman: ${Kedalaman}
      💨 Potensi: ${Potensi}
      🌍 Dirasakan: ${Dirasakan}
    `;

    reply(message);
  } catch (error) {
    console.error("Error fetching Gempa data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data gempa.");
  }
}
break;
case 'liputan6': {
  reply('Tunggu sebentar, sedang mengambil data...');

  // Fungsi untuk mengambil data dari API
  async function fetchNews() {
    const res = await axios.get(`${apiUrlw}/api/liputan6`);
    return res.data.data;
  }

  try {
    const newsData = await fetchNews();

    if (!newsData || newsData.length === 0) {
      return m.reply('Tidak ada berita ditemukan.');
    }

    // Gabungkan semua berita ke dalam satu pesan
    let allNews = `*Berita Terbaru dari Liputan6*\n\n`;

    newsData.forEach((item, index) => {
      const {
        title,
        link,
        tag,
        image,
        source
      } = item;

      allNews += `*Berita ${index + 1}*\n` +
        `▢ *Judul* : ${title}\n` +
        `▢ *Tag* : ${tag || 'Tidak ada tag'}\n` +
        `▢ *Sumber* : ${source}\n` +
        `▢ *Link* : [Baca Selengkapnya](${link})\n\n`;
    });

    // Kirim semua berita dalam satu pesan
    m.reply(allNews);
  } catch (error) {
    console.error('Error fetching news:', error);
    m.reply('Maaf, terjadi kesalahan saat mengambil berita.');
  }
}
break;
//======[ TOOLS ]======\\
case 'ssweb': {
  if (!text) return reply(`Gunakan dengan cara ${command} *link*\n\n_Contoh_\n\n${command} https://xZiyy.com`);

  if (!text.startsWith('https://')) {
    return reply('Link harus menggunakan https://');
  }

  let ss = await (await fetch(`https://image.thum.io/get/fullpage/${text}`)).buffer();
  fuzzy.sendFile(m?.chat, ss, "", "Done", m);
}
break;
    case 'tourl': {
        if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
        try {
          let media = await fuzzy.downloadAndSaveMediaMessage(quoted, makeid(5))
          let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
            console.log(stdout)
            return reply(stdout)
          })
        }
        catch (error) {
          console.log(error)
          return reply("Error...")
        }
      }
      break
case 'translate': {

  async function fetchTranslation(text, target) {
    const res = await axios.get(`${apiUrlw}/api/translate?text=${encodeURIComponent(text)}&target=${target}`);
    return res.data;
  }

  const swn = args.join(" ")
  const text = swn.split(",")[0];
  const target = swn.split(",")[1];

  if (!text) {
    return m.reply('Masukkan teks yang ingin diterjemahkan.\ncontoh:\n!translate hello world, en\n!translate hello world, id\n\nketik !languages untuk melihat bahasa');
  }

  if (!target) {
    return m.reply('Masukkan teks yang ingin diterjemahkan.\ncontoh:\n!translate hello world, en\n!translate hello world, id\n\nketik !languages untuk melihat bahasa');
  }

  try {
    const result = await fetchTranslation(text, target);

    if (!result.success) {
      return m.reply('Gagal menerjemahkan teks.');
    }

    const {
      translatedText
    } = result;
    m.reply(`Hasil terjemahan:\n\n${translatedText}`);
  } catch (error) {
    console.error('Error fetching translation:', error);
    m.reply('Maaf, terjadi kesalahan saat menerjemahkan teks.');
  }
}
break;
case 'languages': {
  reply('Tunggu sebentar, sedang mengambil daftar bahasa...');

  async function fetchLanguages() {
    const res = await axios.get(`${apiUrlw}/api/languages`);
    return res.data;
  }

  try {
    const result = await fetchLanguages();

    if (!result.success) {
      return m.reply('Gagal mengambil daftar bahasa.');
    }

    const {
      languages
    } = result;
    let languageList = '*Daftar Bahasa yang Tersedia*\n\n';

    for (const [code, name] of Object.entries(languages)) {
      languageList += `▢ ${name} (${code})\n`;
    }

    m.reply(languageList);
  } catch (error) {
    console.error('Error fetching languages:', error);
    m.reply('Maaf, terjadi kesalahan saat mengambil daftar bahasa.');
  }

}
break;
//======[ OWNER ]======\\
      case 'delsesi':
      case 'clear':
      case 'ds':
      case 'clearsession': {
        if (!isCreator) return reply(mess.owner)
        fs.readdir("./media/database/session", async function (err, files) {
          if (err) {
            console.log('Unable to scan directory: ' + err);
            return reply('Unable to scan directory: ' + err);
          }
          let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
          )
          console.log(filteredArray.length);
          /*let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return reply(teks)
          filteredArray.map(function(e, i) {
          teks += (i + 1) + `. ${e}\n`
          })
          reply(teks)
          await sleep(2000)*/
          reply("Menghapus file sampah...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./media/database/session/${file}`)
          });
          await sleep(2000)
          reply("Berhasil menghapus semua sampah di folder session")
        });
      }
      break
      case 'delsampah': {
        if (!isCreator) return reply(mess.owner)
        let directoryPath = path.join('./media/tmp') //&& './media') //path.join();
        fs.readdir(directoryPath, async function (err, files) {
          if (err) {
            return reply('Tidak dapat memindai direktori: ' + err);
          }
          let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm") || item.endsWith("bin"))
          var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return reply(teks)
          filteredArray.map(function (e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          reply(teks)
          await sleep(2000)
          m.reply("Menghapus file sampah...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./media/tmp/${file}`) //&& `./media/${file}`) 
          });
          await sleep(2000)
          reply("Berhasil menghapus semua sampah")
        });
      }
      break
      case 'backup': {
        if (!isCreator) return reply(mess.owner)
        await reply('akan dikirim me nomor owner..');
        const {
          execSync
        } = require("child_process");
        const ls = (await execSync("ls"))
          .toString()
          .split("\n")
          .filter(
            (pe) =>
            pe != "node_modules" &&
            pe != "package-lock.json" &&
            pe != "yarn.lock" &&
            pe != ""
          );
        const dyn = moment.tz('Asia/Jakarta').format('dddd-DD-MMMM-YYYY')
        const exec = await execSync(`zip -r clairity-${dyn}.zip ${ls.join(" ")}`);
        await fuzzy.sendMessage(`${global.owner}@s.whatsapp.net`, {
          document: await fs.readFileSync(`./clairity-${dyn}.zip`),
          mimetype: "application/zip",
          fileName: `clairity-${dyn}.zip`,
        }, {
          quoted: m
        });
        await execSync(`rm -rf clairity-${dyn}.zip`);
      }
      break
      case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply("dengan reply pesannya")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return fuzzy.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return fuzzy.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return fuzzy.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case 'creator':
case 'owner': {
  const Kontol = await m.reply("ini dia ownerku yang baik hati dan tidak sombong, jangan di spam yaa kalo gak di bales!!")
  const options = {
    contextInfo: {
      forwardingScore: 10,
      isForwarded: true
    }
  }; // Opsional
  fuzzy.sendContact(from, global.owner, Kontol, options)
}
break
case 'setimgmenu': {
         if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
        try {
          let media = await fuzzy.downloadAndSaveMediaMessage(quoted, makeid(5))
          let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
  global.menuimgUrl = stdout
  reply(`succes`)
            })
        }
        catch (error) {
          console.log(error)
          return reply("Error...")
        }

}
break
case 'setimgreply': {
         if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
        try {
          let media = await fuzzy.downloadAndSaveMediaMessage(quoted, makeid(5))
          let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
  global.imgUrl = stdout
  reply(`succes`)
            })
        }
        catch (error) {
          console.log(error)
          return reply("Error...")
        }

}
break
case 'setbotname': {
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.botname = text
}
break
case 'setownername': {
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.ownername = text
}
break
case 'setownernumber': {
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.owner = text
}
break
case 'tes': {
  reply('aktif kak')
}
break
case 'onlygroup':
case 'onlygc':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
  db.data.settings[botNumber].onlygrub = true
  db.data.settings[botNumber].onlypc = true
  reply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
  db.data.settings[botNumber].onlygrub = false
  db.data.settings[botNumber].onlypc = false
  reply(`Successfully Changed Onlygroup To ${q}`)
}
break
case 'banchat': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "on") {
    db.data.chats[m?.chat].isBannedChat = true
    reply("berhasil banchat")
  } else if (args[0] == "off") {
    db.data.chats[m?.chat].isBannedChat = false
    reply("berhasil unbanchat")
  } else {
    reply('contoh:\n!banchat on')
  }
}
break

case 'mode': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "public") {
    if (db.data.settings[botNumber].public == true) return reply("Sudah Active")
    db.data.settings[botNumber].public = true
    reply("Public mode Activated")
  } else if (args[0] == "self") {
    if (db.data.settings[botNumber].public == false) return reply("Sudah Off")
    db.data.settings[botNumber].public = false
    reply("Mode Self is Active")
  }
}
break

case 'ai': {
  if (!args[0]) {
    return m.reply("Gunakan perintah:\n- .ai on (untuk mengaktifkan AI)\n- .ai off (untuk menonaktifkan AI)");
  }

  if (args[0].toLowerCase() === "on") {
    if (!global.db.data.chats[m?.chat]) global.db.data.chats[m?.chat] = {};
    global.db.data.chats[m?.chat].autoai = true;
    return m.reply("Fitur AI telah diaktifkan untuk chat ini.");
  } else if (args[0].toLowerCase() === "off") {
    if (!global.db.data.chats[m?.chat]) global.db.data.chats[m?.chat] = {};
    global.db.data.chats[m?.chat].autoai = false;
    return m.reply("Fitur AI telah dinonaktifkan untuk chat ini.");
  } else {
    return m.reply("Pilihan tidak valid! Gunakan:\n- .ai on (untuk mengaktifkan AI)\n- .ai off (untuk menonaktifkan AI)");
  }
}
break
//++++++++[ STICKER ]++++++++++
      case 'bratvidio': 
      case 'bratvideo': {
        const ongoingCommands = new Set(); // Set untuk melacak proses berjalan

        // Cek apakah pengguna sudah menjalankan perintah
        if (ongoingCommands.has(m.sender)) {
          return m.reply('Maaf, masih ada perintah yang sedang berjalan. Tunggu sampai selesai.');
        }

        // Tandai pengguna sebagai sedang menjalankan perintah
        ongoingCommands.add(m.sender);

        try {
          if (!text) return reply(`Contoh: ${prefix + command} hai`);
          if (text.length > 250) return reply(`Karakter terbatas, max 250!`);

          const {
            execSync
          } = require('child_process');
          const words = text.split(" ");
          const tempDir = path.resolve('./media/tmp');
          if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
          const framePaths = [];

          for (let i = 0; i < words.length; i++) {
            const currentText = words.slice(0, i + 1).join(" ");

            const res = await axios.get(
              `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`, {
                responseType: "arraybuffer"
              }
            ).catch((e) => e.response);

            const framePath = path.join(tempDir, `frame${i}.mp4`);
            fs.writeFileSync(framePath, res.data);
            framePaths.push(framePath);
          }

          const fileListPath = path.join(tempDir, "filelist.txt");
          let fileListContent = "";

          for (let i = 0; i < framePaths.length; i++) {
            fileListContent += `file '${framePaths[i]}'\n`;
            fileListContent += `duration 0.7\n`;
          }

          fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
          fileListContent += `duration 2\n`;

          fs.writeFileSync(fileListPath, fileListContent);
          const outputVideoPath = path.join(tempDir, "output.mp4");
          execSync(
            `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
          );

          await fuzzy.sendImageAsSticker(m.chat, outputVideoPath, m, {
            packname: `${m.pushName}\n\n\n\n\n\n\n\n${global.packname}`,
            author: global.author,
          });
 
          framePaths.forEach((frame) => {
            if (fs.existsSync(frame)) fs.unlinkSync(frame);
          });
          if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
          if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
        }
        catch (e) {
          console.error(e);
          reply('Terjadi kesalahan');
        }
        finally {
          ongoingCommands.delete(m.sender); // Hapus pengguna dari daftar proses berjalan
        }
        break;
      }
case 'igstalk': {
    if (!args[0]) return m.reply("Masukkan username Instagram! Contoh: *#stalkig siputzx_*");

    let username = args[0];
    let url = `https://api.siputzx.my.id/api/stalk/Instagram?user=${username}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (!data.status) return m.reply("Gagal mengambil data. Pastikan username benar.");

        let user = data.data.user;
        let result = `*Instagram Stalker*\n\n` +
            `🔹 *Username:* ${user.username}\n` +
            `🔹 *Full Name:* ${user.full_name}\n` +
            `🔹 *Bio:* ${user.biography}\n` +
            `🔹 *Kategori:* ${user.category || "Tidak ada"}\n` +
            `🔹 *Followers:* ${user.follower_count}\n` +
            `🔹 *Following:* ${user.following_count}\n` +
            `🔹 *Posts:* ${user.media_count}\n` +
            `🔹 *Verified:* ${user.is_verified ? "✅ Yes" : "❌ No"}\n` +
            `🔹 *Private:* ${user.is_private ? "🔒 Yes" : "🔓 No"}\n` +
            `🔹 *Business Account:* ${user.is_business ? "✅ Yes" : "❌ No"}\n` +
            `🔹 *External URL:* ${user.external_url || "Tidak ada"}\n`;

        let profilePic = user.hd_profile_pic ? user.hd_profile_pic.url : user.profile_pic_url;
        
        fuzzy.sendMessage(from, { image: { url: profilePic }, caption: result }, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil data.");
    }
}
break;
    case 'tiktokstalk':
  case 'tikstalk': {
        if (!text) return m.reply('Masukkan username TikTok');

        try {
          // Validasi input username
          if (!text.trim()) return m.reply('Username tidak boleh kosong');

          // Ambil data dari API
          const response = await axios.get(`https://api.siputzx.my.id/api/stalk/tiktok?username=${text}`);
          const userData = response.data.data;

          // Susun pesan dengan SELURUH informasi yang didapatkan
          let pesan = `*📋 INFORMASI AKUN TIKTOK LENGKAP* 

👤 *PROFIL DASAR*
• Nama Panggilan: ${userData.user.nickname}
• ID Pengguna: ${userData.user.id}
• ID Unik: ${userData.user.uniqueId}
• Short ID: ${userData.user.shortId || 'Tidak tersedia'}
• Sec UID: ${userData.user.secUid}
• Bio: ${userData.user.signature}
• Wilayah: ${userData.user.region}
• Bahasa: ${userData.user.language}

🔍 *STATUS AKUN*
• Terverifikasi: ${userData.user.verified ? 'Ya' : 'Tidak'}
• Akun Pribadi: ${userData.user.privateAccount ? 'Ya' : 'Tidak'}
• Akun Rahasia: ${userData.user.secret ? 'Ya' : 'Tidak'}
• Organisasi: ${userData.user.isOrganization ? 'Ya' : 'Tidak'}

📊 *STATISTIK*
• Pengikut: ${userData.stats.followerCount.toLocaleString()}
• Mengikuti: ${userData.stats.followingCount.toLocaleString()}
• Total Like: ${userData.stats.heartCount.toLocaleString()}
• Jumlah Video: ${userData.stats.videoCount.toLocaleString()}
• Jumlah Disukai: ${userData.stats.diggCount.toLocaleString()}
• Jumlah Teman: ${userData.stats.friendCount.toLocaleString()}

🖼️ *AVATAR*
• Avatar Besar: ${userData.user.avatarLarger}
• Avatar Sedang: ${userData.user.avatarMedium}
• Avatar Kecil: ${userData.user.avatarThumb}

⚙️ *PENGATURAN*
• Pengaturan Komentar: ${userData.user.commentSetting}
• Pengaturan Duet: ${userData.user.duetSetting}
• Pengaturan Stitch: ${userData.user.stitchSetting}
• Pengaturan Download: ${userData.user.downloadSetting}

🌐 *TAUTAN & KONEKSI*
• Tautan Bio: ${userData.user.bioLink?.link || 'Tidak tersedia'}
• Risiko Tautan: ${userData.user.bioLink?.risk || 'Tidak diketahui'}

📅 *INFORMASI WAKTU*
• Waktu Pembuatan Akun: ${new Date(userData.user.createTime * 1000).toLocaleString()}
• Waktu Modifikasi Nama: ${new Date(userData.user.nickNameModifyTime * 1000).toLocaleString()}

🎵 *TAB PROFIL*
• Tab Musik: ${userData.user.profileTab.showMusicTab ? 'Aktif' : 'Tidak Aktif'}
• Tab Pertanyaan: ${userData.user.profileTab.showQuestionTab ? 'Aktif' : 'Tidak Aktif'}
• Tab Playlist: ${userData.user.profileTab.showPlayListTab ? 'Aktif' : 'Tidak Aktif'}

🏷️ *INFORMASI TAMBAHAN*
• Pengguna Komersial: ${userData.user.commerceUserInfo?.commerceUser ? 'Ya' : 'Tidak'}
• Jual di TikTok: ${userData.user.ttSeller ? 'Ya' : 'Tidak'}
• Visibilitas Mengikuti: ${userData.user.followingVisibility}
• Room ID: ${userData.user.roomId || 'Tidak tersedia'}`;

          // Kirim pesan
          m.reply(pesan);

        }
        catch (error) {
          console.error('Error:', error);

          // Tangani berbagai jenis kesalahan
          if (error.response) {
            // Kesalahan respons dari server
            if (error.response.status === 404) {
              m.reply('Username TikTok tidak ditemukan');
            }
            else {
              m.reply(`Gagal mengambil data. Status: ${error.response.status}`);
            }
          }
          else if (error.request) {
            // Permintaan terkirim tapi tidak ada respons
            m.reply('Tidak ada respons dari server');
          }
          else {
            // Kesalahan lainnya
            m.reply('Terjadi kesalahan saat mengambil data');
          }
        }
      }
      break;
      case 'githubstalk': {
        if (!text) return m.reply('Masukkan username GitHub');

        try {
          // Validasi input username
          if (!text.trim()) return m.reply('Username tidak boleh kosong');

          // Ambil data dari API
          const response = await axios.get(`https://api.siputzx.my.id/api/stalk/github?user=${text}`);
          const userData = response.data.data;

          // Konversi tanggal
          const createdAt = new Date(userData.created_at).toLocaleString('id-ID', {
            dateStyle: 'full',
            timeStyle: 'long'
          });
          const updatedAt = new Date(userData.updated_at).toLocaleString('id-ID', {
            dateStyle: 'full',
            timeStyle: 'long'
          });

          // Susun pesan dengan informasi yang didapatkan
          let pesan = `*📋 INFORMASI PROFIL GITHUB* 

👤 *IDENTITAS*
• Username: ${userData.username}
• Nama Lengkap: ${userData.nickname}
• ID Pengguna: ${userData.id}
• Node ID: ${userData.nodeId}
• Tipe Akun: ${userData.type}

📝 *INFORMASI PROFIL*
• Bio: ${userData.bio || 'Tidak ada bio'}
• Perusahaan: ${userData.company || 'Tidak disebutkan'}
• Blog/Website: ${userData.blog || 'Tidak ada'}
• Lokasi: ${userData.location || 'Tidak disebutkan'}
• Email: ${userData.email || 'Tidak publik'}

🔢 *STATISTIK*
• Repository Publik: ${userData.public_repo}
• Gist Publik: ${userData.public_gists}
• Pengikut: ${userData.followers}
• Mengikuti: ${userData.following}

🖼️ *AVATAR*
• Foto Profil: ${userData.profile_pic}

🔗 *TAUTAN*
• Profil GitHub: ${userData.url}

📅 *INFORMASI WAKTU*
• Akun Dibuat: ${createdAt}
• Terakhir Diperbarui: ${updatedAt}

⚙️ *STATUS TAMBAHAN*
• Admin: ${userData.admin ? 'Ya' : 'Tidak'}`;

          // Kirim pesan
          m.reply(pesan);

        }
        catch (error) {
          console.error('Error:', error);

          // Tangani berbagai jenis kesalahan
          if (error.response) {
            // Kesalahan respons dari server
            if (error.response.status === 404) {
              m.reply('Username GitHub tidak ditemukan');
            }
            else {
              m.reply(`Gagal mengambil data. Status: ${error.response.status}`);
            }
          }
          else if (error.request) {
            // Permintaan terkirim tapi tidak ada respons
            m.reply('Tidak ada respons dari server');
          }
          else {
            // Kesalahan lainnya
            m.reply('Terjadi kesalahan saat mengambil data');
          }
        }
      }
      break;
      case 'bisakah': {
        if (!m.isGroup) return reply(acn.group)
        const bisakah = body.slice(0)
        const bisa = ['BISA', 'Tidak Bisa', 'Oh tentu saja bisa dong', 'Udah dari lahir dia bisa kaya gitu kak 😂˜„', 'Oh tentu saja tidak bisa', 'Wuih bisa bisa', 'Ga mao jawab ah lu wibu', 'Tentu saja bisa eh tapi boong awokawok ', 'Engga engga dia ga bisa', 'Enggaklah', 'Aku ga mao jawbab 😆™‚', 'Rahasia dong', 'Ulangi Tod gua ga paham', 'Mana gua tau anjir']
        const keh = bisa[Math.floor(Math.random() * bisa.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + bisakah + '*\n\n*Jawaban :* ' + keh
        }, {
          quoted: m
        })
      }
      break
      case 'bagaimanakah': {
        if (!m.isGroup) return m.reply('Kusus group')
        const bagaimanakah = body.slice(0)
        const bagai = ['Kita Kenal?', 'Nanya Terus deh', 'Tidak Tahu', 'Gua tabok boleh ?', 'Cari Aja Sendiri', 'Kurang Tahu', 'Mana Saya Tahu, Saya kan ikan', 'Hah kamu tanya sama aku trus aku tanya ke siapa dong', 'Whahahaha ga tau 😑']
        const mana = bagai[Math.floor(Math.random() * bagai.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: ``,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + bagaimanakah + '*\n\n*Jawaban :* ' + mana
        }, {
          quoted: m
        })
      }
      break
      case 'apakah': {
        if (!m.isGroup) return m.reply('Kusus group')
        const apakah = body.slice(0)
        const apa = ['iya dong jelas itu', 'Tidak lah', 'Oh tentu saja tidak', 'Yo ndak tau kok tanya saya', 'Rahasia dong', 'Au ah mending mandi', 'Bentar aku lagi berak', 'Haha mna mungkin 👻']
        const kah = apa[Math.floor(Math.random() * apa.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `wa.me/6281316643491`,
            }
          },
          text: '*Pertanyaan : ' + apakah + '*\n\n*Jawaban :* ' + kah
        }, {
          quoted: m
        })
      }
      break
      case 'kapankah': {
        if (!m.isGroup) return m.reply('Kusus group')
        const kapankah = body.slice(0)
        const kapan = ['Besok', 'Lusa', '1 Hari Lagi', '2 Hari Lagi', '3 Hari Lagi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '7 Bulan Lagi', '8 Bulan Lagi', '9 Bulan Lagi', '10 Bulan Lagi', '11 Bulan Lagi', '1 Tahun lagi', '2 Tahun lagi', '3 Tahun lag0i', '4 Tahun lagi', '5 Tahun lagi', '6 Tahun lagi', '7 Tahun lagi', '8 Tahun lagi', '9 Tahun lagi', '10 Tahun lagi']
        const koh = kapan[Math.floor(Math.random() * kapan.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + kapankah + '*\n\n*Jawaban :* ' + koh
        }, {
          quoted: m
        })
      }
      break
      case 'watakcek':
        const watak = body.slice(0)
        const wa = ['Penyayang', 'Pemurah', 'Pemarah', 'Pemaaf', 'Penurut', 'Baik', 'Baperan', 'Baik Hati', 'penyabar', 'UwU', 'top deh, pokoknya', 'Suka Membantu']
        const tak = wa[Math.floor(Math.random() * wa.length)]
        fuzzy.sendMessage(from, {
          text: 'Pertanyaan : *' + watak + '*\n\nJawaban : ' + tak
        }, {
          quoted: m
        })
        break
      case 'hobycek':
        const hobby = body.slice(0)
        const hob = ['Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
        const by = hob[Math.floor(Math.random() * hob.length)]
        fuzzy.sendMessage(from, {
          text: 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by
        }, {
          quoted: m
        })
        break
      case 'cebelapaimutci': {
        if (!m.isGroup) return m.reply('Kusus group')
        const edgar = body.slice(0)
        const nanya = ['*79%*\n\nImut Banget Loh Kawai><', '*15%*\n\nKamu imut kata mamakmu:v🗿', '*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿', '*28%*\n\nIya deh Cipaling Imut;)', '*100%*\n\nPap imutnya dulu dong:v😘']
        const pret = nanya[Math.floor(Math.random() * nanya.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + edgar + '*\n\n*Jawaban :* ' + pret
        }, {
          quoted: m
        })
      }
      break
      case 'tebak': {
        if (!m.isGroup) return reply('cmd only group')

        function isGameActive() {
          return tebakgambar[from] || tebakkata[from] || tebakkalimat[from] || tebaklirik[from] ||
            tebaktebakan[from] || tebakbendera[from] || tebakbendera2[from] || tebakkabupaten[from] ||
            tebakkimia[from] || tebakasahotak[from] || tebaksiapakahaku[from] || tebaksusunkata[from] ||
            tebaktekateki[from] || tebakjkt48[from];
        }
        if (isGameActive()) {
          return reply("Masih Ada Sesi Permainan Yang Belum Diselesaikan!");
        }

        if (args[0] === 'gambar') {

          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakgambar[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakgambar.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[from]}`, m)
            delete tebakgambar[from]
          }
        }
        else if (args[0] === 'kata') {

          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkata[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakkata.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[from]}`, m)
            delete tebakkata[from]
          }
        }
        else if (args[0] === 'kalimat') {
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkalimat[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakkalimat.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[from]}`, m)
            delete tebakkalimat[from]
          }
        }
        else if (args[0] === 'lirik') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaklirik[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaklirik.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[from]}`, m)
            delete tebaklirik[from]
          }
        }
        else if (args[0] === 'tebakan') {
         let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaktebakan[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaktebakan.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[from]}`, m)
            delete tebaktebakan[from]
          }
        }
        else if (args[0] === 'bendera') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.name)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakbendera[from] = result.name.toLowerCase()
          })
          await sleep(60000)
          if (tebakbendera.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[from]}`, m)
            delete tebakbendera[from]
          }
        }
        else if (args[0] === 'bendera2') {
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.name)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakbendera2[from] = result.name.toLowerCase()
          })
          await sleep(60000)
          if (tebakbendera2.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[from]}`, m)
            delete tebakbendera2[from]
          }
        }
        else if (args[0] === 'kabupaten') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.title)
          fuzzy.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkabupaten[from] = result.title.toLowerCase()
          })
          await sleep(60000)
          if (tebakkabupaten.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[from]}`, m)
            delete tebakkabupaten[from]
          }
        }
        else if (args[0] === 'kimia') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.lambang)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkimia[from] = result.lambang.toLowerCase()
          })
          await sleep(60000)
          if (tebakkimia.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[from]}`, m)
            delete tebakkimia[from]
          }
        }
        else if (args[0] === 'asahotak') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakasahotak[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakasahotak.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[from]}`, m)
            delete tebakasahotak[from]
          }
        }
        else if (args[0] === 'siapakahaku') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaksiapakahaku[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaksiapakahaku.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[from]}`, m)
            delete tebaksiapakahaku[from]
          }
        }
        else if (args[0] === 'susunkata') {

          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaksusunkata[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaksusunkata.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[from]}`, m)
            delete tebaksusunkata[from]
          }
        }
        else if (args[0] === 'tekateki') {
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaktekateki[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaktekateki.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[from]}`, m)
            delete tebaktekateki[from]
          }
        }
        else if (args[0] === 'jkt48') {
          
          let response = await fetchJson('https://api.siputzx.my.id/api/games/tebakjkt');
          if (response.status) {
            let result = response.data;
            console.log("Jawaban: " + result.jawaban);

            fuzzy.sendImage(from, result.gambar, `siapakah ini? sebutkan beserta nama panjang dia\nWaktu : 70s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
              tebakjkt48[from] = result.jawaban.toLowerCase();
            });

            await sleep(70000); // 70 detik
            if (tebakjkt48.hasOwnProperty(from)) {
              fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${result.jawaban}`, m);
              delete tebakjkt48[from];
            }
          }
          else {
            reply("Gagal mengambil data dari API.");
          }
        }
        else reply(`- GAME TEBAK -\n\n.tebak kata\n.tebak tebakan\n.tebak bendera\n.tebak kalimat\n.tebak lirik\n.tebak tekateki\n.tebak siapakahaku\n.tebak asahotak\n.tebak susunkata\n.tebak kimia\n.tebak kabupaten\n.tebak gambar\n.tebak bendera2\n.tebak jkt48`)
      }
      break
default:
  function resetSession(user) {
    if (global.db.data.users[user]?.aiSession) {
      delete global.db.data.users[user].aiSession;
      return true;
    }
    return false;
  }

if (body.startsWith(prefix + "resetsesi")) {
  const success = resetSession(m.sender);
  if (success) {
    return m.reply("Sesi AI berhasil direset!");
  } else {
    return m.reply("Tidak ada sesi AI yang ditemukan.");
  }
}

if (!m.isBaileys && !isBot && !isCmd && body != "") {

  const chatData = global.db.data.chats[m?.chat];
  if (!chatData || !chatData.autoai) return; // AI hanya aktif jika autoai = true

  const isMentioned = m.isGroup ? body.includes(`@${pureNumber}`) : true;
  const isRepliedToBot = m.isGroup ? m.quoted && m.quoted.sender === `${pureNumber}@s.whatsapp.net` : false;
  if (m.isGroup && !isMentioned && !isRepliedToBot) return; // Untuk grup, hanya merespon mention/reply

  function readSession(user) {
    try {
      return global.db.data.users[user]?.aiSession || "";
    } catch (error) {
      return "";
    }
  }

  function writeSession(user, session) {
    if (!global.db.data.users[user]) global.db.data.users[user] = {};
    global.db.data.users[user].aiSession = session;
  }
  
  
  if (body.startsWith(prefix)) return;

  let userSession = readSession(m.chat);

  try {
    const prompt = `
${global.prompt}

## Berikut adalah sesi percakapan sebelumnya (jika ada):
${userSession || "(Tidak ada sesi sebelumnya)"}

`;

    // Gunakan axios.get dengan query langsung di URL
    let { data } = await axios.get(
      `https://api.siputzx.my.id/api/ai/llama?prompt=${encodeURIComponent(prompt)}&message=${body}`
    );

    if (data.status) {
      // Update session
      writeSession(m.chat, `${userSession}\nUser: ${body}\nAI: ${data.data}`);
      return m.reply(data.data);
    } else {
      return m.reply("Gagal mendapatkan respons dari API.");
    }
  } catch (e) {
    console.log(e);
    return m.reply("Sesi sudah mencapai batas!\nketik .resetsesi dan coba lagi.");
  }
}



if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}


if ((m?.mtype === 'groupInviteMessage' || text.startsWith('Undangan untuk bergabung') || text.startsWith('Invitation to join') || text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
await fuzzy.sendMessage(m.chat, {react: {text: `😊`,key: m.key,}})
let teks = 'acces denied harus minta izin dulu ke owner'
m.reply(teks)
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
