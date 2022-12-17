//fs --> File System.
const path = require("path");
const fs = require("fs");

// ! Create folder
// !mkdir by default is an async function which takes in a callback.
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created!");
// });

// ! Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;
//     console.log("Created and wrote the universal message!");

// ! File append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "\nAppending text",
//       (err) => {
//         if (err) throw err;
//         console.log("Appended successfully");
//       }
//     );
//   }
// );

// mkdir creates the fiolder and write file creates file inside that folder and writes Hello World! inside it!

// writeFile overwrites everything that's previously written in the file. So if you wanna add something new to the file without erasing the previously written contents use append file

// ! Apend again
// fs.appendFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "\nAppending text again",
//   (err) => {
//     if (err) throw err;
//     console.log("Appended successfully");
//   }
// );

// ! Read file.
// fs.readFile("../reference/test/hello.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// ! Note we can use dirname/.. again but using location directly here

// ! Rename file
fs.rename(
  "../reference/test/hello_world.txt",
  "../reference/test/hello.txt",
  (err) => {
    if (err) throw err;
  }
);
