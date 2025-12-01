const EventEmitter = require('events')

const customEventEmitter = new EventEmitter()

customEventEmitter.on('response', (name, id)=>{
    console.log(`data received user: ${name}, id:${id}`)
})

customEventEmitter.on('response', ()=>{
    console.log('Next user')
})

customEventEmitter.emit('response', 'Tfuc', 7)