export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CONTRATAPA ALMACÉN DE POESÍA.docx","CONTRATAPA LOP.docx","CONTRATAPA LOS POEMAS POR MERLIN.docx","LOS POEMAS POR MERLIN.svg","TAPAS ALMACEN DE POESIA.svg","TAPAS_MEMORIASDELAORILLA.jpg","Viviana.jpg","bird-bg.png","book.png","favicon.png","ficcionario.jpg","foto_Nora_Pin.png","foto_anibal.jpg","global.css","logo-192.png","logo-512.png","logo.jpg","logo.svg","main.css","manifest.json","paper.png","tailwind.css","tapa lop-lop.svg","vivi.png","viviana.jpg","volantes.png"]),
	mimeTypes: {".docx":"application/vnd.openxmlformats-officedocument.wordprocessingml.document",".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png",".css":"text/css",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.15d6ae7e.js","imports":["_app/immutable/entry/start.15d6ae7e.js","_app/immutable/chunks/index.3c723b0c.js","_app/immutable/chunks/singletons.94a01e66.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.363f6c1c.js","imports":["_app/immutable/entry/app.363f6c1c.js","_app/immutable/chunks/index.3c723b0c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/collections",
				pattern: /^\/collections\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
