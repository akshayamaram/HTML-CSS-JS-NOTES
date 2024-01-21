
/* ----------------------------- asynchronous javascript everything ----------------------------- */


/* ------------------------------------- async vs async ------------------------------------------ */

/*

    - synchronous javascript    : executing line by line , untill the 1st line completes executing,
      then only the next one will start

    - asynchronous javascript   : everthing starts at same time, whichever finishes fast it will get
      executed first, and so on , they may not be in orderly manner

    - what is asynchronous javascript and why we need to write async code ??

        Ans : Many times, your final code depends on another server, and in such cases, you don't know when the response will return from that server. To handle this uncertainty and avoid blocking, we write asynchronous code. This allows the code to continue executing while waiting for the response, and when the answer arrives, the code related to that response is then executed.

    - How can we know whether we are writing synchronous code or asynchronous code ??

        Ans : if you are using any of the follwing methods or classes then it is async code. They are :

                1. setTimeout()
                2. setInterval()
                3. promises
                4. fetch
                5. axios
                6. xmlhttpRequests  ... etc ...

        Ex  :   console.log("hey1");                                /* output : hey1
                setTimeout(function(){                              *           hey3
                    console.log("hey2");                            *           hey2
                }, 2000);
                console.log("hey3")          
        
        Note    :   in async code callback function runs only when it get's it's answer. here in setTimeout function , the function inside of it is a "callback function"

    - How javascript is not asynchronous ??

        Ans : async means simply doing two works at a time or multi-tasking in simple terms. but javascript cannot do two things at a time. it can always do only one thing at a time . so how can we justify the question means using a concept called "main stack and side stack"


    - asynchronous real world examples ??

        Ans : 1. when we are using node with database
              2. fetch
              3. setTimeout
              4. setInterval

              From Conceptual view :

              5. concurrency :  Concurrency in JavaScript involves executing tasks simultaneously. While synchronous (sync) code runs line by line in the main stack, asynchronous (async) code, often moved to the side stack, allows handling multiple tasks concurrently for improved efficiency.

              6. parallelism :  Parallelism in JavaScript involves the simultaneous execution of multiple operations, leveraging mechanisms such as Web Workers or parallel programming libraries. This approach enables the utilization of multiple CPU cores, improving performance by dividing tasks into smaller units that can be processed concurrently, ultimately enhancing the efficiency of computation-heavy operations.

              7. throttling :   Throttling in JavaScript is like controlling how often a function can be called, ensuring it doesn't run too frequently, which can be useful for performance optimization.


*/

/* ---------------------------- event loop, single & multi-threading ---------------------------- */

/*

    - Event loop : event loop is the one which checks whether the main stack is empty or not, and if  
      it empty it takes task from side stack to main stack for execution. 

    Note :  in clear terms, main stack is always executed first and contains synchronous code. other
    than that , there is one more stack called side stack ans it contains async code and waits until 
    the main stack gets empty.
    
    Ex :    console.log("hey1");                    /* output : hey1
            console.log("hey2");                     *          hey2
            setTimeout(function(){                   *          hey4
                console.log("hey3");                 *          hey3
            }, 0);
            console.log("hey4");

    - single & multi threading : Single threading means doing one thing at a time, like a single train 
      track. Multi-threading is doing multiple things simultaneously, like multiple train tracks.
      JavaScript is mainly single-threaded but uses asynchronous operations for concurrent tasks.

*/


/* ------------------------------------ callbacks in depth ------------------------------------- */

/*

    - callback : callback is always a function just like a normal function. in async code callback  function runs only when it get's it's answer. here in setTimeout function , the function inside of it is a "callback function"

    Ex :    setTimeout(function() {
            console.log("heyyy");
            }, 3000)

*/


/* -------------------------------------- promises ------------------------------------------- */

/*

    - promises :  There might be two scenarios with promises. They can be  1. Resolve 2. Reject
    - promise always accepts a function

    Note  :   promise is a constructor function so it always invoked by the "new" keyword 
    
    Ex-1  :   var ans = new Promise((res, rej) => {
                  if(false) {
                    return res();
                  }
                  else {
                    return rej();
                  }
              })

              ans.then(function(){
                  console.log("resolved");
              }).catch(function() {
                  console.log("rejected");
              })


    Ex-2  :  user will ask for a number between 0-9 and if the number is below 5 resolve if not reject

    Ans   :   var ans = new Promise((res, rej) => {
                  var n = Math.floor(Math.random() * 10);

                  if (n < 5) {
                    return res();
                  }
                  else {
                    return rej();
                  }
              })

              ans.then(() => {
                  console.log("below 5");
              }).catch(() => {
                  console.log("above 5");
              })
    
    Ex-3  :   construct this  promises : wakeup, get ready, go school, study, back home, sleep

    Ans   :   var ps1 = new Promise((res, rej) => {
                  return res("wake up");
              })

              var ps2 = ps1.then((data) => {
                  console.log(data);
                  return new Promise((res, rej) => {
                      return res("get ready");
                  })
              })

              var ps3 = ps2.then((data) => {
                  console.log(data);
                  return new Promise((res, rej) => {
                      return res("go school")
                  })
              })

              var ps4 = ps3.then((data) => {
                  console.log(data);
                  return new Promise((res, rej) => {
                      return res("study")
                  })
              })

              var ps5 = ps4.then((data) => {
                  console.log(data);
                  return new Promise((res, rej) => {
                      return res("back home")
                  })
              })

              var ps6 = ps5.then((data) => {
                  console.log(data);
                  return new Promise((res, rej) => {
                      return res("sleep")
                  })
              })

              ps6.then((data) => {
                console.log(data);
              })

        Note  :   this is what we call as "promise chaining" or "promise waterfall" concept

*/


/* ------------------------------------ async, await ---------------------------------------- */

/*

    - async  & await :  In any function where you write asynchronous code, you can use Promises. Once  the asynchronous task is completed, you typically use a then block. To simplify and avoid callback nesting, you have an alternative option: you can use async/await syntax.

    - Now lets see two codes one using "then" another using "async & await", both does the same job

    Using then  :   function abcd() {
                        fetch(`https://randomuser.me/api/`)
                            .then(function(raw) {
                                return raw.json();
                            })
                            .then(function(data) {
                              console.log(data);
                            })
                      }

                    abcd();

    Using async&await :   async function abcd() {
                              let raw = await fetch(`https://randomuser.me/api/`);
                              let data = await raw.json();
                              console.log(data);
                          }

                          abcd();

    Note :  how easy it has become now using async & await , simplifies the code 

*/

