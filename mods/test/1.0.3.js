cML.define('test', (m) => {
  // Options
  m.option('x', {
    type: 'check',
    default: true,
    name: 'Boolean option',
    description: 'A test option',
  });

  m.option('y', {
    type: 'input',
    default: 'hello',
    name: 'Input Option',
    description: 'A second test option',
  });

  // Simple entry points
  m.on('install', (mod) => console.log(`[${mod.name}] Installed`));
  m.on('enable', (mod) => console.log(`[${mod.name}] Enabled`));
  m.on('load', (mod) => console.log(`[${mod.name}] Loaded`));
  m.on('unload', (mod) => console.log(`[${mod.name}] Unloaded`));
  m.on('disable', (mod) => console.log(`[${mod.name}] Disabled`));
  m.on('uninstall', (mod) => console.log(`[${mod.name}] Uninstalled`));

  // Conditional entry points
  m.on('load @their-city', (mod) =>
    console.log(`[${mod.name}] Loaded in their-city`),
  );

  m.on('unload @their-city', (mod) =>
    console.log(`[${mod.name}] Unloaded in their-city`),
  );
});
