import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  const getArray = (items) => {
    return Array.isArray(items) ? items : Object.values(items);
  };
  return (
    <ul className='list-group' role='true'>
      {getArray(items).map((item) => (
        <li
          key={item[valueProperty]}
          className={
            'list-group-item' + (item === selectedItem ? ' active' : '')
          }
          onClick={() => onItemSelect(item)}
          role='button'
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  );
};
GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
};

export default GroupList;
