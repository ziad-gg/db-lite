const fs = require("node:fs");
const check = require("../assistant/checkSchema")
const getter = require("../assistant/get")

module.exports = async function(callback) {
    const status = fs.existsSync(this.path)
    if (!status)  fs.appendFileSync(this.path, "[]")
    let file = JSON.parse(fs.readFileSync(this.path))
   const data = await getter(this.schema, file, callback)
   if (data) {
     this.event.emit("data", data);
     return await data;
   }else {
     let __ = await check(this.schema, callback)
   __["id"] = await this.uniqid()
    file.push(__)
    fs.writeFileSync(this.path, JSON.stringify(file, null, 1));
    this.event.emit("create", __)
     return await __
   }  
}