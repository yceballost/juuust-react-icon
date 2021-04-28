import React from 'react';
import PropTypes from 'prop-types';

const ContactBookFilled = props => {
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
        d="M16.116 21.653h-8.7c-.308 0-.605-.048-.884-.137a2.704 2.704 0 01-1.893-1.894 2.903 2.903 0 01-.136-.883V4.665c0-.337.062-.664.182-.968a2.458 2.458 0 011.431-1.472c.322-.136.67-.207 1.031-.207h8.97a2.74 2.74 0 012.736 2.736V18.92a2.738 2.738 0 01-2.737 2.734zm1.597-13.306V4.753c0-.427-.169-.815-.443-1.101v4.695h.443zm-.443 5.835V9.49h.443v4.692h-.443zm0 1.143v4.695c.274-.286.443-.674.443-1.101v-3.594h-.443zm-6.339-8.412c1.547 0 2.435.888 2.435 2.434 0 1.546-.888 2.426-2.435 2.426-1.546 0-2.425-.882-2.425-2.426 0-1.543.885-2.434 2.425-2.434zM14 16.37c.26 0 .473-.247.473-.55l-.003-.89c0-.728-.204-1.353-.594-1.807-.417-.487-1.025-.745-1.759-.745H9.752c-.734 0-1.342.258-1.759.745-.387.457-.594 1.082-.594 1.807v.89c0 .303.213.55.474.55h6.126z"
      ></path>
    </svg>
  );
};

ContactBookFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ContactBookFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ContactBookFilled;
