// 1 )  multiply two numbers 

function multiply(a,b){
  return (a * b);

}

let result = multiply(2,3); 

console.log(result);

// result is 6  

// 2) function is not returning the correct value  getPlanetName(3)

// function getPlanetName(id) {
//   var name;
//   switch (id) {
//     case 1:
//       name = "Mercury";
//     case 2:
//       name = "Venus";
//     case 3:
//       name = "Earth";
//     case 4:
//       name = "Mars";
//     case 5:
//       name = "Jupiter";
//     case 6:
//       name = "Saturn ";
//     case 7:
//       name = "Uranus";
//     case 8:
//       name = "Neptune";
//   }
//   return name ;
// }

//  getPlanetName(3); 

//  console.log(getPlanetName(3)); 


 function getPlanetName(id) {
    var name;
    switch (id) {
      case 1:
        name = "Mercury"; 
        break;
      case 2:
        name = "Venus";
        break;
      case 3:
        name = "Earth";
        break;
      case 4:
        name = "Mars";
        break;
      case 5:
        name = "Jupiter";
      case 6:
        name = "Saturn ";
        break;
      case 7:
        name = "Uranus";
        break;
      case 8:
        name = "Neptune";
    }
    return name ;
  }
   console.log(getPlanetName(3)); 

  // 3 ) string reversing   'world' => 'dlrow'  
  
  
     function stringRevers (str){
      return str.split("").reverse().join("");
     } 

     console.log(stringRevers("world"));
  
// 4) Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
  
// let number ;

// function even_or_odd(number) {
  
//   if ( number % 2 === 0 ){
    
//       document.write("Even")
  
//   }
//   else {
//    document.write("Odd");
  
//   }

// }   even_or_odd(17);



 
  function evenOdd(num) {
    if (num % 2 === 0) {
      return "given integer in Even number";
    } else {
      return "given integer in Odd number";
    }
  }

  console.log(evenOdd(5));

  // 5) Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).

  // The input string will only consist of lower case letters and/or spaces.

//   function getCount(str) {
//     return 0;
//   }

  function getCount(str){
  let vowels = ["a","e","i","o","u"]  
  let result = str.split("");
    return result.filter((letter)=>{
        return vowels.includes(letter);
    }).length
  } 

  console.log(getCount("Javascript")); 

 //  6)  Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

//  function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   } 


function greet(name){
  
    if(name === "Johnny"){
      return "Hello, my love!";
    }
      return "Hello, " + name + "!";
  } 


console.log(greet("Johnny")) ;   

// 7) Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
 let result1 = n / x ; 
 let result2 = n / y ;
 if(result1 % 1 === 0 && result2 % 1 === 0) {
    return true ;
 } 
 else {
    return false ;
 }


}

console.log(isDivisible(3,1,3)); 

// 8)  given number have to make it nagative , but may be the number is already nagative

function makeNagative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

console.log(makeNagative(4)); 

// 9 ) find smallest number 


class SmallestIntegerFinder {
    findSmallestInt(arrayOfNumbers) {
      let smallestNumber ;
      for(let i = 0 ; i < arrayOfNumbers.length ; i++  ){
         const arrNumber = arrayOfNumbers[i];
        if(i === 0){
          
          smallestNumber = arrNumber ;
          
         } 
        if( arrNumber < smallestNumber ){ 
          
           smallestNumber = arrNumber 
          
        }
      } 
      
        return smallestNumber ; 
        
     }
  }  


  // 11 ) Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//   summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 

var summation = function (num) {
    let sum = 0 ;
    
   for(let i = 1 ; i <= num ; i++){
      sum += i ;
      
    }
    return sum ;
  }

  console.log(summation(6)) 

  //12 )  It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

  function getAverage(marks){
    let count = marks.length ;
     let sum = 0;
     for (let i=0 ; i < count ; i++){
        
        sum  += marks[i];
     }
       let result = Math.floor(sum / count) ; 
     return result ;
    }

   console.log(getAverage([2,5,1])) ;


   //13 ) Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


   const rps = (p1, p2) => {
    if(p1 === p2){
      return "Draw!";
    }
     
    else if(p1 == "scissors" && p2 =="paper"){ 
      return "Player 1 won!" ;
      
    } 
    else if(p1 == "rock" && p2 =="scissors"){ 
      return "Player 1 won!" ;
      
    } 
    
    else if(p1 == "paper" && p2== "rock"){
      return  "Player 1 won!";
    } 
   else{
          return "Player 2 won!" ;
   }
    
    
  }; 

 console.log(rps('rock', 'scissors')) ;
 console.log( rps('scissors', 'paper') );
 console.log( rps('paper', 'scissors') ); 

 // 14) It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 
 function removeChar(str){
 
    return str.substr(1, str.length - 2);
  
  }; 

  console.log(removeChar("praveen"));

//15) You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0. 

function positiveSum(arr) {
    let sum = 0 ; 
    for (let i = 0 ; i < arr.length ; i++){
      
        if( arr[i] > 0 ){
          
          sum += arr[i];
        }
      
    } 
    
    return sum ;
  }

  console.log(positiveSum([2,-14,5,-1,3])) ; 


// 16 ) Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output   

function basicOp(operation, value1, value2) {
  if (operation == "+") return value1 + value2;
  if (operation == "-") return value1 - value2;
  if (operation == "*") return value1 * value2;
  if (operation == "/") return value1 / value2;
}

console.log(basicOp('+', 4, 7)); 


// 17) Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello" 

function repeatStr(n, s) {
  let repeatString = "";

  for (let i = 0; i < n; i++) {
    repeatString = repeatString + s;
  }

  return repeatString;
}


console.log(repeatStr(3, "*"));

// 18 ) Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){

    //console.log(string.split(" "))
      return string.split(" ")
  
  }

 console.log(stringToArray("Robin Singh")) ;

 // 19 ) Simple, remove the spaces from the string, then return the resultant string.

 function noSpace(str){
    let arr = str.split(' ');
     //console.log(arr); 
     
     let newArry = [] ;
     
    for(let i = 0 ; i < arr.length ; i++){ 
      
      let trmiStr = arr[i].trim(); 
      
      newArry.push(trmiStr);
    } 
     
     return newArry.join('');
   }

  console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) ;

  //20 ) Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    let result =  x.map((arr)=>{
        
      return  arr * 2 ;
        
      })
       return result ;
    }

  console.log(maps[1,2,3]);


// 21 ) A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :) 

function hero(bullets, dragons){
    return bullets / dragons >= 2 ;
  }
  
console.log(hero(10, 5)); 


// 22) 


function arrayPlusArray(arr1, arr2) {
    let sumArray1 = 0;
    let sumArray2 = 0;
    for(let i =0  ; i< arr1.length ; i++){
       
       sumArray1 += arr1[i] ;
      
    } 
    
    for(let j =0  ; j< arr2.length ; j++){
       
       sumArray2 += arr2[j] ;
      
    }
    
    return sumArray1 + sumArray2 ;
    
  } 

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) ; 


// 23 )   The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20  

function century(year) {
  
    return Math.ceil(year/100);
  }

  console.log(century(1705)); 




//  24) I have a cat and a dog.

//  I got them at the same time as kitten/puppy. That was humanYears years ago.
 
//  Return their respective ages now as [humanYears,catYears,dogYears]
 
//  NOTES:
 
//  humanYears >= 1
//  humanYears are whole numbers only
//  Cat Years
//  15 cat years for first year
//  +9 cat years for second year
//  +4 cat years for each year after that
//  Dog Years
//  15 dog years for first year
//  +9 dog years for second year
//  +5 dog years for each year after that 

  var humanYearsCatYearsDogYears = function(humanYears) {
    let catAge; 
    let dogAge ;
     if(humanYears === 1) {
       return [humanYears,15,15];
     } 
      if(humanYears === 2) {
       return [humanYears,24,24];
     }
       let excessYear = humanYears - 2 ; 
       let extraCatyear = excessYear * 4  ;
       let extraDogyear = excessYear  * 5 ; 
     return [humanYears,24 +extraCatyear ,24 + extraDogyear];
   }

   console.log(humanYearsCatYearsDogYears(1), [1,15,15]);
   console.log(humanYearsCatYearsDogYears(2), [2,24,24]);
   console.log(humanYearsCatYearsDogYears(10), [10,56,64]); 

//    25) Our football team has finished the championship.

//    Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
   
//    For example: ["3:1", "2:2", "0:1", ...]
   
//    Points are awarded for each match as follows:
   
//    if x > y: 3 points (win)
//    if x < y: 0 points (loss)
//    if x = y: 1 point (tie)


   function points(games) { 
    let totalPoints = 0 ; 
     
    for(let i = 0 ; i < games.length ; i++) {
      let values = games[i].split(":");
       let x = values[0];
       let y = values[1];
      
      if(x > y ){
        totalPoints += 3 ;
      }else if (x === y ){
         totalPoints += 1 ;
      }
      
    }
    return totalPoints ;
  }
  

  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); 
  console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
  console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));