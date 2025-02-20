// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  filenameHashing: false,
  pages: {
    testingEditor: {
      entry: 'src/test-edit-dash.js',
      template: 'public/testingEditor.html',
      filename: 'testingEditor.html',
      title: 'Testing Editor',
      chunks: ['chunk-vendors', 'chunk-common', 'testingEditor'],
    },
  },
});