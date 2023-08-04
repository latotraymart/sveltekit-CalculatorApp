

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7b740bc7.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c5af3f48.js"];
export const stylesheets = ["_app/immutable/assets/2.130317c0.css"];
export const fonts = [];
