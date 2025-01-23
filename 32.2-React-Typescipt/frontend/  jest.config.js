module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest", // or 'ts-jest' if using ts-jest
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Make sure this path is correct
};
