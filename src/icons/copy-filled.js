import React from 'react';
import PropTypes from 'prop-types';

const CopyFilled = props => {
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
        d="M16.084 7.602h4.143c.804 0 1.46.656 1.456 1.46v11.165c0 .804-.655 1.46-1.459 1.46H9.062c-.804 0-1.46-.656-1.46-1.46v-4.143h-4.09c-.831 0-1.51-.678-1.51-1.51V3.51c0-.832.679-1.51 1.51-1.51h11.062c.832 0 1.51.678 1.51 1.51v4.092zM3.274 3.507v11.064c0 .132.104.236.236.236H14.57a.237.237 0 00.236-.236V3.507a.237.237 0 00-.236-.235H3.51a.237.237 0 00-.235.235z"
      ></path>
    </svg>
  );
};

CopyFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CopyFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CopyFilled;
