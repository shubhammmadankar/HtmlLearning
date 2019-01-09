var cname, cemploye, cworkingFeild;
var company = /** @class */ (function () {
    function company(cname, cemploye, cworkingFeild) {
        this.name = cname,
            this.employe = cemploye,
            this.workingFeild = cworkingFeild;
    }
    company.prototype.f1 = function () {
        console.log('company:' + this.name + "\n" + "no of employe:" + this.employe + "\n" + "working area:" + this.workingFeild + "\n");
    };
    return company;
}());
var c1 = new company('infosys', 100, 'angular');
var c2 = new company('hcl', 150, 'java');
var c3 = new company('wipro', 90, 'python');
c1.f1();
c2.f1();
c3.f1();
if (c1.employe > c2.employe && c1.employe > c3.employe) {
    c1.f1();
}
else if (c2.employe > c1.employe && c2.employe > c3.employe) {
    c2.f1();
}
else
    c3.f1();
