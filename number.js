// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

let n=5
let string=""
var i=1
while(i<=n){
  var j=1
  while(j<i){
    string+=" "
    j++
  }
  let k=1
  while(k<=2*(n-i+1)-1){
    string+=k
    k++
  }string+="\n"
  i++
}
console.log(string)