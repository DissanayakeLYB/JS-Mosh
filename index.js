/*console.log('Hello');

//comments

console.log("LYB")

var myName = "Lasith"
console.log(myName)

myName = 81

console.log(myName)


//remainder
console.log(5%3)

var firstName = "Lasith"
firstNameLength = firstName.length
console.log(firstNameLength)

console.log(firstName[0])
function word(Noun, Verb, Adjective) {
    var result = Noun + " " + Verb + " " + Adjective;
    return result;
}

console.log(word("I", "eat", "rice"));


var Arr = [["John", 23],["Lasith",24]]

console.log(Arr[1][0])

var Arr = [1,2,3]
Arr.push(4)
console.log(Arr)

Arr.pop()
Arr.pop()
console.log(Arr)

Arr[0] = 4

console.log(Arr)

var arr = [1,2,3,4,5,6]

console.log(arr)

b = arr.shift()
arr.pop()
arr.unshift(10)
console.log(b)
console.log(arr)

function ourFunc(){
    console.log("Hi World!");
}

ourFunc();

function Func(a,b){
    console.log(a-b)
}

Func(10,4)

var myGlobal = 10

function fun(){
    oopsGlobal = 5;
}

console.log(fun())

function fun2(){

    var output = " "

    if(typeof myGlobal != "undefined" ){
        output += "myGlobal : " + myGlobal; 
    }
    
    else if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal : " + oopsGlobal; 
    }
    
    console.log(output)
}

arr = [1,2,3,4]

arr.shift()

console.log(arr)


function NextInLine(arr){
    console.log(arr.shift()) 
}

NextInLine([1,2,3,4,5])

function ToF(ToF){
    if (ToF == true){
        console.log("It's True.")
    }
    else{
        console.log("It's False")
    }
}

ToF( false)


function hrida(hri){
    return true
}

kello = hrida(true)

console.log(kello)


function vidu(vidu_hri,lasith_hri){
    if (vidu_hri == true && lasith_hri == true){
        console.log("Vidu Hri")
    }
    else if (vidu_hri == true && lasith_hri == false){
        console.log("Vidu Hri")
    }
    else if (vidu_hri == false && lasith_hri == false){
        console.log("lasith weradi")
    }
    else if (vidu_hri == false && lasith_hri == true){
        console.log("Mn tharahai")
    }
}

vidu(false,true)

*/


function thisne(trueDA,falseDa){
    if(trueDA && falseDa){
        console.log("Confused Unga Bunga")
    }
    else if(trueDA){
        console.log("Sira")
    }
    else if(falseDa){
        console.log("Boru ne")
    }
}

thisne(false,true)