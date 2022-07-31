import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.tsx ? $': 'ts-jest',
    },
    reporters: ["default",
        ["jest-junit", {
            "outputDirectory": "junit",
            "outputName": "ti4core.junit.xml",
        }]]
};
export default config;
