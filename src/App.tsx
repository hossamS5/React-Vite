import './App.css';
import React, { Suspense } from 'react';

import Nav from './components/molecules/Nav';

const CalculationSection = React.lazy(
  () => import('./components/molecules/CalculationSection')
);

const App: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Nav />
      <Suspense fallback="loading...">
        <CalculationSection defaultName="Hossam" />
      </Suspense>
    </div>
  );
};

export default App;
