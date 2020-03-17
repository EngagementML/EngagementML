const waitForData = require('./routes/InstaRoute')

function sayHello() {
    console.log('Hello');
}
sayHello();

waitForData()