import { define } from 'https://cml.snowy.cafe/api.js';

define('test', (mod) => {
  const name = mod.name;

  // Options
  mod.option('x', {
    type: 'check',
    default: true,
    name: 'Boolean option',
    description: 'A test option',
  });

  mod.option('y', {
    type: 'input',
    default: 'hello',
    name: 'Input Option',
    description: 'A second test option',
  });

  // Simple entry points
  mod.on('install', () => console.log(`[${name}] Installed`));
  mod.on('enable', () => console.log(`[${name}] Enabled`));
  mod.on('load', () => console.log(`[${name}] Loaded`));
  mod.on('unload', () => console.log(`[${name}] Unloaded`));
  mod.on('disable', () => console.log(`[${name}] Disabled`));
  mod.on('uninstall', () => console.log(`[${name}] Uninstalled`));

  // Conditional entry points
  mod.on('load @their-city', () =>
    console.log(`[${name}] Loaded in their-city`),
  );

  mod.on('unload @their-city', () =>
    console.log(`[${name}] Unloaded in their-city`),
  );
});
