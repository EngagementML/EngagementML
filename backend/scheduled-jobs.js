const waitForData = require('./routes/InstaRoute')

function sayHello() {
    console.log('Scheduled Jobs Starting');
}

sayHello();

waitForData()

