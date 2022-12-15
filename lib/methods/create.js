const fs = require("node:fs")
const _ = require("lodash")
const check = require("../assistant/checkSchema")

module.exports = async function(callback) {
    const status = fs.existsSync(this.path)
    if (!status)  fs.appendFileSync(this.path, "[]")
    let file = JSON.parse(fs.readFileSync(this.path))
    let data = await check(this.schema, callback)
    data["id"] = await this.uniqid()
    file.push(data)
    fs.writeFileSync(this.path, JSON.stringify(file, null, 1))
    this.event.emit("create", this.schema)
}