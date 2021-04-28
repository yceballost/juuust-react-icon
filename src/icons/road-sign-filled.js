import React from 'react';
import PropTypes from 'prop-types';

const RoadSignFilled = props => {
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
        d="M21.836 11.996c0-6.44-3.406-9.846-9.846-9.846-6.437 0-9.84 3.406-9.84 9.846 0 6.437 3.403 9.84 9.84 9.84 6.44 0 9.846-3.403 9.846-9.84zM13.21 6.14a.656.656 0 01.703.085l3.123 3.025c.132.12.21.291.207.47a.657.657 0 01-.232.493l-3.067 2.97c-.233.19-.502.22-.734.112a.647.647 0 01-.37-.583v-1.011h-.868v5.448a.41.41 0 01-.41.409h-2.96a.41.41 0 01-.409-.41V8.706a.942.942 0 01.28-.681.965.965 0 01.68-.28h3.684v-1.02c0-.252.146-.479.373-.583z"
      ></path>
    </svg>
  );
};

RoadSignFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RoadSignFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RoadSignFilled;
