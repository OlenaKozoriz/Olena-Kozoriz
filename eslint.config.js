import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default [
    js.configs.recommended,
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    {
        rules: {
            curly: 'error',
            'getter-return': 'warn',
            'constructor-super': 'error',
            'no-dupe-args': 'warn',
            'no-dupe-class-members': 'warn',
            'no-unused-vars': 'error',
            'no-self-assign': 'off',
            'no-shadow-restricted-names': 'off',
            'no-undef': 'error'
        }
    },
    {
        ignores: ['books.test.js', 'cars.test.js', 'BaseController.js', 'BooksController.js', 'CarsController.js']
    }
];
