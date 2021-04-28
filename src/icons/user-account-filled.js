import React from 'react';
import PropTypes from 'prop-types';

const UserAccountFilled = props => {
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
        d="M7.976 10.641c.84.81 2.053 1.219 3.61 1.219 1.558 0 2.774-.409 3.614-1.219.877-.84 1.322-2.086 1.322-3.705 0-1.62-.442-2.869-1.319-3.712C14.36 2.412 13.144 2 11.587 2c-1.558 0-2.77.412-3.61 1.224-.872.843-1.315 2.093-1.315 3.712 0 1.619.443 2.865 1.314 3.705zm-4.582 11.05H19.78c.308 0 .56-.251.56-.56v-1.638c0-1.569-.49-2.905-1.42-3.871-1.008-1.05-2.51-1.605-4.336-1.605H8.576c-1.827 0-3.322.557-4.33 1.608-.925.963-1.413 2.3-1.413 3.868v1.639c0 .308.252.56.56.56z"
      ></path>
    </svg>
  );
};

UserAccountFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UserAccountFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UserAccountFilled;
