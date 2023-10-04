import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'svelte.demo',
  appName: 'svelte-demo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
