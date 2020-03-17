const waitForData = require('./backend/routes/InstaRoute')

function sayHello() {
    console.log('Hello');
}
sayHello();

waitForData()