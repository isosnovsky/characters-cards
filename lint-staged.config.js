module.exports = {
    '*.{ts,tsx}': ['eslint --fix --cache --cache-location node_modules/.cache/eslintcache'],
    '*.{tsx, ts, parallel_execution}': [() => 'yarn typescheck'],
    '*.css': ['stylelint --fix']
};
