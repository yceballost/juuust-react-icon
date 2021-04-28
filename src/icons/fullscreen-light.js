import React from 'react';
import PropTypes from 'prop-types';

const FullscreenLight = props => {
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
        d="M2.16 8.252c0 .32.26.577.58.577.32 0 .58-.257.58-.577V3.32h4.932a.581.581 0 000-1.16H2.74c-.32 0-.58.26-.58.58v5.512zM8.843 21.27c0-.32-.26-.58-.58-.58 0 0-4.943 0-4.946-.002v-4.933a.59.59 0 00-.58-.577c-.32 0-.577.26-.577.58v5.512c0 .32.26.577.58.58h5.524c.319 0 .58-.26.58-.58zm12.423-6.103a.59.59 0 01.578.58v5.523c0 .32-.258.577-.578.577h-5.523a.581.581 0 010-1.16h4.946v-4.943c0-.32.258-.577.577-.577zm.58-12.429c0-.32-.26-.577-.58-.577h-5.512a.579.579 0 100 1.157h4.938v4.958a.576.576 0 101.154 0V2.737z"
      ></path>
    </svg>
  );
};

FullscreenLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FullscreenLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FullscreenLight;
