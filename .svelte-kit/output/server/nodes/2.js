import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/entry/_page.svelte.fe9116be.js","_app/immutable/chunks/index.3c723b0c.js","_app/immutable/entry/_page.js.9c5eea7e.js","_app/immutable/chunks/_page.da46b06b.js"];
export const stylesheets = ["_app/immutable/assets/_page.a4898c50.css"];
export const fonts = [];