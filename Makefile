.PHONY: \
	browser-sync \
	browser-sync/watch \
	build postcss \
	imagemin \
	postcss/watch \
	start

browser-sync: 
	npx browser-sync start --serveStatic 'public'

browser-sync/watch:
	npx browser-sync start --serveStatic 'public' --files 'public'

build: postcss imagemin
	hugo

imagemin:
	npx imagemin src/img/* --out-dir=static/dist/img

postcss:
	npx postcss src/css/styles.css --dir static/dist/ styles.css

postcss/watch:
	npx postcss src/css/styles.css --dir static/dist/ styles.css --watch

start:
	npx parallelshell 'hugo --watch' 'make postcss/watch' 'make browser-sync/watch'
	
