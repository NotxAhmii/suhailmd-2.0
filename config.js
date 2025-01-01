Iconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="notxahmii@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://weddexavibes.weebly.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© AHMAD-MEHARZADA" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923034819465,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_20_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICA1NixcbiAgICAgICAgOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwZXpycWZBOHcveERheis0SFVKSEJWSEhGMnhRT0dWYTE3NEFTYTh2aURnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1cEZYS2V5eFJreUhIZ0ItOVhIT3Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYzNDk3MTVmLTQzNWItNDVmMC05NzViLTc5YWUxNmI0YzYwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA2LFxuICAgICAgMjEyLFxuICAgICAgMTcyLFxuICAgICAgMjIxLFxuICAgICAgMTI0LFxuICAgICAgMTQ1LFxuICAgICAgNjUsXG4gICAgICAyMTYsXG4gICAgICAyNTAsXG4gICAgICAxNCxcbiAgICAgIDE3OCxcbiAgICAgIDY4LFxuICAgICAgMTg2LFxuICAgICAgMTA0LFxuICAgICAgNzAsXG4gICAgICAxMjcsXG4gICAgICAzOSxcbiAgICAgIDM4LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyNDEsXG4gICAgICAxNTAsXG4gICAgICA4OCxcbiAgICAgIDE4OSxcbiAgICAgIDEyMCxcbiAgICAgIDIsXG4gICAgICA3NCxcbiAgICAgIDIxOSxcbiAgICAgIDk1LFxuICAgICAgMTY2LFxuICAgICAgNzIsXG4gICAgICAyNixcbiAgICAgIDE5NSxcbiAgICAgIDE3NyxcbiAgICAgIDEzMCxcbiAgICAgIDc0LFxuICAgICAgNzQsXG4gICAgICA4OSxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldGSlo3MkMxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMzQ4MTk0NjU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEyOTA3MDY1NDY3Njk6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPT0kzY0lFRU5qeTFic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlp1MkVENlVJc3lLV1RoNU9heXI1Mk9qanZTWkoxRVNjR0NRZ054Z3p2VFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieVpRc1N1UE56MjB0aHZNS2JoLzJYQXdPdFMrNmlQQUxXbjU3bEpKalIzWkx6bXBzSkhLQ0tncUZzbllYbENGUWl0ZTFwN0tGMkNrRHdKcmZXWDYxREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDIrbzBadGt6eWxMR0J3cU5jd291KzE5alYwWTdjckV6MEVxbmlWZ0tVbjZWN2c5Z2I3Y3lwWlpxNy9MS3FSMGVaZktYTjZHT1dZdThlelprNFFwZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDM0ODE5NDY1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU3NTIwMzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Ahmad-Meharzada ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "AHMII-STICKER-ZONE",
  packname: process.env.PACK_NAME || "AHMAD-MEHARZADA",
  botname : process.env.BOT_NAME  || "AHMII-XMD",
  ownername:process.env.OWNER_NAME|| "AHMAD-MEHARZADA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "AHMII"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
