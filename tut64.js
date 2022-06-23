const fs = require("fs");
let abhishek = fs.readFileSync("abhishek.txt" , "utf-8");

abhishek = abhishek.replace("abhishek" , "shivam");

console.log(abhishek);


console.log("Creating new file in the nodejs .")
fs.writeFileSync("shivam.text" , abhishek)