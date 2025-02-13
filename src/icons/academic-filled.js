import React from 'react';
import PropTypes from 'prop-types';

const AcademicFilled = props => {
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
        d="M21.76 17.946c0-.403-.241-1.05-.647-1.375l-.081-6.555v-.014c0-.478 0-1.396-.81-1.767l-7.933-3.563a1.577 1.577 0 00-1.216 0L3.141 8.235c-.566.24-.891.81-.891 1.375 0 .647.325 1.132.89 1.376l7.93 3.563c.16.08.323.162.567.162.16 0 .403-.081.565-.162l7.611-3.401v5.423c-.403.322-.647.97-.647 1.375 0 .241.081.404.244.566.243.244.566.244.89.244h.488c.244 0 .566-.081.728-.244.163-.081.244-.322.244-.566zm-9.149-2.67a2.902 2.902 0 01-.89.163c-.322 0-.648-.08-.891-.162L5 12.686v2.672c0 .81.567 1.457 1.295 1.62 1.297.243 3.078.727 4.372 1.78.325.244.729.407 1.135.407s.81-.163 1.134-.406c1.297-1.053 3.079-1.538 4.373-1.782a1.654 1.654 0 001.294-1.619v-2.753l-5.992 2.672z"
      ></path>
    </svg>
  );
};

AcademicFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AcademicFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AcademicFilled;
