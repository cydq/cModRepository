cML.define({
  name: 'test',

  options: {
    x: {
      type: 'check',
      default: true,
      name: 'Boolean option',
      description: 'A test option',
    },

    y: {
      type: 'input',
      default: 'hello',
      name: 'Input Option',
      description: 'A second test option',
    },
  },

  entry: {
    enable(mod) {
      console.log(`[${mod.name}] Hello, world!`);
    },

    disable(mod) {
      console.log(`[${mod.name}] See ya next time!`);
    },
  },
});
