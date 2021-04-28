import React from 'react';
import PropTypes from 'prop-types';

const FireFilled = props => {
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
      <path d="M18.444 11.182a9.418 9.418 0 00-1.423-1.238c-4.11-2.989-2.347-7.16-2.272-7.336a.422.422 0 00-.059-.432.406.406 0 00-.411-.137c-1.844.437-3.737 1.395-5.33 2.698-5.27 4.308-5.281 11.05-2.967 13.991 1.039 1.322 2.524 2.255 4.157 2.726a4.013 4.013 0 01-.757-.58 3.393 3.393 0 01-.162-4.647c.207-.238.442-.457.7-.653 1.586-1.238.885-3.005.877-3.022a.617.617 0 01.103-.642.63.63 0 01.62-.196c.888.227 1.798.717 2.56 1.387 1.706 1.496 3.056 4.98 1.386 7.257a4.054 4.054 0 01-1.773 1.356c.224-.033.448-.061.673-.115.08-.01 2.01-.29 3.77-1.904 1.201-1.101 1.896-2.589 1.955-4.185.056-1.597-.53-3.135-1.647-4.328z"></path>
    </svg>
  );
};

FireFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FireFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FireFilled;
