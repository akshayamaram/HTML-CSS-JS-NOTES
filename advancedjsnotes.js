
/* -------------------------------- higher order functions ---------------------------------- */

/*

    - Higher order functions are the functions which accept a function in a parameter or return 
      a function or both
    
    Ex: forEach method always takes another function inside it, so foEach is a higher order function

    Ex-1:   function abcd(val){

            }
            abcd(function(){});                /* now abcd() is a higher order function
    
    Ex-2:   function defg() {
            return function(){}               /* here defg() is also a higher order function
            }

*/


/* ---------------------------- new keyword, constructor function --------------------------- */

/* 

    when we use constructor function : When you find yourself in a situation where you need to 
    create several elements with similar characteristics or properties, you can use a constructor 
    function. A constructor function is like a blueprint for creating objects with 
    predefined properties and behaviors.

    constructor function : it is such a function whose work is creating new new objects whenever 
    there is a new keyword before it. and whenever that function is called it will automatically
    create new imaginary blank objects with those parent ( key : value ) pairs by using this keyword.

    new keyword : used to create an instance of an object that has a constructor function
    (whenever we see a new keyword before function or variable or any, just make or imagine a blank 
    object in our mind)

    Note:  call the function which is next to that new word and in that function whenever we see 
           "this" word and the property name which the this word used (or written next to the this word
           using dot operator like "this.name", "this.age") , take those property names and put them 
           in the imaginary object that is created by new keyword and the values in which were saved 
           using that (like -> this.name = "maram", this.age = 22"), (this.propertyname = "value";) 
           take those values and put them in imaginary object. so now that imaginary object contains 
           the same set of ( key : value ) or ( propertyname : value ) pairs without this keyword.

    
    Ex-1:   function buiscuitMaker() {
                this.name = "parleG";
                this.shape = "round";
                this.cost = 5;
            }

            new buiscuitMaker();

        
    Ex-2:   function Car(brand, model, year) {       /* Constructor function for creating car objects
                this.brand = brand;
                this.model = model;
                this.year = year;
            }

            var car1 = new Car("Toyota", "Camry", 2022);         /* Creating instances (objects)
            var car2 = new Car("Honda", "Civic", 2023);          * using the constructor function
    
*/


/* -------------------------------- first class functions  --------------------------------- */

/*  When we treat functions similar to a normal values or normal variables then we call such type
    of functions as first class functions (like we can save functions in a variable in javascript)  
    also (we can send a function as an argument to another function's paramater like below example)

    Ex:     function abcd(val) {
                val();
            }
            abcd(function() {console.log("12");})

*/


/* ----------------------------------------- iife ---------------------------------------- */

/*

    - iffe : immediately invoked function expression
    - used to create private variables and cannot be accesed outside of that function

    Ex-1:   (function() {                      /* this is called an iife fuunction n how it looks

            })()


    Ex-2:   var ans = (function(){
                var privateval = 12;            /* can access that private variable by "ans.getter()" 

                return {
                    getter: function() {              
                        console.log(privateval);
                    },
                    setter: function(newprivateval) {   /* can change the private val using "ans.setter(97)"
                    privateval = newprivateval;
                    }
                }
            })()

*/

/* -------------------------- prototype, prototypal inheritance ------------------------------ */

/*

    -   prototype : every created object gets a property called prototype, which means whenever you 
        create an object it gets prototype property automatically

    -   javascript by default adds a property called [[prototype]] to every object, so if you ever see
        any object, you can blindly say that object contains prototype, so now, what does it contains ?

    -   [[prototype]] contains many helper properties and methods which we can use to complete our task,
        let's say we create an array and we want to know length of it, what do we do, we use .length
        property on array, did we created .length on that array, no! but it still contains .length, 
        the question is how ?

    -   the answer is, many properties and methods are already available to use, built by javascript
        creators inside prototype of every object.


    -   Prototypal inheritance : Inheritance is basically passing parent's features or properties to
        their childrens to do the same thing in javascript with the help of javascript (one extra
        property always given by javascript to every object) is called as  proptotypal inheritance.
    
    Ex:     var human = {
                name: "akshay",
                canTalk: true,
                canFly: false,
                age: 22
            }

            var coder = {
                canCode: true,
                canMakeWebsites: true
            }

            coder.__proto__ = human;    /* now all properties of human will also get added to coder

*/


/* ----------------------------------- this keyword --------------------------------------- */

/*

    - this : this keyword is a special keyword in javascript. it's values changes depending upon
             different different contexts.
    
    Ex-1:   In global scope     :   console.log(this)                   gives   window


    Ex-2:   In function scope   :   function abcd() {
                                    console.log(this);                  gives   window
                                    }


    Ex-3:   In method scope     :   var obj = {
                                        name: "akshay",
                                        someMethod: function() {
                                            console.log(this)           gives   parent's object  
                                        }
                                    }
                                    obj.someMethod();
            
        Note-1  :   a function inside an object is called as a method
        Note-2  :   in any method, "this" keyword always refers to parent object


    Ex-4:   In event listeners  :   var button = document.querySelector("button");
                                    button.addEventListener("click", function() {
                                        console.log(this);
                                        this.style.color = "red";
                                    })

        Note    :   Here "this" keyword refers to or equal to whatever written before 
                    addEventListener, in the above case it refers to button

*/


/* ------------------------------- call, apply & bind --------------------------------------- */

/*

    - call : When you have a function and an object, and you want to ensure that 
      when the function runs, the this keyword inside the function refers to a specific object rather
      than the default global object (which is typically the window object in a browser environment), 
      you can use the call or apply method.

    Ex-1:   function abcd (){
                console.log(this);
            }
            var obj = {age: 24}
            abcd.call(obj);

    Ex-2:   function abcd (val1, val2, val3){               /* when arguments are involved
                console.log(this, val1, val2, val3);
            }
            var obj = {age: 24}
            abcd.call(obj, 1, 2, 3);


    - apply : almost similar to call method, slight difference is seen when we are passing arguments 
      at the time of calling the function, we pass them in the array form

    Ex:     function abcd (val1, val2, val3){               /* when arguments are involved
                console.log(this, val1, val2, val3);
            }
            var obj = {age: 24}
            abcd.apply(obj, [1, 2, 3]);         /* we pass those arg values in array form 
    

    - bind  : similar to both call & apply methods, but when we use bind then we have to save that
      binded function in a seperate variable and call that new function

    Ex:     function abcd (){
                console.log(this);
            }
            var obj = {age: 24}
            var bindedFunction = abcd.bind(obj);
            bindedFunction();

*/


/* ------------------------------ pure and impure functions ---------------------------------- */

/*

    - Pure function is any function which has these 2 features :
        1.  it should always return same output for same input
        2.  it will never change/update the value of a global variable.
        3. if it dosen't follow above rules then it will automatically be an impure function
    
    Ex - pure function:         function abcd(a,b) {
                                    return a*b;
                                }

                                var ans1 = abcd(2,3);
                                var ans2 = abcd(2,3);

    Ex - impure function :      function abcd (a) {
                                    return Math.random()*a;
                                }
                                var ans1 = abcd(3);
                                var ans2 = abcd(3);

*/
