const js = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                console: 'readonly',
            },
        },
    },
);
