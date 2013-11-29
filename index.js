
/*!
 *
 * slice-arguments
 *
 * MIT
 *
 */

/**
 * Module dependencies.
 */

var slice = require('sliced');
var merge = require('merge');

/**
 * Returns arguments in an array.
 *
 * @param {Object} [args]
 * @return {Array}
 * @api public
 */

module.exports = function(args){
  var arr = slice(args || this);
  merge(arr, proto);
  return arr;
};

/**
 * Proto.
 */

var proto = {};

/**
 * Returns the callback if present, or a noop
 * function, and optionally replaces with `fn`.
 *
 * @param {Function} [fn]
 * @return {Function}
 * @api public
 */

proto.callback = function(fn){
  var last = this.length - 1;
  var cb = this[last];
  if ('function' == typeof cb) {
    if (fn) this[last] = fn;
    return cb;
  } else {
    if (fn) this.push(fn);
    return noop;
  }
};

/**
 * Returns the arguments minus the callback
 * if present.
 *
 * @return {Array}
 * @api public
 */

proto.values = function(){
  var last = this.length - 1;
  var cb = this[last];
  if ('function' == typeof cb) return this.slice(0, -1);
  else return this.slice();
};

/**
 * No operation.
 *
 * @api private
 */

function noop(){};
