import React from 'react';
import Collapsible from 'react-collapsible';
import CollA from './CollA';
import CollQ from './CollQ';

const Collapse = () => {
  return (
    <Collapsible trigger={<CollQ/>}>
      <CollA  />
    </Collapsible>
  );
};

export default Collapse;