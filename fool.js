const tutorial= require('./sum');

var Even = (a) =>{
    return a%2===0;
}

iseven = function (a) {
    return a%2===0;
}
console.log(Even(2));

var res=[2,4,6].every((e) => (e%2===0));
console.log(res);

var num =  [5, 7, 9, 2, 55, 67, 90, 34];

num.fill(3, 2, 3);
console.log(num.filter((e)=> (e<55)));
console.log(num);


console.log(num.slice(6));
console.log(num);

num.splice(2, 4, "HI");
console.log(num);
console.log(num.splice(2,3, "HI"));


var mobile = {
    name : "Redmi5",
    glass : "Tuta hua",
    Battery_backup : "10 min",
    cover : "2 saal se ni lia",
    camera : "lens tut gya",
    body : "button kam ni krte",
    ps : "zindi bhar chalana hai",

    course: function() { return this.body;}
};

console.log(mobile.course());
console.log(iseven(3));

var User = function(firstname, gpa) {
    this.Firstname = firstname;
    this.gpa = gpa;
    this.getgpa = function()
    {
        console.log('GPA of student is:'+ this.gpa);
    };
};

User.prototype.getfirstname= function() {
    return ("first name is " + this.Firstname);
}
var arpit = new User("Arpit", 9.99);

console.log(arpit);

arpit.getgpa();

console.log(arpit.getfirstname());

function init()
{
    var firstname="arpit";  
    function print()
    {
        console.log(firstname);
    }
    return print;
}

var a = init;
console.log(a());

console.log(tutorial.sum(1,2));