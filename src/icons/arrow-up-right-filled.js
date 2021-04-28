import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRightFilled = props => {
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
      <path d="M10.28 20.588h-.021c-.395-.006-.78-.196-1.143-.56l-5.048-5.025-.017-.017c-.32-.348-.44-.709-.361-1.079.073-.336.302-.605.52-.823l.015-.014 5.118-4.812-2.58-2.58-.009-.009c-.316-.33-.409-.893-.218-1.339.176-.414.566-.66 1.039-.66h12.09c.28-.02.532.07.717.254.185.185.274.44.252.717l-.006 12.146c.011.415-.232.793-.613.955-.457.205-1.05.112-1.406-.216l-.017-.014-2.375-2.378-4.79 4.905-.006.006c-.359.361-.742.543-1.14.543z"></path>
    </svg>
  );
};

ArrowUpRightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpRightFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpRightFilled;
