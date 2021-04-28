import React from 'react';
import PropTypes from 'prop-types';

const PillsFilled = props => {
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
        d="M18.895 4.005c2.263 2.27 2.44 4.757.526 7.06 1.639.91 2.426 2.635 2.429 5.016 0 3.636-1.832 5.762-5.748 5.762-2.493 0-4.138-.863-5.006-2.426-1.059.908-2.162 1.367-3.272 1.367-1.294 0-2.59-.616-3.82-1.851-1.247-1.25-1.866-2.558-1.843-3.888.022-1.28.638-2.54 1.837-3.74l.137-.14a4.82 4.82 0 01.342-.336l6.359-6.378c.07-.086.183-.195.3-.306l.002-.002.143-.138c2.454-2.462 5.16-2.459 7.614 0zM11.96 5.079a3.562 3.562 0 00-.214.219l-2.513 2.52c-.002.008-.002.015-.002.022 0 .007 0 .014-.003.02-.34 1.093.255 2.418 1.767 3.934.13.13.258.245.386.36l.063.057c.93-1.224 2.467-1.888 4.658-1.888.778 0 1.47.087 2.087.25 1.79-1.911 1.74-3.774-.171-5.687-1.97-1.975-3.886-1.978-5.857 0l-.163.157-.038.036zm-.326 11.628c.19 2.638 1.613 3.893 4.465 3.893s4.274-1.252 4.468-3.893h-8.933zm8.933-1.244h-8.933c.193-2.639 1.616-3.893 4.465-3.893 2.852 0 4.274 1.252 4.468 3.893z"
      ></path>
    </svg>
  );
};

PillsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PillsFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PillsFilled;
