/**
 * Contains extensions to String object.
 * @author rafidka@gmail.com (Rafid K. Abdullah)
 */

if (!String.prototype.format) {
  /**
   * Formats a string by replacing placeholders of the form {...} with the
   * corresponding given indexed or named arguments.
   * This is taken from this from this Stack Overflow answer:
   * http://stackoverflow.com/a/4673436/196697
   * The arguments A set of indexed and named arguments to replace
   * the placeholders in the string.
   * @return {String} Returns the formatted string.
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