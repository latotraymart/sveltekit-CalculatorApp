

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c72dc871.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c5af3f48.js","_app/immutable/chunks/singletons.9d3954ca.js"];
export const stylesheets = [];
export const fonts = [];
