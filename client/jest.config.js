module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^[^.]+.vue$': 'vue-jest',
    '\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(primeflex)/)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**.config.js',
  ],
}
