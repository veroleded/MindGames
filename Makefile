install:
		npm ci
brain-games:
		node /brain-games.js
brain-even:
		node /brain-even.js		
publish:
		npm publish --dry-run
lint:
		npx eslint