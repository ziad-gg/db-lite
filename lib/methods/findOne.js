const getter = require("../assistant/get");
const fs = require("node:fs");

module.exports = async function(callback) {
    const status = fs.existsSync(this.path)
    if (!status)  fs.appendFileSync(this.path, "[]")
    let file = JSON.parse(fs.readFileSync(this.path))
   const data = await getter(this.schema, file, callback)
   this.event.emit("data", data)
   return data
}