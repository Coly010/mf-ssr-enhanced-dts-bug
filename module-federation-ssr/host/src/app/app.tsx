import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Ssrremote1 = React.lazy(() => import('ssrremote1/Module'));

const Ssrremote2 = React.lazy(() => import('ssrremote2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/ssrremote1">Ssrremote1</Link>
        </li>

        <li>
          <Link to="/ssrremote2">Ssrremote2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="ssrhost" />} />

        <Route path="/ssrremote1" element={<Ssrremote1 />} />

        <Route path="/ssrremote2" element={<Ssrremote2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
