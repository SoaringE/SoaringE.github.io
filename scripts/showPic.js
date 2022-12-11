
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); 
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}

function fib(num) {
    if (num == 1 || num == 0)
        return 1;
    var num1 = fib(num - 1);
    var num2 = fib(num - 2);
    var result = num1 + num2;
    return result;
}

var lambda1 = (x, y) => x + y; 

function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
}