module.exports = {
  plugins: ['stylelint-scss'],
  extends: 'stylelint-config-recommended',
  rules: {
    'at-rule-no-unknown': null, // blocking the @import and @mixins, but we use SCSS preprocessor and want to keep this feature. More explanation: https://github.com/stylelint/stylelint-config-standard/issues/28
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ]
  }
};
