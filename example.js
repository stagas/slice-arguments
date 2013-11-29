
/**
 * Example.
 */

var slice = require('./');

function foo(){
  var args = slice.call(arguments); // or just: slice(arguments)

  // get all values except callback if present
  console.log(args.values()); // => [ 'Hello' ]

  // get the callback if present
  console.log(args.callback()); // => [Function]

  // decorate callback
  var fn = args.callback(function(s){
    fn(s + '!');
  });

  bar.apply(this, args);
}

function bar(s, fn){
  fn(s + ', world');
}

foo('Hello', function(res){
  console.log(res); // => Hello, world!
});
