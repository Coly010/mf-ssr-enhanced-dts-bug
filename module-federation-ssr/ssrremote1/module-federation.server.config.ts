import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ssrremote1',
  exposes: {
    './Module': 'module-federation-ssr/ssrremote1/src/remote-entry.ts',
  },
};

export default config;
