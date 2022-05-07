// var n=5
// var string=""
// for(i=1;i<=n;i++){
//     for(j=n-1;j>=i;j--){
//         string+=""
//     }
//     for(k=i;k<=i;k++){
//         string+="*"
//     }string+="\n"
// }console.log(string)

var n=5
var string=""
var i=1
while(i<=n){
    var j=1
    while(j>=i){
        string+=""
        j++
    }
    var k=i
    while(k<=i){
        string+="*"
        k++
    }string+="\n"
    i++
}console.log(string)