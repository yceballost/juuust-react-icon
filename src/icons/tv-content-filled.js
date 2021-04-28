import React from 'react';
import PropTypes from 'prop-types';

const TvContentFilled = props => {
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
        d="M5.59 17.374h12.806c1.118 0 1.986-.311 2.58-.927.572-.589.86-1.434.86-2.51V7.94c0-2.2-1.221-3.412-3.44-3.412L5.59 4.52c-2.219 0-3.44 1.21-3.44 3.411v5.997c0 1.076.289 1.922.857 2.516.594.616 1.462.93 2.583.93zm3.94 2.199h4.917c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56H9.53a.562.562 0 00-.56.56c0 .308.252.56.56.56z"
      ></path>
    </svg>
  );
};

TvContentFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TvContentFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TvContentFilled;
