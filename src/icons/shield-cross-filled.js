import React from 'react';
import PropTypes from 'prop-types';

const ShieldCrossFilled = props => {
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
        d="M7.96 3.507c-1.072.731-1.924 1.31-3.526 1.053a.616.616 0 00-.524.11.637.637 0 00-.232.49v.03c0 .36-.004 3.194.132 5.855h7.874V2c-1.7.143-2.77.86-3.723 1.507zm12.945 1.686v-.03c-.003-.026-.006-.051-.006-.079a.636.636 0 00-.725-.53c-1.62.256-2.476-.316-3.552-1.047-.953-.647-2.023-1.364-3.723-1.507v9.048h7.877c.132-2.66.13-5.492.129-5.855zm-8.006 16.493v-9.395h7.804c-.062.891-.14 1.715-.246 2.345v.003c-.558 3.271-6.014 6.263-7.558 7.047zM3.885 12.29c.065.893.143 1.717.252 2.347.555 3.274 6.006 6.266 7.55 7.047V12.29H3.884z"
      ></path>
    </svg>
  );
};

ShieldCrossFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShieldCrossFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShieldCrossFilled;
