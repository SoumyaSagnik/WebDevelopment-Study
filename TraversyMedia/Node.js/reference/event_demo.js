const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => {
  console.log("Event fired");
});

// Init event
myEmitter.emit("event");
//* Whenever any event happens now line 11 will be executed!
