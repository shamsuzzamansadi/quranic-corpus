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
 * This file contains many enumerations used by the Morphology application.
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
