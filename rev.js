let n=5;
let string="";
var i=0
while(i<n){
    var j=0
    while(j<i){
        string+=" "
        j++
    }
    let k=0
    while(k<2*(n-i)-1){
        string+="*"
        k++
    }string+="\n"
    i++
}
console.log(string)

