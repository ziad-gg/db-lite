module.exports = async function(callback) {
    const status = fs.existsSync(this.path)
    if (!status)  fs.appendFileSync(this.path, "[]")
    let file = JSON.parse(fs.readFileSync(this.path))
   if (callback) {
   const data = file.find(callback);
   this.event.emit("data", data)
   return data
   }else {
   this.event.emit("data", file)
   return file
   }

}