import React from 'react';

export default props => (
  props.list.map(resource => <div key={resource.id}>{resource.name}</div>)
);
