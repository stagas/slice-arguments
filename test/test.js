
var assert = require('assert');
var slice = require('../');

function foo(a, b, fn){
  var args = slice(arguments);
  assert(args.callback);
  assert(args.values);
  assert(fn === args.callback());
  assert('1,2' == args.values());
  assert(''+args.values() == slice.call(arguments).values());
  fn = args.callback(function(){
    fn(a + b);
  });
  assert(fn !== args.callback())
  args.callback()();
}

function bar(a, b){
  var args = slice(arguments);
  assert('function' == typeof args.callback());
  assert('2,3' == args.values());
  args.callback(function(){
    console.log('OK');
  });
  args.callback()();
}

foo(1, 2, function(res){
  assert(3 === res);
});

bar(2, 3);
