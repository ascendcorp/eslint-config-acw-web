release-major:
	npx standard-version --release-as major
	git push --follow-tags origin main && npm publish

release-minor:
	npx standard-version --release-as minor
	git push --follow-tags origin main && npm publish

release-patch:
	npx standard-version --release-as patch
	git push --follow-tags origin main && npm publish

release:
	npx standard-version
	git push --follow-tags origin main && npm publish
