var str=['shubham','madankar','nawargaon']
var i:number=0;
 var function12 = ()=>{
document.getElementById("id1").innerHTML=str[i]
i++;

 }
var callingfunction12=()=>{
    setInterval(function12 ,2000)
}
