import React from 'react';
import PropTypes from 'prop-types';

const FastForwardFilled = props => {
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
        d="M2 11.846C2 5.403 5.403 2 11.846 2c6.437 0 9.84 3.403 9.84 9.846 0 6.437-3.403 9.84-9.84 9.84-6.443 0-9.846-3.403-9.846-9.84zm8.672-.291L7.504 13.44V9.65l3.168 1.905zm5.925-.006l-3.168-1.905v3.79l3.168-1.885zM7.21 8.062a.603.603 0 00-.61-.009.618.618 0 00-.309.527v5.924a.6.6 0 00.605.605.61.61 0 00.311-.084l4.953-2.952a.117.117 0 00.033-.032c.008-.01.016-.02.026-.027v2.482a.604.604 0 00.915.52l4.953-2.946a.604.604 0 000-1.036l-4.953-2.978a.605.605 0 00-.915.518v2.518a.134.134 0 01-.025-.025c-.009-.012-.018-.023-.032-.03L7.21 8.061z"
      ></path>
    </svg>
  );
};

FastForwardFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FastForwardFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FastForwardFilled;
