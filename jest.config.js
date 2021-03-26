module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/tests/**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
