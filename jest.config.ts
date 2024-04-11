import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testTimeout: 10000,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(@pnotify|uuid)/)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;
