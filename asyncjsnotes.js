
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