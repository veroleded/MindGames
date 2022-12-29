install:
		npm ci
brain-games:
		node /brain-games.js
brain-even:
		node /brain-even.js
brain-calc:
		node /brain-calc.js
brain-gcd:
			node /brain-gcd.js
publish:
		npm publish --dry-run
lint:
		npx eslint