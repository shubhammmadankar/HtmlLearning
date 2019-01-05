var str = ['shubham', 'madankar', 'nawargaon'];
var i = 0;
var function12 = function () {
    document.getElementById("id1").innerHTML = str[i];
    i++;
};
var callingfunction12 = function () {
    setInterval(function12, 2000);
};
