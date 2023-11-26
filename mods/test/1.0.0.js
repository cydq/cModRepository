cML.define({
  package: {
    name: 'test',
    version: '1.0.0',
    description: 'A test mod',
  },

  options: {
    testOption: {
      type: 'check',
      default: true,
      name: 'Test option',
      description: 'A test option',
    },
  },

  entry: {
    enable(mod) {
      console.log(`Enabling mod ${mod.name}...`);
    },

    disable(mod) {
      console.log(`Disabling mod ${mod.name}...`);
    },
  },
});
