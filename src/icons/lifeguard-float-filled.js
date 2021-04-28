import React from 'react';
import PropTypes from 'prop-types';

const LifeguardFloatFilled = props => {
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
        d="M11.67 2c.255 0 .518.003.745.011 1.93.045 9.431.807 9.431 9.86 0 9.073-7.512 9.776-9.392 9.812-.3.006-.602.006-.902.003-1.975-.03-9.392-.745-9.392-9.874 0-9.117 7.347-9.795 9.325-9.812h.185zM9.636 6.325L9.06 3.54c-2.1.526-4.507 1.924-5.35 5.442l2.75.569c.606-1.922 1.956-2.818 3.177-3.227zm2.283 10.157c.115 0 .23 0 .328-.003 3.969-.07 4.395-3.252 4.395-4.62 0-1.366-.432-4.554-4.423-4.649a19.184 19.184 0 00-.418-.006h-.098c-1.621.014-4.339.634-4.339 4.622 0 2.236.818 3.642 2.505 4.297a5.68 5.68 0 001.882.359h.168zm2.423.86l.572 2.773c2.086-.538 4.459-1.922 5.341-5.291l-2.756-.57c-.633 1.813-1.96 2.679-3.157 3.088zm-5.25 2.784c-2.08-.535-4.445-1.919-5.333-5.303l2.76-.568c.59 1.697 1.778 2.577 2.907 3.014.05.02.098.035.146.049.031.009.063.018.095.03l-.574 2.778zm5.841-16.521c2.1.566 4.476 1.98 5.339 5.384l-2.745.566c-.616-1.86-1.953-2.757-3.165-3.185l.571-2.765z"
      ></path>
    </svg>
  );
};

LifeguardFloatFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LifeguardFloatFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LifeguardFloatFilled;
