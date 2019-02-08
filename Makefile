install:
			npm install
start:
			npx babel-node -- src/bin/shortPath.js __test__/graph2.json
publish:
			npm publish
build:
			npm run build
lint:
			npx eslint
test:
			npm test
