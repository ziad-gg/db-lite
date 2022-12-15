const db = require("./lib/index");

const schema = {
  username: String,
  age: Number,
}

const users = new db({
  math: false,
  path: "data.json",
  fetch: true,
  dir: "database"
}, schema)

users.on("create", (data) => {
  //console.log(data)
});


 // users.create({"username": "john", "age": 30})
  //const data = await users.findOne({"username": "john"});
  //console.log(data)
    const d = users.findOneOrCreate({"username": "john"})
  console.log(d)
