import React from 'react';
import PropTypes from 'prop-types';

const TalkFilled = props => {
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
        d="M20.154 2H14.15a1.53 1.53 0 00-.213.014h-.225c-.89 0-1.613.723-1.613 1.613V7.53c0 .92.658 1.614 1.53 1.614h.109V10.7c0 .426.336.824.75.888a.741.741 0 00.112.009c.376 0 .79-.27 1.082-.715.131-.198.795-1.243 1.109-1.74h3.288c.891 0 1.614-.722 1.614-1.613V3.627c0-.107-.01-.212-.03-.313A1.52 1.52 0 0020.153 2zM14.71 6.118a.545.545 0 110-1.093.547.547 0 010 1.093zm1.638-.547a.545.545 0 101.093 0 .547.547 0 00-1.093 0zm2.731.547a.545.545 0 110-1.093.547.547 0 010 1.093zm-13.325 7.98c.656.695 1.603 1.045 2.818 1.045 1.213 0 2.163-.353 2.818-1.045.617-.653.93-1.563.93-2.703s-.313-2.05-.93-2.703C10.734 8 9.787 7.647 8.571 7.647c-1.215 0-2.162.35-2.817 1.045-.617.653-.93 1.563-.93 2.703s.31 2.05.93 2.703zm8.827 7.6H2.56a.562.562 0 01-.56-.56v-1.04c0-1.345.356-2.384 1.059-3.09s1.74-1.067 3.075-1.067h4.872c1.338 0 2.372.359 3.075 1.067.703.71 1.06 1.745 1.06 3.09v1.04a.56.56 0 01-.561.56z"
      ></path>
    </svg>
  );
};

TalkFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TalkFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TalkFilled;
