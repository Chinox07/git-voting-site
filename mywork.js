
const EventEmitter = require('events');


const emitter = new EventEmitter();



const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', function(arg) {
    console.log('Listener called', arg);
});
logger.log('message');