import React from 'react';

import type { ReactElement } from 'react';
import type { PropsDashboard } from './types';

function Dashboard({ name, children }: PropsDashboard): ReactElement {
  console.log(name);

  return (
    <div>
      <h2>{name}</h2>
      {children}
    </div>
  );
}

export default Dashboard;
