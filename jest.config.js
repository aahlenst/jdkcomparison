// Taken from https://nextjs.org/docs/testing#jest-and-react-testing-library.
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/"],
	moduleNameMapper: {
		"@/(.*)$": "<rootDir>/$1"
	}
};

module.exports = createJestConfig(customJestConfig);
