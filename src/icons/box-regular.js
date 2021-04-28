import React from 'react';
import PropTypes from 'prop-types';

const BoxRegular = props => {
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
        d="M21.642 8.055a.533.533 0 01.012.23c.016.09.03.18.033.28v11.447c0 .925-.818 1.678-1.826 1.678H3.829c-1.008 0-1.826-.753-1.826-1.678V8.565c0-.162.03-.316.078-.465.002-.007.002-.013.002-.02l.001-.019 1.333-4.739c.048-.734.77-1.32 1.653-1.32h13.547c.88 0 1.6.583 1.653 1.317l1.372 4.736zm-2.82-4.652c0 .05.006.098.022.146l.967 3.333h-5.398l-.462-3.655h4.664c.115.003.207.078.207.176zm-13.96 0a.502.502 0 01-.02.143l-.94 3.339h5.041L9.33 3.23H5.07c-.115 0-.208.078-.208.173zm14.993 17.052c.202 0 .379-.21.379-.448V8.56c0-.238-.177-.449-.379-.449h-5.36l.002 2.462c0 .34-.325.614-.725.614H9.593c-.4 0-.725-.275-.725-.614V8.111H3.823c-.201 0-.375.21-.375.449v11.447c0 .238.174.448.375.448h16.032zM13.05 8.11v1.846h-2.73V8.111h2.73zm-.092-1.23l-.465-3.649h-1.711l-.387 3.65h2.563z"
      ></path>
    </svg>
  );
};

BoxRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BoxRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BoxRegular;
