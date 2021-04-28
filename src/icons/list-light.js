import React from 'react';
import PropTypes from 'prop-types';

const ListLight = props => {
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
        d="M2.16 6.778c0 .519.426.939.95.939.523 0 .95-.423.95-.939a.944.944 0 00-.95-.938c-.524 0-.95.42-.95.938zm2.801-.002c0 .31.26.56.58.56h15.725c.32 0 .58-.252.58-.56a.57.57 0 00-.58-.56H5.541a.581.581 0 00-.58.56zm16.305 4.652c.32 0 .58.25.58.56a.57.57 0 01-.58.56H5.541a.57.57 0 01-.58-.56c0-.31.26-.56.58-.56h15.725zm-19.106.56c0 .519.426.939.95.939.523 0 .95-.42.95-.938a.944.944 0 00-.95-.939c-.524 0-.95.42-.95.938zm19.106 4.653c.155 0 .3.059.41.163.109.103.17.246.17.395 0 .308-.26.56-.58.56H5.541a.581.581 0 01-.58-.56c0-.309.26-.56.58-.56h15.725v.002zm-19.106.56c0 .519.426.939.95.939.523 0 .95-.42.95-.939a.944.944 0 00-.95-.938c-.524 0-.95.42-.95.938z"
      ></path>
    </svg>
  );
};

ListLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ListLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ListLight;
