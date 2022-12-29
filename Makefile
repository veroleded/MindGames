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
brain-progression:
		npm node /brain-progression.js
brain-prime:
		npm node /brain-prime.js
publish:
		npm publish --dry-run
lint:
		npx eslint