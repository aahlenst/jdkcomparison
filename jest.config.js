// Taken from https://nextjs.org/docs/testing#jest-and-react-testing-library.
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/"],
	moduleNameMapper: {
		"@/(.*)$": "<rootDir>/$1",
	},
	reporters: [
		"default",
		["jest-junit", { outputDirectory: "build/reports", outputName: "jest.xml" }],
	],
	testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
