import React from 'react';
import PropTypes from 'prop-types';

const CarMovingFilled = props => {
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
        d="M21.14 11.866c1.048 1.714.353 2.876-.157 3.249a.597.597 0 01-.353.115h-2.014c-.218 1.016-1 1.633-2.16 1.633-1.16 0-1.94-.617-2.16-1.633h-2.615c-.222 1.014-1.003 1.624-2.16 1.624-1.157 0-1.936-.61-2.16-1.624h-1.31a.599.599 0 01-.583-.46c-.009-.033-.202-.848-.132-2.064-.008-.905.552-2.431 1.82-3.712.894-.902 2.443-1.977 4.76-1.977 3.605 0 5.44 2.042 5.98 2.773.678.112 2.306.532 3.244 2.076zm-10.585 2.756c0 .706-.328 1.033-1.031 1.033-.706 0-1.034-.327-1.031-1.033 0-.706.328-1.034 1.03-1.034.704 0 1.032.328 1.032 1.034zm6.932.005c0 .706-.327 1.034-1.03 1.034-.704 0-1.031-.328-1.031-1.034s.327-1.033 1.03-1.033c.704 0 1.031.328 1.031 1.033zm-12.56-1.145a.6.6 0 00-.6-.6H3.023a.6.6 0 000 1.2h1.306a.6.6 0 00.6-.6zm-.344-2.6a.6.6 0 010 1.2H2.599a.6.6 0 010-1.2h1.984zm.627-.776a.6.6 0 000-1.198H3.67a.6.6 0 000 1.198h1.54z"
      ></path>
    </svg>
  );
};

CarMovingFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CarMovingFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CarMovingFilled;
