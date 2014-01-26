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
    var i;
    this.segments = [];
    for (i = 0; i < remoteSegments.length; i++) {
      var segment = new Morphology.Segment(remoteSegments[i]);
      segment.document = this;
      segment.indexInDoc = i;
      this.segments.push(segment);
    }
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
   * @return {number}
   */
  Document.prototype.getSegmentCount = function() {
    return this.segments.length;
  };

  return Document;
}());

