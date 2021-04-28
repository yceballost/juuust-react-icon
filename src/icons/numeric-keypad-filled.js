import React from 'react';
import PropTypes from 'prop-types';

const NumericKeypadFilled = props => {
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
        d="M3.675 3.363c0-.83.476-1.213 1.207-1.213.731 0 1.208.384 1.208 1.213 0 .398-.11.694-.306.893-.21.216-.52.32-.902.32-.38 0-.692-.104-.902-.32-.196-.201-.305-.495-.305-.893zm3.552 0c0-.83.476-1.213 1.207-1.213.734 0 1.207.384 1.207 1.213 0 .398-.109.694-.305.893-.21.216-.52.32-.902.32-.38 0-.692-.104-.902-.32-.196-.201-.305-.495-.305-.893zm4.756-1.213c-.73 0-1.207.384-1.207 1.213 0 .398.11.692.305.893.21.216.521.32.902.32s.692-.104.902-.32c.196-.199.305-.495.305-.893 0-.83-.476-1.213-1.207-1.213zM3.675 6.64c0-.826.476-1.213 1.207-1.213.731 0 1.208.384 1.208 1.213 0 .398-.11.695-.306.894-.21.215-.52.319-.902.319-.38 0-.692-.104-.902-.32-.196-.198-.305-.495-.305-.893zm4.76-1.213c-.732 0-1.208.387-1.208 1.213 0 .398.11.695.305.894.21.215.521.319.902.319s.692-.104.902-.32c.196-.198.305-.495.305-.893 0-.829-.473-1.213-1.207-1.213zm-4.76 4.49c0-.826.476-1.212 1.207-1.212.731 0 1.208.383 1.208 1.212 0 .398-.11.695-.306.894-.21.218-.52.322-.902.322-.38 0-.692-.106-.902-.322-.196-.199-.305-.496-.305-.894zm4.76-1.212c-.732 0-1.208.386-1.208 1.212 0 .398.11.695.305.894.21.216.521.322.902.322s.692-.104.902-.322c.196-.199.305-.496.305-.894 0-.829-.473-1.212-1.207-1.212zm3.002 12.857h6.448c.812 0 1.513-.255 1.958-.712.445-.456.67-1.09.67-1.888v-5.736c0-1.045-.645-1.692-1.687-1.692a2.068 2.068 0 00-.641.095c-.2-.703-.779-1.12-1.614-1.12-.218 0-.437.03-.644.098-.202-.698-.781-1.11-1.61-1.11a2.037 2.037 0 00-.566.073V7.19c0-1.093-.678-1.774-1.768-1.774-1.048 0-1.692.633-1.762 1.737v6.092c-.28-.473-.532-.804-.834-1.045-.583-.462-1.381-.473-1.939-.028-.538.429-.67 1.157-.339 1.857a326.447 326.447 0 002.167 4.417l.108.216.243.491c.366.738.662 1.335.757 1.54.12.258.406.869 1.053.869z"
      ></path>
    </svg>
  );
};

NumericKeypadFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NumericKeypadFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NumericKeypadFilled;
