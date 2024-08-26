import { HstVue } from '@histoire/plugin-vue';
import { defineConfig } from 'histoire';

export default defineConfig({
  plugins: [HstVue()],
  setupFile: './src/app/histoire.setup.ts',
});
