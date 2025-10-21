// Taken from https://nextjs.org/docs/testing#jest-and-react-testing-library.
import nextJest from "next/jest.js";

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
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/"],
};

export default createJestConfig(customJestConfig);
