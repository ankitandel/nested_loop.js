// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode((i - 1) + 65);
//   }
//   string += "\n";
// }
// console.log(string);

let n = 5;
let string = "";
var i=1
while(i<=n){
    var j=0
    while(j<i){
        string+=String.fromCharCode((i-1)+65)
        j++
    }string+="\n"
    i++
}
console.log(string)