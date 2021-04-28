const path = require("path")
const fs = require('fs')
const home = require("user-home")
const CONFIG_PATH = path.resolve(home, ".myshell", `config.json`)

const HAS_MYSHELL = fs.existsSync(CONFIG_PATH)

module.exports = {
  CONFIG_PATH,
  HAS_MYSHELL
}

