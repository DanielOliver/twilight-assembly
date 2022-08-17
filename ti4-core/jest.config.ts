import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx ? $": "ts-jest",
    "^.+\\.ts ? $": "ts-jest",
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "junit",
        outputName: "ti4core.junit.xml",
      },
    ],
  ],
};
export default config;
