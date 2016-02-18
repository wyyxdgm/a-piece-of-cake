var fs = require("fs");
var file = __dirname + "/enum.txt";
if (!fs.existsSync(file)) {
    return console.log("no file==> " + file);
}
var text = fs.readFileSync(file, "utf-8");
console.log(text);
var result;
var reg = /(\s*)([\/\d]*\.)(\s*)([^:\s]*)(:|：)\s*(\S+)(\s*)/g;
var codeReg = /('|")([^'"]+)\1/g;
var obj = {};

while (result = reg.exec(text)) {
    console.log(result);
    var re;
    var val = result[6];
    var key = result[4].replace(/['"]/g, "");
    obj[key] = val;
}

console.log(obj);

for (var key in obj) {
    console.log(key + "\t" + obj[key], isNaN(parseFloat(key)));
}


// console.log(result);
// console.log(text);