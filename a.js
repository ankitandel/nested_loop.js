let b=require("readline-sync")
var num=b.questionInt("enter the charactor")
a=65
var i=0
var count=0
var m=""
while(i<num){
    var j=1
    while(j<=i){
        m+=String.fromCharCode(count+65)
        count++
        j++
    }m+="\n"
    i++
}
console.log(m)








