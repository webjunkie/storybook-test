import type { TestRunnerConfig } from '@storybook/test-runner';
import fs from 'node:fs';

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    fs.mkdirSync('screenshots', { recursive: true });
    await page.screenshot({ path: `screenshots/${context.id}.png` });
  },
};

export default config;
