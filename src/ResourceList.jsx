import React from 'react';
import PropTypes from 'prop-types';

const ResourceList = props => (
  props.list.map(resource => <div key={resource.id}>{resource.name}</div>)
);

ResourceList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

export default ResourceList;
