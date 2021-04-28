import React from 'react';
import PropTypes from 'prop-types';

const TicketsFilled = props => {
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
        d="M17.543 2h2.239c1.05 0 1.904.852 1.904 1.9v14.248c0 1.048-.854 1.9-1.904 1.9h-2.255a1.01 1.01 0 01-.99-.815.898.898 0 00-.882-.723.898.898 0 00-.882.723 1.01 1.01 0 01-.989.815h-.82a.91.91 0 01-.373.434l-1.753.983a1.721 1.721 0 01-.85.221 1.73 1.73 0 01-1.521-.885L2.23 9.737a1.735 1.735 0 01.664-2.364L4.63 6.4a.944.944 0 011.213.249.757.757 0 001.305-.731.933.933 0 01.418-1.163l1.737-.972c.109-.061.23-.098.35-.134a1.898 1.898 0 011.88-1.647h2.237c.505 0 .925.364.998.865a.906.906 0 00.89.768c.446 0 .83-.33.894-.768A.993.993 0 0117.543 2zM5.28 10.448l4.373 7.521-.006-9.933-4.367 2.412zm6.448-4.386c0-.23.185-.415.415-.415v-.003h7.143c.23 0 .414.185.414.415v9.975c0 .23-.185.414-.414.414h-7.143a.414.414 0 01-.415-.414V6.062z"
      ></path>
    </svg>
  );
};

TicketsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TicketsFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TicketsFilled;
