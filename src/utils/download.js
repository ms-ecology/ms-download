const download = require('download-git-repo')

const dl = (path, dest, retryMain) => new Promise((resolve, reject) => {
  download(path, dest, function (err) {
    if (err && retryMain && err.statusCode === 404) {
      // retry
      if (path.includes('#')) return reject(err)
      return resolve(dl(path + '#main', dest)) // break code
    }
    err ? reject(err) : resolve({
      timestamp: Date.now()
    })
  })
})

// default to retry with branch main
module.exports = (path, dest) => dl(path, dest, 1)
