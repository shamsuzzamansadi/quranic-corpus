/**
 * Contains extensions to JavaScript string object.
 * @author rafidka@gmail.com (Rafid K. Abdullah)
 */

if (!String.prototype.format) {
  /**
   * Formats a string by replacing placeholders of the form {...} with the
   * corresponding given indexed or named arguments.
   *
   * The arguments are a set of indexed and named arguments to replace the
   * placeholders in the string.
   *
   * This is taken from this from this Stack Overflow answer:
   * http://stackoverflow.com/a/4673436/196697
   * and is thus bound by StackOverflow licence, which is licenced under
   * CC-BY-SA 3.0 at the time of writing this comment, Jan-18 2014.
   *
   * @return {String} The formatted string.
   */
  String.prototype.format = function() {
    'use strict';
    var args;
    args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return args[number] !== 'undefined' ? args[number] : match;
    });
  };
}

