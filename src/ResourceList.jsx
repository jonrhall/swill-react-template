import React from 'react';

export default props => {
  return (
    props.list.map(resource => <div key={resource.id}>{resource.name}</div>)
  )
};