const five = require('five');
// https://github.com/learn-co-curriculum/node-js-hello-flatiron
const helloFlatiron = require('hello-flatiron');

module.exports = function dashedHello(name) {
  return helloFlatiron(`Hello, ${name}.`, result => {
    console.log(result);
    console.log(`High ${five.loud()}! ${five.upHigh()}`);
  });
}
