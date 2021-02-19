module.exports = {
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 78,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  modulePaths: ["<rootDir>/"],
  setupFiles: ["<rootDir>setupTests.js"],
  verbose: true
};
