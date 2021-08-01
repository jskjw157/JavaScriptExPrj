var a = {}
typeof a

a= []
console.dir(a)

var person = {name: '홍길동', age: 30};

person.name
person.age

var person = {name:'홍길동',
age:30,
getAge: function() {return this.name}
}

person.getAge()

function add(a,b) {return a+b}

var add = function(a,b){return a+b}

var add = function(a,b) {return a+b+x}
const x = 20

function f(f1,f2,f3) {return f3(f1()+f2())

var add_maker = function(fn){
    return function(a) {
        return function(b) {
            return fn(a,b)
        }
    }
}

var person = [{name:'홍길동',age:30},{name:'이순신',age:50},{name:'장보고',age:10}]

function filter(user,predi) {
    var rslt = [];
    for(var i =0; i<=user.length; i++){
        if(predi(users[i])) rslt.push(users[i]);

    }
    return rslt;
}
