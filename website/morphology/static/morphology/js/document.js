/**
 * Copyright (C) Quranic Arabic Corpus, 2014.
 * Rafid K. Abdullah, rafidka@gmail.com (Developer of this file)
 * Kais Dukes, sckd@leeds.ac.uk (Original developer of Quranic Arabic Corpus)
 *
 * This file is part of the Quranic Arabic Corpus.
 *
 * This is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This software is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * the Quranic Arabic Corpus. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This file contains the JavaScript implementation of the Quran class, a class
 * which helps the user retrieves morphological information about the text of
 * the Holy Quran.
 *
 * Created on Jan-25-2014
 * Last modified on Jan-26-2014.
 *
 * @author rafidka@gmail.com (Rafid K. Abdullah)
 */

var Morphology = Morphology || {};


/**
 * A class representing
 * @class
 */
Morphology.Document = (function() {
  'use strict';

  /**
   * Constructs a Holy Quran object using the given segments.
   * @param {Morphology.Segment[]} segments An array of the segments. This
   * doesn't necessarily cover the whole text of the Holy Quran, only pass the
   * segments you want to get information about.
   * @constructor
   */
  var Document = function(remoteSegments) {
    var token, segment, segIndex, tokenIndex;
    this.segments = [];
    this.tokens = [];
    for (segIndex = 0; segIndex < remoteSegments.length; segIndex++) {
      // Creates a token to contain the segment if not already created.
      if (this.hasTokenAtIndex(segIndex)) {
        token = this.getToken(segIndex);
      } else {
        token = new Morphology.Token({
          chapter_no: remoteSegments[segIndex].chapter_no,
          verse_no: remoteSegments[segIndex].verse_no,
          token_no: remoteSegments[segIndex].token_no
        });
        this.tokens.push(token);
      }

      // Creates the segment.
      segment = new Morphology.Segment(remoteSegments[segIndex], this, token);
      segment.indexInDoc = segIndex;
      this.segments.push(segment);

      // Attaches the segment to the token.
      token.setSegment(segment);
    }
    debugger;
  };

  /**
   * Retrieves the segment at the given index.
   * @param {!number} index The index of the segment to retrieve.
   * @return {Morphology.Segment} The segment.
   */
  Document.prototype.getSegment = function(index) {
    if (index < 0 || index >= this.getSegmentCount()) {
      throw 'Segment index out of range.';
    }
    return this.segments[index];
  };

  /**
   * Retrieves the number of segments in the document.
   * @return {number} The number of segments in the document.
   */
  Document.prototype.getSegmentCount = function() {
    return this.segments.length;
  };

  /**
   * Retrieves the token at the given index.
   * @param {!number} index The index of the token to retrieve.
   * @return {Morphology.Token} The token.
   */
  Document.prototype.getToken = function(index) {
    if (index < 0 || index >= this.getSegmentCount()) {
      throw 'Segment index out of range.';
    }
    return this.tokens[index];
  };

  /**
   * Retrieves the number of tokens in the document.
   * @return {number} The number of tokens in the document.
   */
  Document.prototype.getTokenCount = function() {
    return this.tokens.length;
  };

  /**
   * Determines whether there is a token with the given index.
   * @param {!number} index The index of the token.
   * @return {boolean} True or false.
   */
  Document.prototype.hasTokenAtIndex = function(index) {
    return index >= 0 && index < this.getTokenCount();
  };

  return Document;
}());

