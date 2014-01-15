var Morphology = Morphology || {};


/**
 * Specifies the gender of the segment.
 */
Morphology.Gender = {
  /** Masculine */
  Masculine: 0,
  /** Feminine */
  Feminine: 1
};


/**
 * Specifies the position of a segment.
 * @enum {number}
 */
Morphology.SegmentPosition = {
  /** The segment is a prefix, for example bi in basmala. */
  Prefix: 0,
  /** The segment is a stem, for example ism in basmala. */
  Stem: 1,
  /** The segment is a suffix, for example naa in Thahabna. */
  Suffix: 2
};


/**
 * An enumeration used to specify the part of speech of a certain segment.
 * @enum {Number}
 */
Morphology.PartOfSpeeh = {
  /** Noun (N). */
  Noun: 0,

  /** Proper noun (PN). */
  ProperNoun: 1,

  /** Personal pronoun (PRON). */
  Pronoun: 2,

  /** Demonstrative pronoun (DEM). */
  Demonstrative: 3,

  /** Relative pronoun (REL). */
  Relative: 4,

  /** * Adjective (ADJ). */
  Adjective: 5,

  /** Verb (V). */
  Verb: 6,

  /** Preposition (P). */
  Preposition: 7,

  /** Interrogative particle (INTG). */
  Interrogative: 8,

  /** Vocative particle (VOC). */
  Vocative: 9,

  /** Negative particle (NEG). */
  Negative: 10,

  /** Emphatic particle (EMPH). */
  Emphatic: 11,

  /** Particle of purpose (PRP). */
  Purpose: 12,

  /** Imperative particle (IMPV). */
  Imperative: 13,

  /** Future particle (FUT). */
  Future: 14,

  /** Conjunction (CONJ). */
  Conjunction: 15,

  /** Determiner (DET). */
  Determiner: 16,

  /** Quranic initials (INL). */
  Initials: 17,

  /** Time adverb (T). */
  Time: 18,

  /** Location adverb (LOC). */
  Location: 19,

  /** Harf nasb (ACC). */
  Accusative: 20,

  /** Harf shart (COND). */
  Conditional: 21,

  /** Harf masdaree (SUB). */
  SubordinatingConjunction: 21,

  /** Adaat hasr (RES). */
  Restriction: 22,

  /** Adaat istithnaa (EXP). */
  Exceptive: 23,

  /** Harf rad3 (AVR). */
  Aversion: 24,

  /** Harf tahqeeq (CERT). */
  Certainty: 25,

  /** Harf idraab (RET). */
  Retraction: 26,

  /** Kaafa wa makfoofa (PREV). */
  Preventive: 27,

  /** Harf jawaab (ANS). */
  Answer: 28,

  /** Harf ibtidaa (INC). */
  Inceptive: 29,

  /** Harf fajaa (SUR). */
  Surprise: 30,

  /** Harf za'ida (SUP). */
  Supplemental: 31,

  /** Harf tahdeed (EXH). */
  Exhortation: 32,

  /** Ism fi3il amr (IMPN). */
  ImperativeVerbalNoun: 33,

  /** Harf tafseel (EXL). */
  Explanation: 34,

  /** Harf taswiya (EQ). */
  Equalization: 35,

  /** Harf istinaf (REM). */
  Resumption: 36,

  /** Harf sababiyya (CAUS). */
  Cause: 37,

  /** Harf istidrak (AMD). */
  Amendment: 38,

  /** Prohibition particle (PRO). */
  Prohibition: 39,

  /** Circumstantial particle (CIRC). */
  Circumstantial: 40,

  /** Result (RSLT). */
  Result: 41,

  /** Interpretation (INT). */
  Interpretation: 42,

  /** Comitative (COM). */
  Comitative: 43
};



Morphology.Segment = (function() {
  'use strict';

  /**
   * Sets the position of the segment (prefix, stem, or suffix) according to
   * the given position string.
   * @param {Morphology.Segment} segment The segment.
   * @param {String} positionStr A string specifying the position.
   * @return {boolean} Whether the function was successful or not.
   * @private
   */
  function _setPosition(segment, positionStr) {
    var ret = true;
    if (positionStr === 'PREFIX') {
      segment.position = Morphology.SegmentPosition.Prefix;
    }
    else if (positionStr === 'STEM') {
      segment.position = Morphology.SegmentPosition.Stem;
    }
    else if (positionStr === 'SUFFIX') {
      segment.position = Morphology.SegmentPosition.Suffix;
    }
    else {
      ret = false;
    }
    return ret;
  }

  /**
   * Sets the part of speech of the given segment depending on the part of
   * speech value.
   * @param {Morphology.Segment} segment The segment.
   * @param {String} posStr The string representing the part of speech.
   * @private
   */
  function _setPartOfSpeech(segment, posStr) {
    if (posStr === 'PREFIX') {
      segment.position = Morphology.SegmentPosition.Prefix;
    }
    else if (posStr === 'STEM') {
      segment.position = Morphology.SegmentPosition.Stem;
    }
    else if (posStr === 'SUFFIX') {
      segment.position = Morphology.SegmentPosition.Suffix;
    }
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
   * If the feature passed to the function specifies the gender of the segment,
   * this function reads it and returns true, otherwise it returns false.
   * @param {Morphology.Segment} segment The segment.
   * @param {String} feature A string specifying the feature.
   * @return {boolean} true or false depending on the success of the function.
   * @private
   */
  function _readGender(segment, feature) {
    var ret = true;
    if (feature === 'M') {
      segment.gender = Morphology.Gender.Masculine;
    }
    else if (feature === 'F') {
      segment.gender = Morphology.Gender.Masculine;
    }
    else {
      ret = false;
    }
    return ret;
  }

  /**
   * Parses the features field of the given segment.
   * @param {Morphology.Segment} segment The segment.
   */
  function _extractFeatures(segment) {
    var i;
    var setterFuncs = {
      'POS': _setPartOfSpeech,
      'LEM': _setLemma,
      'ROOT': _setRoot
    };
    var featuresItems = segment.features.split('|');
    for (i = 0; i < featuresItems.length; i++) {
      if (_setPosition(segment, featuresItems[i])) {
        continue;
      }
      else if (_readGender(segment, featuresItems[i])) {
        continue;
      }
      var feature = featuresItems[i].split(':');
      var name = feature[0];
      var value = feature[1];
      var func = setterFuncs[name];
      if (func === 'function') {
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
    this.form = remoteSegment.form;
    this.features = remoteSegment.features;
    this.tag = remoteSegment.tag;
    this.position = null;
    this.lemma = null;
    this.root = null;
    this.gender = null;

    _extractFeatures.call(this);
  };


  /**
   * Generates a morphological description of the segment. For example, the word
   * "Al-Rahman" in Surat Al-Fatha generates "genitive masculine singular
   * adjective"
   * @return {string} A string describing the grammar.
   */
  Segment.prototype.generateMorphologicalDescription = function() {
    return '';
  };

  return Segment;
}());

