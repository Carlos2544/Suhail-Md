const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_35_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICA2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAzLFxuICAgICAgICAzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIno5UXpDK2h5ZVFnMVgrUEdQbGpzNzZUZFZZUU1UcTRtaWErRWZFTFd0OWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInl2enVHaHlnUTNxM2pyX1pWZjRSeEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDY4NmQ4MGQtMzg3NS00M2UwLWFjOTgtYmE5MTlmMGYyNTAyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDIyOCxcbiAgICAgIDIxNixcbiAgICAgIDMwLFxuICAgICAgMTU1LFxuICAgICAgMjE2LFxuICAgICAgODMsXG4gICAgICAxNjgsXG4gICAgICAxOTEsXG4gICAgICAyLFxuICAgICAgODUsXG4gICAgICAzMixcbiAgICAgIDQ0LFxuICAgICAgMTczLFxuICAgICAgODQsXG4gICAgICAxOTMsXG4gICAgICAxNDQsXG4gICAgICA4NyxcbiAgICAgIDE1OCxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDEyMCxcbiAgICAgIDE4LFxuICAgICAgMjA0LFxuICAgICAgMTM1LFxuICAgICAgMjA2LFxuICAgICAgMTEzLFxuICAgICAgMTQ0LFxuICAgICAgMTA5LFxuICAgICAgNzYsXG4gICAgICAzOSxcbiAgICAgIDEzOSxcbiAgICAgIDkxLFxuICAgICAgMTI5LFxuICAgICAgMTA4LFxuICAgICAgMTQxLFxuICAgICAgMTMsXG4gICAgICAxNzAsXG4gICAgICA0OSxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBWTkxKWVQyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTUxNzc0MDU6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTM2NzIxMTQ1MDQ0Nzo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJektzc2tHRUxPRzByVUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBwbW1PTUZFRzNHWG9TYTBObE9mRlRrbk9kZlBYbzhzTG54WnJDUm8xbEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSWs0SXFxS3UvQmhIcTlJNGRkbWo2Q0pFVW4rcndLQS9mcHpjUW9RenhvUDNjVmFuQWFSVU5KYkZkY21CUUtXS1kzYUkzQllYdFpvWkxyYWkzOXVOQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaVZYQWFYRHJWejhIZGhVczg3eW1vcndYSVFkWkpBaEkzd2F6QXI5RTUwWHBieW9rcStNZ0FFdTJ1VlpzRjEvYStpS1RlelZvaHF6M1VlYVVrdXRyZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE1MTc3NDA1OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMDYxMDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBZ3dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFndy5qc29uIjogIntcImtleURhdGFcIjpcIjcyT213V0k3ZWFsU2NBbGZzRC9SNG5rYzQreUtTMWZPUUd0TXRPUHZGbk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc2NDUzMzUxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
