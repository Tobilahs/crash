require("./database/module")

//GLOBAL PAYMENT
global.storename = "Putraa"
global.dana = "083123402262"
global.qris = "gada qris gw anjg"


// GLOBAL SETTING
global.owner = "6283123402262"
global.namabot = "Putra"
global.nomorbot = "6283123402262"
global.namaCreator = "Putra"
global.linkyt = "https://youtube.com/@Putrayy"
global.autoJoin = false
global.antilink = false
global.versisc = '5.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://g.top4top.io/p_3194iz70l0.jpg'
global.isLink = 'https://chat.whatsapp.com/D4mRhJ00N1E9KyWDfhij22'
global.packname = "Fatal"
global.author = "Putra"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})