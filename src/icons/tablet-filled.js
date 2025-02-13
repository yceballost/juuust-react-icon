import React from 'react';
import PropTypes from 'prop-types';

const TabletFilled = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.282 5.608s.005 8.507.005 12.434c0 3.426-2.675 3.644-3.358 3.644-.101 0-.157-.003-.157-.003s-3.757.003-7.715.003c-3.958 0-3.52-3.638-3.52-3.638V5.628c0-3.43 2.756-3.622 3.378-3.622.078 0 .123.002.123.002l7.75-.002c3.807-.003 3.494 3.602 3.494 3.602zM6.609 3.58c-.218.134-.88.546-.88 2.042v11.157H18.1c0-4.238-.005-11.168-.005-11.168 0-.034.002-.068.005-.104v-.008s.062-1.014-.512-1.653c-.367-.406-.97-.613-1.793-.613l-7.75.002a.76.76 0 01-.041-.001l-.04-.001H7.92c-.18-.003-.793.022-1.31.347zm4.476 15.647c0-.513.308-.82.821-.82.513 0 .82.307.82.82 0 .25-.07.45-.212.596-.146.146-.356.225-.608.225s-.462-.079-.608-.224c-.143-.146-.213-.348-.213-.597z"
      ></path>
    </svg>
  );
};

TabletFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TabletFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TabletFilled;
