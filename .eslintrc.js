module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  "plugins": [
    "spellcheck"
  ],
  rules: {
    "spellcheck/spell-checker": [1,
      {
          "comments": true,
          "strings": true,
          "identifiers": true,
          "lang": "en_US",
          "skipWords": [
              "dict",
              "aff",
              "hunspellchecker",
              "hunspell",
              "utils"
          ],
          "skipIfMatch": [
              "http://[^s]*",
              "^[-\\w]+\/[-\\w\\.]+$" //For MIME Types
          ],
          "skipWordIfMatch": [
              "^foobar.*$" // words that begin with foobar will not be checked
          ],
          "minLength": 3
       }
   ]
  }
}
