default:
	git push
	lein do clean, cljsbuild once min
	cp -rf resources/public/* deploy/
	cd deploy/ && \
	git add . && \
	git commit -m "Site updated on $(date)" && \
	git push origin gh-pages
