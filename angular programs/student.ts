var snames,ssubject,smark;
class student
{
    names:string;
    subject:string;
    marks:number

    constructor(snames,ssubject,smark){
this.names=snames,
this.subject=ssubject,
this.marks=smark
    }
f1(){
    console.log("name of student:" + this.names +"\n" + "name of student:" +this.subject +"\n" + "marks obtained:"+this.marks +"\n")

}

}
var s1=new student("shubham" ,"math",80)
var s2=new student("chetan" ,"math",80)
var s3=new student("vijay" ,"math",80)
