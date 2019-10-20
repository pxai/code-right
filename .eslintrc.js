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
    "quotes": [1, "double"],
    "new-cap": [2, {"capIsNewExceptions": [] }],
    "object-curly-spacing": [2, "always"],
    "no-underscore-dangle": [0],
    "no-multi-spaces": [0],
    "no-spaced-func": [0],
    "no-multiple-empty-lines": [2],
    "no-trailing-spaces": [2],
    "no-console": 1,
    "max-statements": [2, 22],
    "complexity": [2, 8],
    "indent": ["error", 4],
    "semi": ["error", "always"],
    "compat/compat": "error",
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
