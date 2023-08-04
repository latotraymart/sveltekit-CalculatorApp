export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.99e5dc1b.js","app":"_app/immutable/entry/app.df2b59c4.js","imports":["_app/immutable/entry/start.99e5dc1b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.9d3954ca.js","_app/immutable/entry/app.df2b59c4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.c5af3f48.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
