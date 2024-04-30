// /// This is  the start of backend class 2 
// title // Node js and npm with file system operations | Part 2 | Backend Development//
// .........................................................................................
//  fs
// const fs = require('fs');

// fs.writeFile('hey.text', 'hey  hello kese hu', function(err){
//     if(err) console.error(err);
//     else console.log("done1");
// })

// fs.appendFile('hey.text', ' main tu acha hu', function(err){
//     if(err) console.error(err);
//     else console.log("done2");
// })

// fs.rename('hey.text', ' hello.text', function(err){
//     if(err) console.error(err);
//     else console.log("done3");
// })

// fs.copyFile("hello.text", "./copy/copy.text", function(err){
//     if(err) console.error(err);
//     else console.log("done4");
// })

// fs.unlink(" hello.text", function(err){
//     if(err) console.log(err)
//     else console.log("removed")
// })

// fs.rm("./copy", {recursive: true}, function(err){
//     if(err) console.log(err)
//      else console.log("removed")
// }) 

// now learn in your self how to read folder or file with fs

// HTTP 
// const http = require('node:http');

// const server = http.createServer(function(req, res){
//     res.end("hello world");
// })

// server.listen(3000);

// end of class 2..................................................
//.....X.........X..........X...........X............X..........

// /// This is  the start of backend class 3
// title // NPM Basics & Advanced Features | Part 3 - Backend Development.
// ...................................................................................


//  install chalk if you want to see color full terminal
// console.log("Hello world")

// end of class 3..................................................
//.....X.........X..........X...........X............X..........


// /// This is  the start of backend class 4
// Title // Express.js, Routing & Middleware | Part 4 - Backend Development...
// ........................................................................

// Introduction of Express.js:
// Q) what is express.js
// A) Express js is a framwork and npm package
// Express.js manages everything from receivng the request and giving the response


// const express = require('express')
// const app = express();

// // this is middleware 
// app.use(function(req, res, next){
//     console.log('middleware chala');
//     next();
// });

// app.use(function(req, res, next){
//     console.log('middleware chala ek ure baar');
//     next();
// });
// // ..

// // this is routing
// app.get('/', function (req, res) {
//   res.send('home')
// });

// app.get('/about', function (req, res) {
//     res.send('about')
// });

// app.get('/profile', function (req, res, next) {
//     return next(new Error("somthing went wrong"))
// });
// // ...

// // this is error handling
// app.use(function(err, req, res, next){
//     console.error(err.stack)
//     res.status(500).send("somthing broke!")
// })

// app.listen(3000)

// end of class 4..................................................
//.....X.........X..........X...........X............X..........


// /// This is  the start of backend class 5 & 6
// Title // Form Handling, Sessions & Cookies | Part 5 - Backend Development... && ....
// Title // EJS, Dynamic routing, Initializing project | Part 6 - Backend Development....
// ........................................................................

// This is  class 5 and class 6 is a project which is in the other directory named project project

// const express = require('express');
// const app = express();

// // these are middlewaes 
// app.use(express.json();
// app.use(express.urlencoded({ extended: true }));
