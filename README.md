# Reproduction of DTS Plugin Failing

`@module-federation/enhanced` version is: 0.3.5

Steps to reproduce: 
1. Clone this repo
2. Run `npm install`
3. Run `npx nx build ssrremote2`

### Error
Note the DTS Error:

```
[ Module Federation Manifest Plugin ]: Manifest will use absolute path resolution via its host at runtime, reason: publicPath='auto'
Unable to compile federated types, Error: compile TS failed, the original command is 'npx tsc --project /Users/columferry/dev/nrwl/issues/gh_issues/mf-ssr-enhanced/module-federation-ssr/ssrremote2/node_modules/.federation/tsconfig.f0d99d9f-90c3-4a90-97a5-b3d1846cffeb.json'
Error: ENOENT: no such file or directory, open '/Users/columferry/dev/nrwl/issues/gh_issues/mf-ssr-enhanced/module-federation-ssr/ssrremote2/dist/@mf-types.zip'
    at Object.openSync (node:fs:582:18)
    at Object.readFileSync (node:fs:461:35)
    at _GenerateTypesPlugin.<anonymous> (/Users/columferry/dev/nrwl/issues/gh_issues/mf-ssr-enhanced/node_modules/@module-federation/dts-plugin/dist/index.js:2470:140)
    at Generator.next (<anonymous>)
    at fulfilled (/Users/columferry/dev/nrwl/issues/gh_issues/mf-ssr-enhanced/node_modules/@module-federation/dts-plugin/dist/index.js:54:24)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/columferry/dev/nrwl/issues/gh_issues/mf-ssr-enhanced/module-federation-ssr/ssrremote2/dist/@mf-types.zip'
}
```

### Some Resources

The `withModuleFederation` plugin source can be seen here: https://github.com/nrwl/nx/blob/master/packages/react/src/module-federation/with-module-federation.ts

The specific portion where we set up the `@module-federation/enhanced` is here: https://github.com/nrwl/nx/blob/master/packages/react/src/module-federation/with-module-federation.ts#L54-L86
