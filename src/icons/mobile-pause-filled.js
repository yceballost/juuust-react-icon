import React from 'react';
import PropTypes from 'prop-types';

const MobilePauseFilled = props => {
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
        d="M20.894 3.115c.641.639.955 1.535.955 2.737v12.305c0 1.216-.314 2.115-.963 2.754-.645.63-1.55.938-2.765.938h-6.21c-1.219 0-2.12-.308-2.762-.938-.577-.566-.888-1.34-.953-2.359v-.549l-.053.001-.059.002c-3.742 0-5.924-1.871-5.924-5.869 0-4 2.182-5.87 5.924-5.87h.05l.051.002v-.417c0-1.185.314-2.076.955-2.72.653-.653 1.558-.972 2.77-.972h6.21c1.222.003 2.13.314 2.774.955zM8.087 16.801c3.213 0 4.709-1.481 4.709-4.663 0-3.183-1.496-4.667-4.709-4.667-3.21 0-4.706 1.482-4.706 4.666 0 3.183 1.496 4.664 4.706 4.664zm5.877 1.208c0-.656.395-1.048 1.053-1.048.661 0 1.053.392 1.053 1.048 0 .319-.092.574-.274.759-.185.187-.454.285-.779.285s-.594-.098-.779-.285c-.182-.182-.274-.44-.274-.76zM6.266 9.306c.337 0 .608.268.608.602v4.711a.607.607 0 01-.608.605.605.605 0 01-.607-.605V9.911c0-.334.274-.605.607-.605zm4.06.588a.606.606 0 00-.609-.602.604.604 0 00-.607.602v4.711a.607.607 0 001.216 0V9.894z"
      ></path>
    </svg>
  );
};

MobilePauseFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobilePauseFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobilePauseFilled;
