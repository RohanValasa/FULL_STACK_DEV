// // const rohan = require('events') //returns a class
// // const myEmitter = new rohan(); //myEmitter is an object created for that class
// // console.log(rohan)

// // myEmitter.on('signal',()=>{
// //     console.log('Hello , Rohan')
// // }) //bulb on aithadhi

// // myEmitter.emit('signal') //switch on chestav

// let events = require('events')
// let EventEmitter = new events.EventEmitter(); // this is like EventEmitter.EventEmitter()
// console.log(EventEmitter)
// let myEventHandler = function() {
//     console.log('I hear a scream')
// }



// EventEmitter.on('scream',myEventHandler) //Here scream is the event name
// EventEmitter.emit('scream') //whenever an event named scream happens then call myEventHandler




//Passing Arguments to event handlers
const EventEmitter = require('events')
const obj = new EventEmitter()
// obj.on('userJoined',(uname,uid)=>{
//     console.log(`${uname} (${uid}) joined the chat`)
// })
// obj.emit('userJoined','Rohan','229')

obj.on('error',(err)=>{
    console.error('An error has occurred : ',err.message)
})
obj.emit('error',new Error('Something went wrong'))
