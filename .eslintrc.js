module.exports = {
  'root': true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  'globals': {
    'wp': true,
  },
  'env': {
    'node': true,
    'es6': true,
    'amd': true,
    'browser': true,
    'jquery': true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'globalReturn': true,
      'generators': false,
      'objectLiteralDuplicateProperties': false,
      'jsx': true,
    },
    'ecmaVersion': 2017,
    'esversion': 6,
    'sourceType': 'module',
    },
  'plugins': [
    'import',
    ],
  'settings': {
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
  'rules': {
    'no-console': 0,
    'quotes': ['error', 'single'
        ],
    'comma-dangle': [
      'error',
            {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'ignore',
            },
        ],
    },
};