var fs = require("fs");
var file = __dirname + "/enum.txt";
var model_path = __dirname + "/models/"
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
    var key = result[4];
    // var key = result[4].replace(/['"]/g, "");
    obj[key] = val;
}

console.log(obj);

for (var key in obj) {
    console.log(key + "\t" + obj[key], isNaN(parseFloat(key)));
}

var conditions = Object.keys(obj);
var $CONDITION, $DO, codeText = "";

for (i = 0; i < conditions.length; i++) {
    $CONDITION = "$VAL" + (/^[>=<]+/.test(conditions[i]) ? " " : " === ") + conditions[i];
    $DO = "//TO DO : " + obj[conditions[i]];
    if (i === 0) { //if
        codeText += genCodeFromModels("$IF", {
            $CONDITION: $CONDITION,
            $DO: $DO
        });
    } else if (conditions.length == i + 1) { //else
        codeText += genCodeFromModels("$ELSE", {
            $DO: $DO
        });
    } else { //elseif
        codeText += genCodeFromModels("$ELSE_IF", {
            $CONDITION: $CONDITION,
            $DO: $DO
        });
    }
}

console.log(codeText);
fs.writeFileSync("out.js", codeText, "utf-8");

function genCodeFromModels(modelname, map) {
    if (!modelname) return console.error("no modelname");
    var path = model_path + modelname;
    if (!fs.existsSync(path) && !path.match(/\.js$/)) path += ".js";
    if (!fs.existsSync(path)) return console.error("no file:" + path);
    var template = fs.readFileSync(path, "utf-8");
    for (var key in map) {
        template = template.replace(key, map[key]);
    }
    return template + "\n";
}

// console.log(result);
// console.log(text);