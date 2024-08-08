import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ssrremote2',
  exposes: {
    './Module': 'module-federation-ssr/ssrremote2/src/remote-entry.ts',
  },
};

export default config;
