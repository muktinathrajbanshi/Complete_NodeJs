// Import EventEmitter class
const EventEmitter = require ("events");

//Create an instance of EventEmitter
const emitter = new EventEmitter();
// 1. Define an event listener (addListener)
// emitter.on("greet", (situation, target) => {
//     console.log(`Muktinath ${situation}, ${target}`);
// });

// //2. Trigger (emit) the "greet" event
// emitter.emit("greet", "are you fine", "I am missing you");

//! but it's best idea to take a single argument as an object.
// 1. Define an event listener (addListener)
emitter.on("greet", (arg) => {
    console.log(`Muktinath ${arg.situation}, ${arg.target}`);
});

//2. Trigger (emit) the "greet" event
emitter.emit("greet", {situation: "are you fine", target: "I am missing you"});
