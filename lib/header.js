const fs = require("node:fs")

for (let file of fs.readdirSync("lib/methods")) {
  require("./methods/"+file)
}

module.exports = require("./main.js")