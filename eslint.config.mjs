import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
    {
        ignores: ['**/node_modules', 'scripts', 'dist', 'build'],
        files: ['**/*.js', '**/*.mjs'],
        extends: [js.configs.recommended],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                Uint8Array: 'readonly',
                CDATASection: 'readonly'
            }
        },
        rules: {
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'space-before-function-paren': ['error', 'never'],
            'no-console': ['error', { 'allow': ['warn'] }],
            'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
            'no-constant-condition': ['off'],
            'no-undef': ['error'],
            'no-unused-vars': ['error', { 'vars': 'local', 'args': 'none' }],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-prototype-builtins': ['off']
        }
    }
]);
