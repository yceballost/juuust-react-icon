import React from 'react';
import PropTypes from 'prop-types';

const EmailLight = props => {
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
        d="M21.84 6.929l-.014 10.098c.008.008.117.734-.356 1.305-.325.395-.83.602-1.496.614-.521.008-2.504.01-4.919.01-4.18 0-9.644-.008-11.013-.01h-.32a1.536 1.536 0 01-1.034-.435c-.35-.341-.53-.843-.53-1.487V6.937c-.005-.073-.041-.93.483-1.484.269-.286.644-.437 1.078-.437l16.585.005c.524.02 1.494.37 1.536 1.908zM3.72 5.836l16.585.003c.103.003.593.065.691.883l-8.095 4.918c-1.101.72-2.083.05-2.158-.002h-.002L2.986 6.715c.02-.219.081-.521.255-.703.115-.118.272-.177.48-.177zm17.114 11.98c-.168.2-.462.306-.874.312-1.412.023-13.707.004-15.91 0h-.336a.755.755 0 01-.451-.2c-.188-.184-.283-.487-.283-.901V7.682l7.3 4.63.006.005c.08.055.705.483 1.562.483.448 0 .963-.118 1.493-.468l7.678-4.664-.009 9.426v.002c.005.03.06.442-.176.72z"
      ></path>
    </svg>
  );
};

EmailLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmailLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmailLight;
