{
  "preset": "ts-jest",
  "testEnvironment": "node",
  "roots": ["<rootDir>/tests"],
  "coverageDirectory": "coverage",
  "collectCoverageFrom": [
    "src/**/*.ts",
    "!src/**/*.d.ts"
  ]
}
