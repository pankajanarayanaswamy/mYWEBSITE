/*switch*/
var color = 'purple'
switch (color) {

    case 'red':
        console.log('my fav color');
        break;
    case 'black':
        console.log('my fav is also black');
        break;
    case 'white':
        console.log('color is ok');
        break;
    default:
        console.log('i like all colors');
        break;

}
/*objects*/
var person = {
    firstname: 'pankaja',
    age: 40,
    lastname: 'narayanaswamy',
    child: ['viv', 'boy', 'girl'],
    address: {
        street: '3rd phase',
        Area: 'domlur',
        Country: 'Karnataka'
    },
    fullname: function () {
        return this.firstname + ' ' + this.lastname;
    }
}
console.log(person.fullname());
/*object constructor*/
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function () {
    return 'The color is' + this.color + 'and the shape is' + this.shape;
}
console.log(apple.describe());

/* constructor pattern*/

function fruits(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function () {
        return 'A ' + this.name + ' is of the color ' + this.color + ' and the shape is ' + this.shape;
    }
}
var apple = new fruits('apple', 'red', 'round');
var melon = new fruits('apple', 'red', 'round');
console.log(apple.color);
console.log(melon.shape);
console.log(apple.describe());

/* arrays of objects*/
var user = [{
        name: 'pankaja',
        age: 44
    },
    {
        name: 'vivaan',
        age: 10
    },
    {
        name: 'balu',
        age: '45'
    }
];
console.log(user[2]);
console.log(user[2].name);



function change() {
    var time = document.getElementById("date");
    time.innerHTML = Date();
    document.getElementById("secondbtn").style.backgroundColor = 'red';
}

function changeback() {

    document.getElementById("secondbtn").style.backgroundColor = 'white';
    var time = document.getElementById("date");
    time.innerHTML = "";

}

function changeBackground(x) {
    document.getElementById("body").style.backgroundColor = x.value;
    console.log(x.value);
}

function validateForm() {
    var firstname = document.forms["myForm"]["firstname"].value;

    if (firstname == null || firstname == "") {
        alert("firstname is required");
        console.log("firstname");
        return false;
    }
    if (firstname.length<3) {
        alert("firstname is required");
        console.log("firstname");
        return false;
    }
}