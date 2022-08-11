/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(job, Loc, partner, num) {
  var Rahaf= ('You will be a ' + job + ' in ' + Loc+ ' and married to ' +
partner + ' ' + ' with ' + num + ' kids.');
console.log(Rahaf);
}
tellFortune('software engineer', 'jordan', 'Alex', 2);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age) {
  var dogYears = 7*age;

  // console.log("Your doggie is " + dogYears + " years old in dog years!");
}
calculateDogAge(-5);

if (calculateDogAge < -1 ){

  alert(false);

}



else {

  alert(true);
}


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, numPerDay) {
  const max = 100;
  const totalNeeded = (numPerDay * 365) * (max - age);
  const message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + max;
  console.log(message);
}

calculateSupply(22, 78);
calculateSupply(3, 4);
calculateSupply(5, 4);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
  console.log("Hello" +" "+ name );
}

greet("Adam");
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
// 1-"undifiend function"  /cat----x
// 2-"SyntaxError Unexpected number "----------7 false
// 3-"Uncaught SyntaxError: Unexpected token"--------------data type must be strig datatype

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

1-function double(x) {
  return 2 * 'x'; 
}
// return 2 * x ;
2- function double2 (x){
    return 2 * x;
  }


  function  double3 (x) {
    return 2 * x;
  }

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(r){
  return (r**3);
}
console.log(cube(4))

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function mult(a, b) {
  return a*b;
}

console.log(mult(3, 4));
console.log(mult(5, 4));

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
  if(age>=20){
      console.log("yes you can");
  }
else{console.log("please come back after 3 years to get one ");
}}
  
canIGetADrivingLicense(21);
canIGetADrivingLicense(17);
canIGetADrivingLicense(20);


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(string, string){
  if( string.length == 4){
      console.log( "true");
  }else{
      console.log( "false");
  }
  }
  sameLength("tree","clue");
  sameLength("tree","car");
  sameLength("true","false");
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(number1,number2){
  if(number1 > number2)  {
  console.log(number1); 
  }   
else{
console.log(number2);
}
}
largerNubmer(5,6);


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer (x , y ,z){
  console.log(Math.min(x,y,z));
}

smallerNubmer(2,5,6);

// ---------------------------------------


function smallerNubmer (a , b ,c){
  
  if(a<=b && a<=c){
  
  console.log(a);
  }
  else if(b<=a && b<=c){
  console.log(b);
  }      
    else {
  console.log(c);
  }     
  }
  smallerNubmer(2,5,6);
    
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(test1, test2, test3){
  const arr = [test1, test2, test3]

  const shorter = (left, right) => left.length <= right.length ? left : right

  console.log(
    arr.reduce(shorter)
  )

}

shorterString("r", "rr", "rrr");





/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(R1, R2 , R3){
  var arr = [R1,R2,R3 ];

    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
      }
    }

    console.log(longest);
}

longerString("RRRRR", "AAAAAAA" , "xxxxxx")



// --------------------------------------

function longerString(r1,r2,r3,r4,r5){
  if(r1.length>r2.length && r1.length>r3.length && r1.length>r4.length && r1.length>r5.length){
    return r1;
  }
  if(r2.length>r1.length && r2.length>r3.length && r2.length>r4.length && r2.length>r5.length){
    return r2;
  }
  if(r3.length>r1.length && r3.length>r2.length && r3.length>r4.length && r3.length>r5.length){
  return r3;
}
if(r4.length>r1.length && r4.length>r2.length && r4.length>r3.length && r4.length>r5.length){
  return r4;
}
return r5;

}
console.log(longerString("air","tr","car","github","byyyyyyyy"));
console.log(longerString("air","t","car","github","by"));

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven (number){
  if(number % 2 == 0) {
      console.log("true");
  }

  else {
      console.log("false");
  }
}

isEven(2);
isEven(1);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd (number){
  if(number % 2 !== 0) {
      console.log("true");
  }

  else {
      console.log("false");
  }
}

isOdd(6);
isOdd(5);





/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positiveNumber(x){
  console.log( Math.abs(x)) 
}

positiveNumber(-5);
positiveNumber(4);



/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName){
  return firstName+" " + lastName
}
console.log(fullName("alex", "mercer"))


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function avg(r,a,h,m,f){
  sum=(r+a+h+m+f) /5
    
    console.log(sum);
  }
  avg(1,2,3,4,5);
  avg(5,7,9,3,5);
  


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  return Math.random()
}
console.log(randomNumber())


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)




/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty (x){
  if(x >= 95 && x <= 100){
      console.log("A")
  } else if (x >= 85 && x <= 94){
      console.log("B")
  } else if (x >= 70 && x <= 84){
      console.log("C")
  } else {
      console.log("the number out of the range")
  }
}

scoreInUniversty(99);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counter(R,M){
console.log(Math.max(R,M)) ;
  
}
counter(14,8)





/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/