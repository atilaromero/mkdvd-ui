import React from 'react';
import PropTypes from 'prop-types';
import LsItem from './ls-item';

const Ls = ({
  items,
  changeDir,
  callAction,
}) => (
  <div>
    <h3>Content:</h3>
    <ul>
      {items.map(item =>
        <LsItem
          key={item.path}
          {...item}
          changeDir={changeDir}
          callAction={callAction}
        />
      )}
    </ul>
  </div>
);

Ls.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      isDir: PropTypes.bool.isRequired,
      subroutines: PropTypes.arrayOf(
        PropTypes.string
      )
    })
  ),
  changeDir: PropTypes.func.isRequired,
  callAction: PropTypes.func.isRequired,
};

export default Ls;
