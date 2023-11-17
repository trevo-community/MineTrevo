const mineflayer = require('mineflayer')
var express = require('express')
const PORT = process.env.PORT || 8080 || 5000 || 3000

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(express.static("public"))
var router  = express.Router();


const bot = mineflayer.createBot({
  host: 'CloverMod.aternos.me', 
  username: 'bot', 
  port: 60113,
  version: false,
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

bot.on('kicked', console.log)
bot.on('error', console.log)

router.get("/", async(req, res) => {
  res.json({
  "status": "online"
  })
})

app.listen(PORT, () => {
    console.log("Server running on port " + PORT,'green')
})

module.exports = app
