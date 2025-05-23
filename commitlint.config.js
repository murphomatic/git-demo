module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
      ],
      'scope-case': [0], // Disable scope case enforcement for flexibility
      'body-max-line-length': [1, 'always', 200],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.']
    }
  };