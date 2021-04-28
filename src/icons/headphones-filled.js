import React from 'react';
import PropTypes from 'prop-types';

const HeadphonesFilled = props => {
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
      <path d="M19.723 11c-.093-5.804-2.91-9-7.983-9-5.099 0-7.925 3.238-7.975 9.126-1.146.7-1.762 2.003-1.762 3.868 0 2.745 1.328 4.322 3.736 4.432l.275.008h.106c1.942-.067 2.342-1.823 2.342-4.44 0-2.624-.4-4.378-2.305-4.448a1.8 1.8 0 00-.303 0c-.05 0-.1 0-.115.009a5.104 5.104 0 00-.711.084c.185-4.883 2.431-7.364 6.712-7.364 4.28 0 6.529 2.473 6.72 7.338-.158-.016-.309-.053-.477-.061-.05-.009-.1-.009-.134-.009a1.523 1.523 0 00-.283 0c-1.947.068-2.342 1.824-2.342 4.449 0 1.714.176 3.05.846 3.792-.868.485-1.913.801-3.135.964-.15-.572-.602-.913-1.288-.93-.88-.025-1.42.468-1.448 1.39-.017.442.092.8.328 1.055.232.255.585.41 1.028.418h.067c.409 0 .742-.12.986-.35.075-.076.126-.18.176-.28 1.88-.197 3.446-.751 4.658-1.636.043.008.068.016.107.016h.126l.274-.008c2.407-.112 3.737-1.69 3.737-4.431 0-1.972-.703-3.337-1.963-3.992z"></path>
    </svg>
  );
};

HeadphonesFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HeadphonesFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HeadphonesFilled;
