import React from 'react';
import PropTypes from 'prop-types';

const BeachUmbrellaFilled = props => {
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
        d="M21.414 5.673a.378.378 0 00-.101-.291c-1.454-1.569-3.084-2.577-4.846-3-1.554-.373-3.21-.294-4.941.221 2.218.263 5.134 1.305 7.994 4.356l1.698-1.003a.391.391 0 00.196-.283zM18.29 7.684l-5.168 3.054-4.06-6.768c1.648-.221 5.463-.18 9.228 3.714zM7.907 4.785c-.939 1.485-2.42 4.849-.583 9.378l4.583-2.706-4-6.672zm-1.81 10.101c-1.655-3.888-1.12-7.059-.269-9.134-1.641 1.406-2.683 2.988-3.084 4.73-.397 1.693-.184 3.536.636 5.477a.4.4 0 00.252.215c.199.055.257.019.335-.029l.021-.012 2.11-1.247zm1.7-10.244l-.372-.622a.668.668 0 01.266-.93.735.735 0 01.975.255l.35.586-1.218.711zm11.356 16.174l-6.025-10.053-1.218.714 6.005 10.017c.132.218.37.342.62.342.12 0 .24-.031.352-.09a.665.665 0 00.266-.93z"
      ></path>
    </svg>
  );
};

BeachUmbrellaFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BeachUmbrellaFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BeachUmbrellaFilled;
