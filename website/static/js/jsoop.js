/**
 * A library that emulates Object Oriented Programming (OOP) in JavaScript.
 * @author rafidka@gmail.com (Rafid K. Abdullah)
 */

var Jsoop = Jsoop || {};


// TODO: Update the function such that it accepts an array as well as a
// dictionary, and in this case automatically assigns numerical auto-increment
// value.
/**
 * Defines a new enumeration class.
 * @param {Object} enumFields A dictionary of the fields of the enum to create
 * and their values.
 * @return {Function} The enumeration class.
 */
Jsoop.defineEnum = function(enumFields) {
  'use strict';


  /**
   * Constructs a new object of the enum type.
   * @param {*} value The value of the enum.
   * @constructor
   */
  var newEnum = function(value) {
    this.value = value;
  };

  // Copy the enum fields over to the enum class.
  var e;
  for (e in enumFields) {
    if (enumFields.hasOwnProperty(e)) {
      newEnum[e] = enumFields[e];
    }
  }


  /**
   * Determines whether the given value is a valid value of the enum.
   * @param {*} value The value to be checked.
   * @return {boolean} True or false.
   */
  newEnum.isValidValue = function(value) {
    var e;
    for (e in newEnum) {
      if (newEnum.hasOwnProperty(e) && newEnum[e] === value) {
        return true;
      }
    }
    return false;
  };


  /**
   * Returns a string representation of the enum.
   * @return {String} A string representation of the enum value.
   */
  newEnum.prototype.toString = function() {
    var e;
    for (e in newEnum) {
      if (newEnum.hasOwnProperty(e) && newEnum[e] === this.value) {
        return e;
      }
    }
    throw 'Invalid enum value.';
  };

  return newEnum;
};
