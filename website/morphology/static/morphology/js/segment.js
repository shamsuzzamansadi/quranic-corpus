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
 * This file contains the JavaScript implementation of the Segment class, a
 * class which helps the user apply different operations on the segments of the
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

// TODO: Find a better place for defining enums.


/**
 * Specifies whether the segment refers to the first, second, or third person.
 * @enum {string}
 */
Morphology.Person = Jsoop.defineEnum({
  /** The segment refers to the first person. */
  First: '1',
  /** The segment refers to the second person. */
  Second: '2',
  /** The segment refers to the third person. */
  Third: '3'
});


/**
 * Specifies the gender of the segment.
 * @enum {string}
 */
Morphology.Gender = Jsoop.defineEnum({
  /** Masculine */
  Masculine: 'M',
  /** Feminine */
  Feminine: 'F'
});


/**
 * Specifies the number of people a segment refers to.
 * @enum {string}
 */
Morphology.Number = Jsoop.defineEnum({
  /** The segment refers to a single person. */
  Singular: 'S',
  /** The segment refers to two persons. */
  Dual: 'D',
  /** The segment refers to three or more persons. */
  Plural: 'P'
});


/**
 * Specifies the type of a segment.
 * @enum {string}
 */
Morphology.SegmentType = Jsoop.defineEnum({
  /** The segment is a prefix, for example bi in basmala. */
  Prefix: 'PREFIX',
  /** The segment is a stem, for example ism in basmala. */
  Stem: 'STEM',
  /** The segment is a suffix, for example naa in Thahabna. */
  Suffix: 'SUFFIX'
});


/**
 * An enumeration used to specify the case of a noun, which can be either
 * nominative (مرفوع), accusative (منصوب), or genitive (مجرور).
 * @enum {string}
 */
Morphology.SegmentCase = Jsoop.defineEnum({
  /** The noun case is nominative (مرفوع). */
  Nominative: 'NOM',
  /** The noun case is accusative (منصوب). */
  Accusative: 'ACC',
  /** The noun case is genitive (مجرور). */
  Genitive: 'GEN'
});


/**
 * An enumeration used to specify the part of speech of a certain segment.
 * @enum {string}
 */
Morphology.PartOfSpeeh = Jsoop.defineEnum({
  /** Noun (N). */
  Noun: 'N',

  /** Proper noun (PN). */
  ProperNoun: 'PN',

  /** Personal pronoun (PRON). */
  Pronoun: 'PRON',

  /** Demonstrative pronoun (DEM). */
  Demonstrative: 'DEM',

  /** Relative pronoun (REL). */
  Relative: 'REL',

  /** * Adjective (ADJ). */
  Adjective: 'ADJ',

  /** Verb (V). */
  Verb: 'V',

  /** Preposition (P). */
  Preposition: 'P',

  /** Interrogative particle (INTG). */
  Interrogative: 'INTG',

  /** Vocative particle (VOC). */
  Vocative: 'VOC',

  /** Negative particle (NEG). */
  Negative: 'NEG',

  /** Emphatic particle (EMPH). */
  Emphatic: 'EMPH',

  /** Particle of purpose (PRP). */
  Purpose: 'PRP',

  /** Imperative particle (IMPV). */
  Imperative: 'IMPV',

  /** Future particle (FUT). */
  Future: 'FUT',

  /** Conjunction (CONJ). */
  Conjunction: 'CONJ',

  /** Determiner (DET). */
  Determiner: 'DET',

  /** Quranic initials (INL). */
  Initials: 'INL',

  /** Time adverb (T). */
  Time: 'T',

  /** Location adverb (LOC). */
  Location: 'LOC',

  /** Harf nasb (ACC). */
  Accusative: 'ACC',

  /** Harf shart (COND). */
  Conditional: 'COND',

  /** Harf masdaree (SUB). */
  SubordinatingConjunction: 'SUB',

  /** Adaat hasr (RES). */
  Restriction: 'RES',

  /** Adaat istithnaa (EXP). */
  Exceptive: 'EXP',

  /** Harf rad3 (AVR). */
  Aversion: 'AVR',

  /** Harf tahqeeq (CERT). */
  Certainty: 'CERT',

  /** Harf idraab (RET). */
  Retraction: 'RET',

  /** Kaafa wa makfoofa (PREV). */
  Preventive: 'PREV',

  /** Harf jawaab (ANS). */
  Answer: 'ANS',

  /** Harf ibtidaa (INC). */
  Inceptive: 'INC',

  /** Harf fajaa (SUR). */
  Surprise: 'SUR',

  /** Harf za'ida (SUP). */
  Supplemental: 'SUP',

  /** Harf tahdeed (EXH). */
  Exhortation: 'EXH',

  /** Ism fi3il amr (IMPN). */
  ImperativeVerbalNoun: 'IMPN',

  /** Harf tafseel (EXL). */
  Explanation: 'EXL',

  /** Harf taswiya (EQ). */
  Equalization: 'EQ',

  /** Harf istinaf (REM). */
  Resumption: 'REM',

  /** Harf sababiyya (CAUS). */
  Cause: 'CAUS',

  /** Harf istidrak (AMD). */
  Amendment: 'AMD',

  /** Prohibition particle (PRO). */
  Prohibition: 'PRO',

  /** Circumstantial particle (CIRC). */
  Circumstantial: 'CIRC',

  /** Result (RSLT). */
  Result: 'RSLT',

  /** Interpretation (INT). */
  Interpretation: 'INT',

  /** Comitative (COM). */
  Comitative: 'COM'
});


/**
 * Represents a Segment of the Holy Quran.
 */
Morphology.Segment = (function() {
  'use strict';

  /**
   * If the feature passed to the function specifies the type of the segment,
   * this function reads it and returns true, otherwise it returns false.
   * @param {Morphology.Segment} segment The segment.
   * @param {string} feature A string specifying the feature.
   * @return {boolean} Whether the function was successful or not.
   * @private
   */
  function _setType(segment, feature) {
    if (!Morphology.SegmentType.isValidValue(feature)) {
      return false;
    }
    segment.type = new Morphology.SegmentType(feature);
    return true;
  }

  /**
   * If the feature passed to the function specifies the case of the segment
   * (specifically, nominal segments), this function reads it and returns true,
   * otherwise it returns false.
   * @param {Morphology.Segment} segment The segment.
   * @param {string} feature A string specifying the feature.
   * @return {boolean} Whether the function was successful or not.
   * @private
   */
  function _setCase(segment, feature) {
    if (!Morphology.SegmentCase.isValidValue(feature)) {
      return false;
    }
    segment.case = new Morphology.SegmentCase(feature);
    return true;
  }

  /**
   * Sets the part of speech of the given segment depending on the part of
   * speech value.
   * @param {Morphology.Segment} segment The segment.
   * @param {String} partOfSpeech The string representing the part of speech.
   * @private
   */
  function _setPartOfSpeech(segment, partOfSpeech) {
    if (!Morphology.PartOfSpeeh.isValidValue(partOfSpeech)) {
      throw 'Invalid part of speech value.';
    }
    segment.partOfSpeech = new Morphology.PartOfSpeeh(partOfSpeech);
  }

  /**
   * Sets the lemma of the segment to the given one.
   * @param {Morphology.Segment} segment The segment.
   * @param {String} lemma The lemma.
   * @private
   */
  function _setLemma(segment, lemma) {
    // TODO: Buckwalter-decode the lemma.
    segment.lemma = lemma;
  }

  /**
   * Sets the root of the segment to the given one.
   * @param {Morphology.Segment} segment The segment.
   * @param {String} root The root.
   * @private
   */
  function _setRoot(segment, root) {
    // TODO: Buckwalter-decode the root.
    segment.root = root;
  }


  /**
   * If the feature passed to the function specifies the person type, gender, or
   * number of the segment, this function reads it and returns true, otherwise
   * it returns false.
   * @param {Morphology.Segment} segment The segment.
   * @param {String} feature A string specifying the feature.
   * @return {boolean} true or false depending on the success of the function.
   * @private
   */
  function _readPersonGenderNumber(segment, feature) {
    var allowedValues = ['1P', '1S', '2D', '2FP', '2FS',
      '2MD', '2FD', '2MP', '2MS', '3D', '3FD', '3FP', '3FS', '3MD',
      '3MP', '3MS', 'F', 'FD', 'FP', 'FS', 'M', 'MD', 'MP', 'MS', 'P'];

    if (allowedValues.indexOf(feature) === -1) {
      return false;
    }

    var i;
    for (i = 0; i < feature.length; i++) {
      if (Morphology.Person.isValidValue(feature[i])) {
        segment.person = new Morphology.Person(feature[i]);
      }
      if (Morphology.Gender.isValidValue(feature[i])) {
        segment.gender = new Morphology.Gender(feature[i]);
      }
      if (Morphology.Number.isValidValue(feature[i])) {
        segment.number = new Morphology.Number(feature[i]);
      }
    }
    return true;
  }

  /**
   * Parses the features field of the given segment.
   * @param {Morphology.Segment} segment The segment.
   */
  function _extractFeatures(segment) {
    var i;
    var setterFuncs = {
      // We don't need this (at least for now) because the morphology document
      // retrieved from the website already contain a field specifying the
      // part of speech, and the features field doesn't always explicitly
      // contain the part of speech (e.g. POS|N), so sometimes we need to do
      // some processing, so for now the field provided by the morphology
      // document seems to do the job.
      //'POS': _setPartOfSpeech,
      'LEM': _setLemma,
      'ROOT': _setRoot
    };
    var featuresItems = segment.features.split('|');
    for (i = 0; i < featuresItems.length; i++) {
      if (_setType(segment, featuresItems[i])) {
        continue;
      }
      else if (_setCase(segment, featuresItems[i])) {
        continue;
      }
      else if (_readPersonGenderNumber(segment, featuresItems[i])) {
        continue;
      }
      var feature = featuresItems[i].split(':');
      var name = feature[0];
      var value = feature[1];
      var func = setterFuncs[name];
      if (typeof func === 'function') {
        func(segment, value);
      }
    }
  }


  /**
   * Constructs a segment of the Holy Quran from a segment object received
   * from the server. This allows operations on segments to be executed on the
   * client-side.
   * @param {!Object} remoteSegment The segment object received from the server.
   * @constructor
   */
  var Segment = function(remoteSegment) {
    // Not sued for now. Uncomment when you need them.
    //this.chapterNo = remoteSegment.chapter_no;
    //this.verseNo = remoteSegment.verse_no;
    //this.tokenNo = remoteSegment.token_no;
    //this.segmentNo = remoteSegment.segment_no;
    //this.form = remoteSegment.form;
    this.features = remoteSegment.features;
    //this.tag = remoteSegment.tag;
    this.type = null;
    // TODO: 'case' is a reserved word, so it might be better to find another
    // word, but I can't think of anything at this moment, because 'case' is
    // the word used in Kais's work, and if I use a word like caseType, then
    // it will different than the naming convention used in other fields.
    this.case = null;
    // In the Java application, the tag is being decided for prefixes depending
    // on the prefix itself, e.g. bi+ is a preposition. But the tag coming
    // from the morphology file is actually the part of speech, so I am just
    // using it here. If this proves to be incorrect, then we need to implement
    // the functionality to extract the part of speech.
    if (!Morphology.PartOfSpeeh.isValidValue(remoteSegment.tag)) {
      throw 'Invalid segment tag.';
    }
    this.partOfSpeech = new Morphology.PartOfSpeeh(remoteSegment.tag);
    this.lemma = null;
    this.root = null;
    this.person = null;
    this.gender = null;
    this.number = null;

    _extractFeatures(this);
  };


  // /**
  //  * Generates a morphological description of the segment. For example, the
  //  * word "Al-Rahman" in Surat Al-Fatha generates "genitive masculine
  //  * singular adjective"
  //  * @return {string} A string describing the grammar.
  //  */
  // Segment.prototype.generateMorphologicalDescription = function() {
  //   return '';
  // };

  /**
   * Retrieves the name of the segment, e.g. noun, active participle, etc.
   * @return {string} The name of the segment.
   */
  Segment.prototype.getName = function() {
    switch (this.partOfSpeech.value) {
      case Morphology.PartOfSpeeh.Preposition:
        return 'preposition';
      case Morphology.PartOfSpeeh.Determiner:
        return 'determiner';
      case Morphology.PartOfSpeeh.Noun:
        return 'noun';
      case Morphology.PartOfSpeeh.ProperNoun:
        return 'proper noun';
      case Morphology.PartOfSpeeh.Adjective:
        return 'adjective';
      default:
        throw 'Not implemented yet.';
    }
  };

  return Segment;
}());

