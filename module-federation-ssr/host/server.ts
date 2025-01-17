import * as path from 'path';
import express from 'express';
import cors from 'cors';

import { handleRequest } from './src/main.server';

const port = process.env['PORT'] || 4200;
const app = express();

const browserDist = path.join(
  process.cwd(),
  'dist/module-federation-ssr/host/browser'
);
const indexPath = path.join(browserDist, 'index.html');

app.use(cors());

app.get(
  '*.*',
  express.static(browserDist, {
    maxAge: '1y',
  })
);

app.use('*', handleRequest(indexPath));

const server = app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});

server.on('error', console.error);
