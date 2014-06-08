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
 * This file contains the JavaScript implementation of the Token class, a
 * class which helps the user apply different operations on the tokens of the
 * Holy Quran.
 *
 * This is a re-implementation of the original Java code written by Kais Dukes.
 * By re-implementation it is meant that the code tries, at least at the time
 * of writing this note, to achieve the same end functionality of the Java
 * code, but the implementation is not necessarily identical. Since the goal of
 * the re-implementation is to eventually support more features, it is highly
 * expected that the implementation might start to deviate in many areas from
 * the original Java code.
 *
 * @author rafidka@gmail.com (Rafid K. Abdullah)
 */

var Morphology = Morphology || {};

// TODO: Use RequireJS or another dependency management system.
if (Jsoop === undefined) {
  throw 'The Descriptor class depends on the Segment class.';
}


/**
 * Represents a token of the Holy Quran.
 * @class
 */
Morphology.Token = (function() {
  'use strict';

  /**
   * Constructs a token having the given prefix, stem, and postfix.
   * @param {!Object} remoteToken The token object received from the server.
   * @param {?Morphology.Document} document The Holy Quran document.
   * @param {?Morphology.Segment} prefix The prefix of the token.
   * @param {?Morphology.Segment} stem The stem of the token.
   * @param {?Morphology.Segment} suffix The postfix of the token.
   * @constructor
   */
  var Token = function(remoteToken, document, prefix, stem, suffix) {
    this.chapterNo = remoteToken.chapter_no;
    this.verseNo = remoteToken.verse_no;
    this.tokenNo = remoteToken.token_no;
    this.document = null;
    this.prefix = null;
    this.stem = null;
    this.suffix = null;
    if (document !== undefined) {
      this.document = document;
    }
    if (prefix !== undefined) {
      this.prefix = prefix;
    }
    if (stem !== undefined) {
      this.stem = stem;
    }
    if (suffix !== undefined) {
      this.suffix = suffix;
    }
  };

  /**
   * Sets
   * @param segment
   */
  Token.prototype.setSegment = function(segment) {
    if (segment.chapterNo !== this.chapterNo ||
        segment.verseNo !== this.verseNo ||
        segment.tokenNo !== this.tokenNo) {
      throw "Setting a segment in a token which it doesn't belong to";
    }
    if (segment.type.value === Morphology.SegmentType.Prefix) {
      this.prefix = segment;
    } else if (segment.type.value === Morphology.SegmentType.Stem) {
      this.stem = segment;
    } else if (segment.type.value === Morphology.SegmentType.Suffix) {
      this.suffix = segment;
    }
  };

  return Token;
}());

