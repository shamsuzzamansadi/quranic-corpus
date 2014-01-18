/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Rafid K. Abdullah
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

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
