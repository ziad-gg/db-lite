const check = require("./checkSchema");
const data  = [{
  username: "hello", 
  age: 10
}]
module.exports = async function (schema, data, deatils) {
  const _ = await check(schema, deatils);
  //if (!_ || !data) return null;
  let map1 = new Map(Object.entries(_));
  let statement = ["data.find(e => e"]

  await map1.forEach((v, k) => {
    if (typeof v === "number") {
       statement.push(`e.${k} === ${v}`)
    }else {
    statement.push(`e.${k} === "${v}"`)
    }
  });
  statement.push("e)")
  
    let exp = statement
    .toString()
    .replaceAll(",", " && ")
    .replace(/\{endTag}/, ")")

    // console.log(exp)
     return eval(exp)
    
   // const test = "data.find(e => exp)"
   //console.log(await eval(test))
  
}