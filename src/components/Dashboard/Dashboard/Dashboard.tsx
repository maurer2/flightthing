import type { ReactElement } from 'react';

import React from 'react';

import type { PropsDashboard } from './types';

function Dashboard({ children, name }: PropsDashboard): ReactElement {
  console.log(name);

  return (
    <div>
      <h2>{name}</h2>
      {children}
    </div>
  );
}

export default Dashboard;
