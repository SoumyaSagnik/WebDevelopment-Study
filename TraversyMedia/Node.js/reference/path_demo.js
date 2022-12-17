const path = require("path");

// Basename - gets  the Base file name
console.log(__filename);
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename)); // finding directory from file name

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
console.log(path.parse(__filename));
/*
The above code returs this object.
{
  root: 'D:\\',
  dir: 'D:\\Web Development\\Traversy Media\\Node Js\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}
*/

// Concatenate paths
// Goal: current dir + test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));
// O/P: D:\Web Development\Traversy Media\Node Js\reference\test\hello.html
