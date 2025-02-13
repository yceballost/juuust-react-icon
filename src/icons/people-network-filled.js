import React from 'react';
import PropTypes from 'prop-types';

const PeopleNetworkFilled = props => {
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
        d="M11.84 6.426c-.697 0-1.24-.185-1.616-.546-.39-.379-.588-.936-.588-1.664 0-.729.196-1.289.588-1.667C10.6 2.185 11.146 2 11.84 2c.698 0 1.244.185 1.622.549.392.378.591.938.591 1.667 0 .725-.199 1.285-.59 1.664-.379.364-.925.546-1.623.546zM8.17 10.84a.253.253 0 01-.251-.252v-.736c0-.704.218-1.303.633-1.737.45-.47 1.123-.72 1.941-.72h2.695c.82 0 1.493.25 1.944.72.414.434.636 1.033.636 1.737v.736a.253.253 0 01-.253.252H8.171zm-3.865 5.886c.376.36.92.546 1.617.546s1.243-.182 1.621-.55c.395-.378.594-.938.594-1.663 0-.728-.199-1.289-.59-1.667-.379-.364-.925-.549-1.623-.549-.697 0-1.243.188-1.619.552-.392.38-.588.938-.588 1.667 0 .728.196 1.285.588 1.664zM7.27 18.24c.818 0 1.49.25 1.944.72.417.434.636 1.033.636 1.736v.737c0 .14-.112.252-.252.252H2.252A.251.251 0 012 21.434v-.737c0-.703.218-1.305.633-1.736.451-.47 1.123-.723 1.941-.723H7.27v.003zm8.28-3.185c0 .728.199 1.286.591 1.664.375.361.913.546 1.613.546s1.244-.182 1.622-.546c.392-.378.594-.938.594-1.664 0-.725-.199-1.288-.59-1.667-.379-.364-.925-.549-1.623-.549-.697 0-1.243.185-1.619.55-.39.377-.588.938-.588 1.666zm5.501 3.9c.418.433.636 1.033.636 1.736v.736a.253.253 0 01-.252.253h-7.347a.253.253 0 01-.252-.253v-.736c0-.703.218-1.305.633-1.737.45-.47 1.123-.72 1.94-.72h2.693c.823 0 1.496.25 1.95.72zm-7.409-2.41a.621.621 0 00.858-.207.622.622 0 00-.21-.86l-1.844-1.129v-2.143a.625.625 0 00-1.249 0v2.143L9.353 15.48a.627.627 0 00.328 1.16c.112 0 .224-.031.325-.093l1.817-1.112 1.818 1.112z"
      ></path>
    </svg>
  );
};

PeopleNetworkFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PeopleNetworkFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PeopleNetworkFilled;
