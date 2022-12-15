const fs = require("node:fs");
const uniqid = require('uniqid');
const events = require("events");
const event = new events();
const path = require("path");


class database {
 constructor({math, path, dir}, schema) {
   this.schema = schema;
   this.uniqid = uniqid;
   this.event = event;
   this.dir = dir
   this.p = path

   if (this.dir) {
   const status = fs.existsSync(this.dir)
   if (!status) {
      fs.mkdirSync(this.dir);
        this.path = this.dir+"/"+this.p
    }else this.path = this.dir+"/"+this.p
   }
   
 }
  on(event, callback) {
    this.event.on(event, callback)
  }
  once(event, callback) {
    this.event.once(event, callback)
  }
}

database.prototype.create = require("./methods/create");
database.prototype.findOne = require("./methods/findOne");
database.prototype.find = require("./methods/find");
database.prototype.findOneOrCreate = require("./methods/findOneOrCreate");

module.exports = database