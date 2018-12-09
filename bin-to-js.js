let fs = require("fs");

let buffer = fs.readFileSync("hekate.bin");

let output = "const hekate = new Uint8Array([";

for (let i = 0; i < buffer.length; i++) {
    if (i % 16 == 0) {
        output += "\r\n";
    }
    let val = buffer.readUInt8(i);
    output += val.toString();
    if (i !== buffer.length - 1) {
        output += ", ";
    }
}

output +=  "]);"

fs.writeFileSync("hekate.bin.js", output);