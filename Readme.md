
# slice-arguments

slice arguments and common helpers

## Installing

`npm install slice-arguments`

`component install stagas/slice-arguments`

## Example

```js
var slice = require('slice-arguments');

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
```

## API

### slice(arguments)
### slice.call(arguments)

Returns arguments in an array.

### .callback([fn])

Returns the callback if present, or a noop
function, and optionally replaces with `fn`.

### .values()

Returns the arguments minus the callback
if present.

## License

MIT
