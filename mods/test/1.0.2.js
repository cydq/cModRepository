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

  handlers: [
    {
      on: 'install',
      handle(mod) {
        console.log(`[${mod.name}] Install!`);
      },
    },
    {
      on: 'enable',
      handle(mod) {
        console.log(`[${mod.name}] Enable!`);
      },
    },
    {
      on: 'load',
      handle(mod) {
        console.log(`[${mod.name}] Load!`);
      },
    },
    {
      on: 'load',
      conditions: {
        page: 'their-city',
      },
      handle(mod) {
        console.log(`[${mod.name}] omg you made it!`);
      },
    },
    {
      on: 'unload',
      handle(mod) {
        console.log(`[${mod.name}] Unload!`);
      },
    },
    {
      on: 'disable',
      handle(mod) {
        console.log(`[${mod.name}] Disable!`);
      },
    },
    {
      on: 'uninstall',
      handle(mod) {
        console.log(`[${mod.name}] Uninstall!`);
      },
    },
  ],
});
