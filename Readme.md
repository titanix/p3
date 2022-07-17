#  Phantastic Phonology Portal

> Phantastic must be written with an F!!

Deal with it. "*From the 16th to the 19th cents the Latinized spelling **phantastic** was also used.*" [Oxford Learners Dictionaries, Word Origin](https://www.oxfordlearnersdictionaries.com/definition/english/fantastic).

## History

The project originally aimed to be a website where a visitor could make its own [constructed language](https://en.wikipedia.org/wiki/Constructed_language) model and share it with others. Starting from phonology, various level of linguistics would be available for personalization: selection of phonemes, phonotatic constraints, morphological rules, one lexicon strata based on real-world vocabularies with some randomness applied, cases, basic word order. The goal was in large part pedagogical: to teach linguistic notions in a fun, applied and rememberable way.

Instead, this repository now hosts what was the prototype of phoneme selection page in the `phoneme_ui` folder.

## Technicalities

The project is written in pure HTML and Javascript. NPM and more generally front-end tooling are to stay excluded from the project, with the possible exception of TypeScript.

## Todo

- [ ] Add missing sounds for included phonemes
- [ ] Add missing phonemes for each included language
- [ ] Hide the "diaphtongs" header if section if empty
- [ ] Fix the display of example word when Chinese character is included 

## Licenses

## Project

Not decided yet.

### Sound files

The file in the `phoneme_ui/sounds` are currently all taken from Wikipedia and thus under [double licenses: GNU Free Documentation License 1.2+ and Creative Commons Attribution-Share Alike 3.0 Unported](https://en.wikipedia.org/wiki/File:Close_central_rounded_vowel.ogg#Licensing).