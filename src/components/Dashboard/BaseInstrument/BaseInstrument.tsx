import React from 'react';

import type { ReactElement } from 'react';
import type { PropsBaseInstrument } from './types';

function BaseInstrument({ name }: PropsBaseInstrument): ReactElement {
  console.log(name);

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default BaseInstrument;
