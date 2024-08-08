import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ssrhost',
  remotes: ['ssrremote1', 'ssrremote2'],
};

export default config;
