
/* ---------------------------------- javascript basics ------------------------------------ */

/* 
    - Javascript mainly two versions. They are "ES5" and "ES6". ES5 is old one and ES6 is new version
    - "var" was in ES5 and in the latest ES6 "let" & "const" were added. and we use both es5 & es6
    - The main difference between var, let, const is like this :

        * var is global scoped / function or nearest function scoped variable
        * let & const are braces scoped variable
        * var adds itself to the window object and let, const dosen't

    - Window Object : In javascript there are times where we use some features or properties which
      are not part of the javascript but instead they are from the browser and we still use them in
      the javascript. We can find all of such features / properties wrapped up in a single object which
      is called as "Window Object"  (access it in console by typing window and run)

    * Note : Browser generally gives us this thing called "browser context api". In this contains these
      3 things such as "window object", "Stack", "Heap memory"

    - Stack : Defines the order of happening of things like one after other, other after another

    - Heap memory : Place where all our intermediate data of our program gets stored

*/


/* ------------------------- Execution context, Lexical environment --------------------------- */

/* 

    - Execution context : Whenever we run or execute a function , (always) that function will 
      create an imaginary container by itself and for itself in which mainly three things will be 
      there in it. They are :

        * Variables of that parent function
        * Functions inside that parent function
        * Lexical environment of that function

    - This imaginary container is what we can think of or call as "Execution context"

    - Lexical environment : A lexical environment in programming is a context or container that 
      holds variables and their values, allowing functions to remember and access variables from the 
      place where they were defined, even when executed elsewhere. It's like a memory bubble 
      for functions. It tells us what values from our function that we defined can be accessed and 
      what values cannot be accessed.
*/


/* ----------------------------- How to copy reference values ------------------------------- */

/*
    1. for arrays :
            var a = [1, 2, 3, 4, 5];
            var b = [...a];              ( the three dots ... is called as "spread operator" )
            b.pop();
            console.log(a);
            console.log(b);

    2. for objects :
            var obj = { name : "maram", age : 24, student : false };
            var obj2 = {...obj};
            console.log(obj);
            obj2.name = "sita";
            console.log(obj2);

*/

/* ------------------------------------ truthy vs falsy --------------------------------------- */

/*

    - Whatever we write in javascript it will surely belong to one of the type in these two types
    - They are :
        1. truthy
        2. falsy - values of falsy include ( "0" "false" "undefined" "null" "NaN" "document.all" )

    Note : truthy and falsy are different from true or false. anything that is not part of falsy values
    is eventually a truthy one


    Ex: if(-1) {
            console.log("hyy");
        }
        else {
            console.log("oiii");
        }

    - this code will print hyy because -1 is a truthy value since it's not in the list of falsy values

*/


/* --------------------------------- foEach, forin, do-while ----------------------------------- */

/* 

    - forEach : only is used on arrays , when we have an array then we can use these properties

    Ex:     var a = [1,2,3,4,5,6,67,55,78,45,9,32];
            a.forEach((val)=> {
                console.log(val+2);
            });

    - Note : forEach never changes the default or original array, it will make all the changes to a 
      temporary copy of original array and gives us the output, that way the original will not get 
      changed.

    
    - forin : forin is used to loop through objects

    Ex :    var obj = {
                name : "ases",
                age : 25,
                place : "earth"
            }

            for(var key in obj) {               //can write any name in place of key since we r 
                console.log(key, obj[key]);     //defining a variable, we can name it any
            }


    - do While : the code inside the do executes 1st whether the condition in while is true or false,
      if the condition is false, still the code inside do will run one time (while mixed with if = do while)

    Ex:     var a = 12;

            do {
                console.log(a);
                a++;
            }
            while( a < 15 );

*/


/* ----------------------------------- call back functions ------------------------------------- */

/*

    - When you write code in JavaScript, especially asynchronous code or code that runs at a later 
      time (like handling events or making network requests), JavaScript may not know exactly when that
      code will finish executing. This is because JavaScript continues to run other parts of your 
      program while waiting for certain tasks to complete.

    - In such cases, callbacks are used to handle the completion of these tasks. A callback is a 
      function that is passed as an argument to another function. The idea is that when the 
      asynchronous task completes, it calls the provided callback function to signal that it's done.

    Ex: setTimeout(function() {
        console.log("this runs after 3 secs");
        }, 3000);

*/


/* ---------------------------- how arrays are made behind the scenes ---------------------------- */

/*

    - "arrays" are eventually "objects" in javascript like this saying below :
    - There's a saying as Everything in javascript is eventually an object

    Ex : var arr = [1,2,3,4,5] ;     //this is noraml array but in js it is made by objects as below

         var arr = {
            0 : 1,                   /* the array is made like this as an object with
            1 : 2,                   *  ( index : value ) pairs 
            2 : 3,                   *  this is the behind the scene of how the above array 
            3 : 4,                   *  is being made or converted to 
            4 : 5
         };

    
    - we can make negative indexes in arrays and yes it is possible too

    Ex : var arr = [1,2,3,4];
         arr[-1] = 50;
         console.log(arr);

*/


/* ---------------------------- how to delete object properties ---------------------------- */

/*

    Ex:     var user = {
                name : "ases",
                age  : 24,
                place : "asia"
            }

            delete user.age;

    - this will remove or deletes the whole age property with value also in the user object

*/


/* ------------------------------ push, pop, shift, unshift, splice ------------------------------ */

/* 

    push - add an element at the end of the array
    pop - removing the last element in the array
    unshift - add an element at the start of the array
    shift - removing the starting element of the array
    splice - to remove elements from (suppose a index to b index), takes two values as input
    (starting index from where splice should begin to till how many values splice should hapn)

    Ex: var arr = [ 1, 2, 3, 4, 5 ];
        arr.push(6);
        arr.pop();
        arr.unshift(0);
        arr.shift();
        arr.splice(2,1)  "here splicing begins from 2nd index till 1 value " output : [1,2,4,5] 

*/


/* ----------------------------- data types, functions, objects vs array ---------------------- */

/* 2 types of data types in javascript . 
    They are : 
            1. Primitive  (where we can store single type of data)
                Ex: Number, Strings, Boolean, Bigint, Symbol, Undefined, Null

            2. Reference   (where we can store multiple type of data)
                Ex: Arrays [], Objects {}, Functions or Method ()

    Note:   Objects always accepts the data in form of { key:value } pairs seperated by commas
        Ex: var user = {
                username : "maram",
                password : "abcd1234",
                secret key : 45678,
                greet : function(name) {
                    console.log("heyyy", name)
                },
            }

    Note :  1. There's a saying as Everything in javascript is eventually an object
            2. A function inside an object is a method. as in above example : user.greet("maram")
            3. ek se jaada bande ki baat ki to hua array, ek bande ke baare mein saari baat ki to hua object
            
*/


/* ----------------------------- forEach, map, filter, reduce  ----------------------------- */

/*

arr.forEach(function(e) {          /*only for arrays and always accepts a function 
    console.log("hyy")
    console.log(e*2);
    console.log(e+2);
}) 


var arr = [1, 2, 3, 4, 5];

var ans = arr.map(function(e) {              /* map is a method similar to forEach but it always  
    return e+2;                              *  accept a return value and can be stored in new arr
});                                          * used only in arrays

var ans1 = arr.filter(function (e) {
  return e < 4;
}); 



// var ans = arr.reduce(function(accumulator,currentValue) {          /* acc - accumeulator (can assume as what ur initial value be to start looping), cv - current value (can assume as index) 
//     accumulator += currentValue                       /* reduce meri purey array ko single value mei reduce ya convert karta hai 
//     return accumulator
// }, 0)                                  /* here 0 can be any value 
// console.log(ans);


/* --------------------------------  prompt, alert, Math.random  --------------------------- */

/* prompt("Enter Your name");
prompt("Enter your crush's name");

var n = Math.random();
n = Math.floor(n * 100) + 1;

alert("The probability of you two being together is " + n + "%"); */
