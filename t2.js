let n=5
let string=""
var i=0
while(i<n){
    var k=0
    while(k<n-i){
        string+="*"
        k++
    }
    string+="\n"
    i++
}
console.log(string)

// let a=require("readline-sync");
// var i=a.questionInt("enter the number");
// orig=i
// sum=0
// while(i>0){
//     sum=sum+(i%10)*(i%10)*(i%10)
//     i=parseInt(i/10)
// }if (orig==sum){
//     console.log("armstrong num")
// }
// else{
//     console.log("not armstrong num")
// }

// let a=require("readline-sync")
// var i=a.questionInt("enter the number");
// org=0
// sum=0
// while(i>0){
//     sum=sum+(i%10)*(i%10)*(i%10)
//     i=parseInt(i/10)
// }
// if(org==sum){
//     console.log("armstrong")
// }
// else{
//     console.log("not armstrong")
// }
