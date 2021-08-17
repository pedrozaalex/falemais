module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  modulePaths: ["<rootDir>/src/"],
};
