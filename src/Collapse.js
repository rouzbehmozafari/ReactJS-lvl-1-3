import React from 'react';
import Collapsible from 'react-collapsible';
import CollA from './CollA';
import CollQ from './CollQ';

const Collapse = (props) => {
  return (
    <Collapsible trigger={<CollQ q={props.q} />}>
      <CollA  a={props.a} />
    </Collapsible>
  );
};

export default Collapse;