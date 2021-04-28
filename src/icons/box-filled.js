import React from 'react';
import PropTypes from 'prop-types';

const BoxFilled = props => {
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
        d="M21.644 8.056a.534.534 0 01.011.23c.017.09.031.179.034.28v11.448c0 .924-.818 1.678-1.826 1.678H3.829c-1.008 0-1.826-.754-1.826-1.678V8.566c0-.163.03-.317.078-.465.002-.007.002-.013.002-.02l.001-.02 1.333-4.739c.048-.734.77-1.32 1.653-1.32h13.549c.88 0 1.6.583 1.653 1.317l1.372 4.737zm-2.82-4.653c0 .05.005.098.022.146l.966 3.333h-5.398l-.462-3.655h4.664c.115.003.207.078.207.176zm-13.961 0a.502.502 0 01-.02.143L3.9 6.886h5.042l.387-3.656h-4.26c-.113 0-.205.078-.205.173zm14.994 17.053c.202 0 .378-.21.378-.448V8.56c0-.238-.176-.448-.378-.448h-5.361l.002 2.462c0 .34-.324.614-.725.614h-4.18c-.4 0-.725-.275-.725-.614V8.112H3.824c-.202 0-.376.21-.376.448v11.448c0 .238.174.448.376.448h16.033z"
      ></path>
    </svg>
  );
};

BoxFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BoxFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BoxFilled;
