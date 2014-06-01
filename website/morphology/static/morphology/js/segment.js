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

// TODO: This file is getting big. I think it is better to remove each enum
// to its own file.
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
  RelativePronoun: 'REL',

  /** * Adjective (ADJ). */
  Adjective: 'ADJ',

  /** Verb (V). */
  Verb: 'V',

  /** Preposition (P). */
  Preposition: 'P',

  /** Interrogative particle (INTG). */
  Interrogative: 'INTG',

  /** Vocative particle (VOC). */
  VocativeParticle: 'VOC',

  /** Negative particle (NEG). */
  NegativeParticle: 'NEG',

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
  TimeAdverb: 'T',

  /** Location adverb (LOC). */
  LocationAdverb: 'LOC',

  /** Harf nasb (ACC). */
  AccusativeParticle: 'ACC',

  /** Conditional particle (harf shart) (COND). */
  ConditionalParticle: 'COND',

  /** Harf masdaree (SUB). */
  SubordinatingConjunction: 'SUB',

  /** Restriction particle (adaat hasr) (RES). */
  RestrictionParticle: 'RES',

  /** Exceptive particle (adaat istithnaa) (EXP). */
  ExceptiveParticle: 'EXP',

  /** Harf rad3 (AVR). */
  Aversion: 'AVR',

  /** Harf tahqeeq (CERT). */
  Certainty: 'CERT',

  /** Harf idraab (RET). */
  Retraction: 'RET',

  /** Preventive particle (kaafa wa makfoofa) (PREV). */
  PreventiveParticle: 'PREV',

  /** Harf jawaab (ANS). */
  Answer: 'ANS',

  /** Inceptive particle (harf ibtidaa) (INC). */
  InceptiveParticle: 'INC',

  /** Harf fajaa (SUR). */
  Surprise: 'SUR',

  /** Supplemental particle (harf za'ida) (SUP). */
  SupplementalParticle: 'SUP',

  /** Harf tahdeed (EXH). */
  Exhortation: 'EXH',

  /** Ism fi3il amr (IMPN). */
  ImperativeVerbalNoun: 'IMPN',

  /** Harf tafseel (EXL). */
  Explanation: 'EXL',

  /** Harf taswiya (EQ). */
  EqualizationParticle: 'EQ',

  /** Harf istinaf (REM). */
  ResumptionParticle: 'REM',

  // TODO: Consider renaming this!
  /** Harf sababiyya (CAUS). */
  ParticleOfCause: 'CAUS',

  /** Amendment particle (harf istidrak) (AMD). */
  AmendmentParticle: 'AMD',

  /** Prohibition particle (PRO). */
  ProhibitionParticle: 'PRO',

  /** Circumstantial particle (CIRC). */
  CircumstantialParticle: 'CIRC',

  /** Result particle (RSLT). */
  ResultParticle: 'RSLT',

  /** Interpretation (INT). */
  Interpretation: 'INT',

  /** Comitative (COM). */
  Comitative: 'COM'
});


// TODO: Rename to NounDerivation?
/**
 * An enumeration used to specify the derivation of a certain segment.
 * @enum {string}
 */
Morphology.Derivation = Jsoop.defineEnum({
  /** Active Participle (ACT PCPL) */
  ActiveParticiple: 'ACT PCPL',
  /** Passive Participle (PASS PCPL) */
  PassiveParticiple: 'PASS PCPL',
  /** Verbal Noun (VN) */
  VerbalNoun: 'VN'
});


/**
 * An enumeration used to specify the voice of a certain verb.
 * @enum {string}
 */
Morphology.VoiceType = Jsoop.defineEnum({
  /** Active (ACT) */
  Active: 'ACT',
  /** Passive (PASS) */
  Passive: 'PASS'
});


// TODO: Is the state only applicable for nouns? I believe yes, but just being
// paranoid.
/**
 * An enumeration used to specify the state of a noun.
 * @enum {string}
 */
Morphology.NounState = Jsoop.defineEnum({
  /** Definite state (DEF) */
  Definite: 'DEF',
  /** Indefinite state (INDEF) */
  Indefinite: 'INDEF'
});


/**
 * An enumeration used to specify the aspect of a verb. The aspect of the
 * verb can be either perfect, imperfect, or imperative.
 *
 * Note from the Java code of Kais Dukes:
 *
 * The AspectType enumeration [I renamed the type to VerbAspect here] specifies
 * the aspect of a verb, its most important morphological feature. This is
 * closely related to, but distinct from the concept of tense. In classical
 * Arabic, the aspect of a verb is either perfect, imperfect, or imperative.
 * The perfect roughly corresponds to the past tense in English, although there
 * is a distinction: The perfect refers to actions which have been completed.
 *
 * @enum {string}
 */
Morphology.VerbAspect = Jsoop.defineEnum({
  /** The verb is perfect (فعل ماضي) */
  Perfect: 'PERF',
  /** The verb is imperfect (فعل مضارع) */
  Imperfect: 'IMPF',
  /** The verb is imperative (فعل امر) */
  Imperative: 'IMPV'
});


/**
 * An enumeration used to specify the form of the verb, e.g. form I, etc.
 * @enum {Function}
 */
Morphology.VerbForm = Jsoop.defineEnum({
  /** First form (I) */
  First: 'I',
  /** Second form (II) */
  Second: 'II',
  /** Third form (III) */
  Third: 'III',
  /** Fourth form (IV) */
  Fourth: 'IV',
  /** Fifth form (V) */
  Fifth: 'V',
  /** Sixth form (VI) */
  Sixth: 'VI',
  /** Seventh form (VII) */
  Seventh: 'VII',
  /** Eighth form (VIII) */
  Eighth: 'VIII',
  /** Ninth form (IIX) */
  Ninth: 'IX',
  /** Tenth form (IX) */
  Tenth: 'X',
  /** Eleventh form (X) */
  Eleventh: 'XI',
  /** Twelfth form (XII) */
  Twelth: 'XII'
});


/**
 * An enumeration used to specify the type of a pronoun.
 * @enum {number}
 */
Morphology.PronounType = Jsoop.defineEnum({
  /** Subject pronoun */
  Subject: 0,
  /** Object pronoun */
  Object: 1,
  /** Second object pronoun */
  SecondObject: 2
});


/**
 * Represents a Segment of the Holy Quran.
 * @class
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
   * Sets the part of speech of the given segment depending on the given string
   * value.
   * @param {Morphology.Segment} segment The segment.
   * @param {string} partOfSpeech The string representing the part of speech.
   * @private
   */
  function _setPartOfSpeech(segment, partOfSpeech) {
    if (!Morphology.PartOfSpeeh.isValidValue(partOfSpeech)) {
      throw 'Invalid part of speech value.';
    }
    segment.partOfSpeech = new Morphology.PartOfSpeeh(partOfSpeech);
  }

  /**
   * Sets the verb aspect of the given segment depending on the given string
   * value.
   * @param {Morphology.Segment} segment The segment.
   * @param {string} verbAspect The string representing the aspect of the verb.
   * @private
   */
  function _setVerbAspect(segment, verbAspect) {
    if (!Morphology.VerbAspect.isValidValue(verbAspect)) {
      throw 'Invalid verb aspect speech value.';
    }
    segment.verbAspect = new Morphology.VerbAspect(verbAspect);
  }

  /**
   * Sets the verb form of the given segment depending on the given string
   * value.
   * @param {Morphology.Segment} segment The segment.
   * @param {string} verbForm The string representing the form of the verb.
   * @private
   */
  function _setVerbForm(segment, verbForm) {
    if (!Morphology.VerbForm.isValidValue(verbForm)) {
      throw 'Invalid verb form speech value.';
    }
    segment.verbForm = new Morphology.VerbForm(verbForm);
  }

  /**
   * Sets the derivation of the given segment to the given derivation value.
   * @param {Morphology.Segment} segment The segment.
   * @param {string} derivation The string representing the derivation.
   * @private
   */
  function _setDerivation(segment, derivation) {
    if (!Morphology.Derivation.isValidValue(derivation)) {
      throw 'Invalid derivation value.';
    }
    segment.derivation = new Morphology.Derivation(derivation);
  }
  /**
   * Sets the derivation of the given segment to the given derivation value.
   * @param {Morphology.Segment} segment The segment.
   * @param {string} derivation The string representing the derivation.
   * @private
   */
  function _setVoiceType(segment, voiceType) {
    if (!Morphology.VoiceType.isValidValue(voiceType)) {
      throw 'Invalid voice type value.';
    }
    segment.voiceType = new Morphology.VoiceType(voiceType);
  }

  /**
   * Sets the state of the given noun segment.
   * @param {Morphology.Segment} segment The segment.
   * @param {string} derivation The string representing the state.
   * @private
   */
  function _setNounState(segment, nounState) {
    if (!Morphology.NounState.isValidValue(nounState)) {
      throw 'Invalid derivation value.';
    }
    segment.nounState = new Morphology.NounState(nounState);
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
   * If the feature passed to the function specifies the phi features, this
   * function reads it and return true, otherwise it returns false. Phi features
   * are the person type, the gender, and the number of the segment.
   * @param {Morphology.Segment} segment The segment.
   * @param {String} feature A string specifying the feature.
   * @return {boolean} true or false depending on the success of the function.
   * @private
   */
  function _readPhiFeatures(segment, feature) {
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
      'POS': _setPartOfSpeech,
      'DER': _setDerivation,
      'VT': _setVoiceType,
      'ASP': _setVerbAspect,
      'FRM': _setVerbForm,
      'LEM': _setLemma,
      'ROOT': _setRoot,
      'STATE': _setNounState,
      // "PRON:" field only contains the person, gender, and number.
      // TODO: This means that the field "PRON:" is not giving us any value,
      // because we already know that a segment is a pronoun through its
      // part of speech value.
      'PHI': _readPhiFeatures
    };
    var featuresItems = segment.features.split('|');
    for (i = 0; i < featuresItems.length; i++) {
      if (_setType(segment, featuresItems[i])) {
        continue;
      }
      else if (_setCase(segment, featuresItems[i])) {
        continue;
      }
      else if (_readPhiFeatures(segment, featuresItems[i])) {
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
    // Not used for now. Uncomment when you need them.
    this.chapterNo = remoteSegment.chapter_no;
    this.verseNo = remoteSegment.verse_no;
    this.tokenNo = remoteSegment.token_no;
    this.segmentNo = remoteSegment.segment_no;
    this.document = null;
    this.indexInDoc = null;
    this.form = remoteSegment.form;
    this.features = remoteSegment.features;
    this.type = new Morphology.SegmentType(remoteSegment.type);
    // TODO: 'case' is a reserved word, so it might be better to find another
    // word, but I can't think of anything at this moment, because 'case' is
    // the word used in Kais's work, and if I use a word like caseType, then
    // it will be different than the naming convention used in other fields.
    this.case = null;
    this.partOfSpeech = null;
    this.derivation = null;
    this.voiceType = null;
    this.verbAspect = null;
    this.verbForm = null;
    this.lemma = null;
    this.root = null;
    this.person = null;
    this.gender = null;
    this.number = null;
    this.nounState = null;

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
   * Retrieves the name of a segment of type pronoun. Pronouns are a bit more
   * complicated to find its name than other segment types.
   * @param {Morphology.Segment} segment The segment.
   * @return {string} The name of the segment.
   * @private
   */
  function _getPronounName(segment) {
    var name;
    if (segment.type.value === Morphology.SegmentType.Stem) {
      // ضمير منفصل
      name = 'personal pronoun';
    }
    else if (segment.type.value === Morphology.SegmentType.Suffix) {
      return segment.findPronounType().toDescription().toLowerCase() +
          ' pronoun';
    }
    return name;
  }

  /**
   * Retrieves the document object containing this segment.
   * @return {?Morphology.Document} The document, or null if no document is
   * specified.
   */
  Segment.prototype.getDocument = function() {
    return this.document;
  };

  /**
   * Retrieves the segment coming after this segment in the document.
   * @return {Morphology.Segment} The next segment, or null if this is the last
   * segment in the document.
   */
  Segment.prototype.getNext = function() {
    if (this.document === null || this.indexInDoc === null) {
      throw 'This segment is not in a document so navigation is not possible.';
    }
    if (this.indexInDoc === this.document.getSegmentCount()) {
      return null;
    }
    return this.document.getSegment(this.indexInDoc + 1);
  };

  /**
   * Retrieves the segment coming before this segment in the document.
   * @return {Morphology.Segment} The previous segment, or null if this is the
   * first segment in the document.
   */
  Segment.prototype.getPrev = function() {
    if (this.document === null || this.indexInDoc === null) {
      throw 'This segment is not in a document so navigation is not possible.';
    }
    if (this.indexInDoc === 0) {
      return null;
    }
    return this.document.getSegment(this.indexInDoc - 1);
  };

  /**
   * Retrieves the name of the segment, e.g. noun, active participle, etc.
   * @return {string} The name of the segment.
   */
  Segment.prototype.getName = function() {
    if (this.derivation !== null) {
      return this.derivation.toDescription().toLowerCase();
    }

    if (this.partOfSpeech !== null) {
      switch (this.partOfSpeech.value) {
        case Morphology.PartOfSpeeh.Initials:
          return 'Quranic initials';
        case Morphology.PartOfSpeeh.Demonstrative:
          return 'demonstrative pronoun';
        case Morphology.PartOfSpeeh.Pronoun:
          return _getPronounName(this);
        default:
          return this.partOfSpeech.toDescription().toLowerCase();
      }
    }

    throw "Couldn't find the name of the segment.";
  };

  /**
   * Retrieves a string representing the location of this segment in the Holy
   * Quran, e.g. (1:7:1:1) for sirata (صراط) in Surat Al-Fatiha.
   * @return {string} A string representing the location of the segment.
   */
  Segment.prototype.getLocationString = function() {
    return '{0}:{1}:{2}:{3}'.format(this.chapterNo, this.verseNo,
        this.tokenNo, this.segmentNo);
  };

  /**
   * If this segment is a pronoun, this function retrieves its type.
   * @return {?Morphology.PronounType} The type of the pronoun, or null if
   * the segment is not a pronoun.
   */
  Segment.prototype.findPronounType = function() {
    if (this.partOfSpeech.value !== Morphology.PartOfSpeeh.Pronoun) {
      // Not a pronoun!
      return null;
    }
    var prevSeg = this.getPrev();
    var ret;
    if (this.form === 'naA' &&
        prevSeg.partOfSpeech.value === Morphology.PartOfSpeeh.Verb &&
        prevSeg.verbAspect.value === Morphology.VerbAspect.Imperative) {
      // The pronoun 'naA' (نا) coming after an imperative verb is an object
      // pronoun.
      ret = new Morphology.PronounType(Morphology.PronounType.Object);
    } else if (this.form === 'na`' &&
        prevSeg.partOfSpeech.value === Morphology.PartOfSpeeh.Verb &&
        prevSeg.verbAspect.value === Morphology.VerbAspect.Perfect) {
      // The pronoun 'naA' (نا) coming after a perfect verb is a subject
      // pronoun.
      ret = new Morphology.PronounType(Morphology.PronounType.Subject);
    } else if (this.form === 'ta' &&
        prevSeg.partOfSpeech.value === Morphology.PartOfSpeeh.Verb &&
        prevSeg.verbAspect.value === Morphology.VerbAspect.Perfect) {
      // The pronoun 'ta' (ت) coming after a perfect verb is a subject pronoun.
      ret = new Morphology.PronounType(Morphology.PronounType.Subject);
    } else if (this.form === 'humo' &&
        prevSeg.partOfSpeech.value === Morphology.PartOfSpeeh.Pronoun &&
        prevSeg.form === 'na`') {
      // The pronoun 'humo' (هُم) coming after the pronoun (نا) is an object
      // pronoun.
      ret = new Morphology.PronounType(Morphology.PronounType.Object);
    } else if (this.form === 'himo' &&
        prevSeg.partOfSpeech.value === Morphology.PartOfSpeeh.Preposition) {
      // The pronoun 'himo' (هِم) coming after a preposition is an object
      // pronoun.
      ret = new Morphology.PronounType(Morphology.PronounType.Object);
    } else if (this.form === 'hi' &&
        prevSeg.partOfSpeech.value === Morphology.PartOfSpeeh.Preposition) {
      // The pronoun 'hi' (هـِ) coming after a preposition is an object
      // pronoun.
      ret = new Morphology.PronounType(Morphology.PronounType.Object);
    } else if (this.form === 'wna' &&
        prevSeg.partOfSpeech.value === Morphology.PartOfSpeeh.Verb) {
      // The pronoun 'wna' (ون) coming after a verb is a subject pronoun.
      ret = new Morphology.PronounType(Morphology.PronounType.Subject);
    } else {
      throw 'Not implemented yet';
    }
    return ret;
  };

  /**
   * Determines whether this segment is equal to the given segment.
   * @param {Morphology.Segment} segment The segment to compare with.
   * @return {boolean} true or false.
   */
  Segment.prototype.equals = function(segment) {
    var key;
    for (key in this) {
      if (this.hasOwnProperty(key) && this[key] !== segment[key]) {
        return false;
      }
    }
    return true;
  };

  return Segment;
}());

