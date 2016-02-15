var fs = require("fs");
var file = __dirname + "/enum.txt";
if (!fs.existsSync(file)) {
    return console.log("no file==> " + file);
}
var text = fs.readFileSync(file, "utf-8");
var reg = /^(\s*)(\S*)(\s*)([^:]*):|:(\S*)(\s*)$/g;
var result = reg.exec(text);
console.log(result);
console.log(text);