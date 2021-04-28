const download = require('../utils/download')
const { HAS_MYSHELL } = require('../utils/env')

const { v4: uuidv4 } = require("uuid")
const fs = require('fs')
const path = require('path')
const exec = require('../utils/exec')
const rm = require("rimraf").sync

/** 下载文件的临时文件夹 */
const tempDir = uuidv4()

module.exports = async function (moduleName) { // for toplevel await

  try {
    await download(`ms-ecology/${moduleName}`, tempDir)
    let configPath = path.resolve(tempDir, 'config.json')

    let config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    HAS_MYSHELL && Object.keys(config).forEach(cmd => {
      let sciptePath = path.join(configPath, '../', config[cmd].path)
      exec(`ms template -t ${config[cmd].type} -c ${cmd} -d "${config[cmd].desc}" -f ${sciptePath}`) // use myshell template to add scripts
    })
    rm(tempDir)
  } catch (err) {
    if(err.statusCode == 404) console.error(`[${moduleName}] is not found, please check your inputs.\n`)
    console.error(`There are something wrong with [ms-download]: ${err}\n`)
  }

}