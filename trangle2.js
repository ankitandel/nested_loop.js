var i=1
var c=""
while(i<=5){
    var j=1
    while(j<=5-i){
        j++
        c+=" "
    }
    let k=1
    while(k<=2*i-1){
    c+=k
    k++
}c+="\n"
i++
}
console.log(c)