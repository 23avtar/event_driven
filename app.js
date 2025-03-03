import EventEmitter from 'events'

const emitter = new EventEmitter()
emitter.on("abc",()=>{
    console.log("abc event fired 2")
})

emitter.on("abc",()=>{
    console.log("abc event fired 1")
})

console.log(emitter.emit("abc"))