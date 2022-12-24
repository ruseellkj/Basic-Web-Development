console.log("This is tutorial 53");

function greet(name, greetText = "Greeting from Javascript"){
    // let name1 = "Name1";
    console.log(greetText + " "+ name);
    console.log(name + " is a good boy");
}


function sum(a,b,c){
    let d = a + b + c;
    return d;

}


let namex = "Rushil";
let name1 = "Vyom";
let name2 = "Shubh";
let name3 = "Khush";
let greetText = "Good Morning"
greet(namex,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3);

let returnval = sum(1,2,3);
console.log(returnval);



// Making a small function 

function compnum(a,b){
    if(a > b) {
      console.log(a + " is greater than " + b);
    }    
   else if(a == b) {
      console.log(a + " and " + b + " both are equal");
    }
    else {
      console.log(b + " is greater than " + a);
    }
  }
  compnum(55, 96);




