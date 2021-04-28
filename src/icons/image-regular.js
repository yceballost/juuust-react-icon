import React from 'react';
import PropTypes from 'prop-types';

const ImageRegular = props => {
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
        d="M20.245 4.522c.832 0 1.591.664 1.591 1.393v11.98c0 .728-.759 1.392-1.59 1.392H3.74c-.863 0-1.591-.639-1.591-1.392V5.915c0-.754.728-1.393 1.591-1.393h16.504zm0 13.558c.194 0 .367-.146.39-.207l-.003-11.956a.555.555 0 00-.384-.182H3.741c-.21 0-.364.132-.387.19v11.973c.014.045.171.182.387.182h16.504zM6.147 8.968c0-.555.451-1.006 1.003-1.006a1.006 1.006 0 010 2.011 1.006 1.006 0 01-1.003-1.005zm1.003 2.216a2.216 2.216 0 010-4.432c1.218 0 2.207.995 2.207 2.216a2.213 2.213 0 01-2.207 2.216zm12.42 1.336l-3.18-2.44a.605.605 0 00-.741.005l-3.636 2.9-.88-.83a.6.6 0 00-.798-.025l-5.168 4.317a.607.607 0 00.386 1.07.59.59 0 00.384-.14l4.76-3.975 3.307 3.123c.241.23.625.222.852-.025a.605.605 0 00-.025-.854l-1.933-1.824 3.131-2.496 2.807 2.154a.603.603 0 00.846-.112.609.609 0 00-.112-.848z"
      ></path>
    </svg>
  );
};

ImageRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ImageRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ImageRegular;
