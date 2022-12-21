import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App articleNumber={[]} tag={''} name={''} description={''} category={''} price={0} rating={0} imageName={''} />
);
