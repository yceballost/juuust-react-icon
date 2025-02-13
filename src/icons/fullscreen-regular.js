import React from 'react';
import PropTypes from 'prop-types';

const FullscreenRegular = props => {
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
        d="M2.16 8.356a.844.844 0 001.686.003v-4.51H8.36a.846.846 0 000-1.689H3.003a.844.844 0 00-.843.843v5.353zm7.02 12.68a.845.845 0 00-.813-.876H3.852v-4.51a.844.844 0 00-1.686 0v5.356c0 .465.378.843.843.843h5.358a.845.845 0 00.813-.812zm11.817-6.243c.465 0 .844.378.844.843v5.353a.844.844 0 01-.844.843H15.64a.845.845 0 010-1.686h4.513v-4.51a.846.846 0 01.845-.843zm.85-11.767a.842.842 0 00-.844-.844v.003h-5.358a.844.844 0 000 1.687h4.512v4.507a.846.846 0 001.69 0V3.026z"
      ></path>
    </svg>
  );
};

FullscreenRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FullscreenRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FullscreenRegular;
