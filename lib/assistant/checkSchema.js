module.exports = async function(schema, options) {
  let data = {};
  let schemaKeys = Object.keys(schema);
  let optionsKeys = Object.keys(options);
  let map1 = new Map(Object.entries(schema));
 let map2 = new Map(Object.entries(options));

  schemaKeys.forEach((key) => {
    const type = map1.get(key);
    
    if (type === Number) { // Number
      const check = map2.get(key);
      if (check) {
      if (typeof check !== "number") {
        throw new TypeError(`${key} must be a number`);
      }else {
        data[key] = map2.get(key);
      }
      }
    }
    if (type === String) { // String
      let check = map2.get(key);
      if (check) {
      if (typeof check !== "string") {
        throw new TypeError(`${key} must be a String`);
      }else {
        data[key] = map2.get(key);
      }
    }
   }
  
   if (type === Boolean) { // Boolean
      let check = map2.get(key);
      if (check) {
      if (typeof check !== "boolean") {
        throw new TypeError(`${key} must be a Boolean`);
      }else {
        data[key] = map2.get(key);
      }
    }
   }
      if (type === Array) { // Array
      let check = map2.get(key);
      if (check) {
      if (typeof check !== "array") {
        throw new TypeError(`${key} must be a Array`);
      }else {
        data[key] = map2.get(key);
      }
    }
   }
  });

  return data
}