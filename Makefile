release:
	npx standard-version
	git push --follow-tags origin main && npm publish