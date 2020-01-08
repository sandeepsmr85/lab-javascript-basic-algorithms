// Iteration 1: Names and Input
let hacker1="sandeep";
console.log("The driver name is " +hacker1)
let hacker2="smr"
console.log("The navigator name is " +hacker2)

// Iteration 2: Conditionals
let h1size=hacker1.length
let h2size=hacker2.length

h1size==h2size?console.log("Wow, you both have equally long names,"+h1size+" characters!."):h1size>h2size?console.log("The driver has the longest name, it has " +h1size + " characters."):console.log("It seems that the navigator has the longest name, it has "+h2size+"characters")


// Iteration 3: Loops

var res = hacker1.toUpperCase();

console.log(res);

var res1 = "";
for(var i=0;i<res.length;i++)
{

   res1 = res1 + res.charAt(i) + " ";
}
console.log(res1);

var res2="";
for(var j=hacker1.length-1;j>=0;j--)
{
     res2 = res2 + hacker1.charAt(j);
}
console.log(res2);
hacker1.localeCompare(hacker2)==0?console.log("What?! You both have the same name?"):hacker1.localeCompare(hacker2)==-1?console.log("The driver's name goes first"):console.log("Yo, the navigator goes first definitely.");

// bonus
var str1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et.";
var str2="Ut enim ad minim et etveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
var str3="Excepteur sint occaecat et cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(str1.split(' ').length);
console.log(str2.split(' ').length);
console.log(str3.split(' ').length);


console.log((str1.match(/et/g) || []).length);
console.log((str2.match(/et/g) || []).length);
console.log((str3.match(/et/g) || []).length);
//bonus 2

var phraseToCheck="stack cats"

var reg= /[^A-Za-z0-9]/g;

phraseToCheck=phraseToCheck.toLowerCase().replace(reg, ' ')
var flag
for (var i = 0; i < phraseToCheck.length/2; i++) {
    if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length - 1 - i]) {
        flag= false;
    }
  }
  flag= true;
  if(flag){
      console.log("Is Pallindrome")
  }
  else if(flag==false)
    console.log("Is not a pallindrome")