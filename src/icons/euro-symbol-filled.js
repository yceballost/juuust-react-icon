import React from 'react';
import PropTypes from 'prop-types';

const EuroSymbolFilled = props => {
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
      <path d="M20.61 18.966c-.285-.636-1.002-.913-1.604-.61-1.009.501-2.28.753-3.774.753-3.33 0-5.411-1.25-6.333-3.753h4.883c.669 0 1.204-.572 1.204-1.275s-.538-1.271-1.205-1.271H8.395c-.02-.325-.059-.633-.059-.984 0-.09.014-.162.017-.249h5.428c.67 0 1.205-.571 1.205-1.274 0-.704-.538-1.272-1.205-1.272H8.672c.768-2.995 2.92-4.485 6.56-4.485 1.477 0 2.734.25 3.737.737.605.3 1.322.017 1.6-.62.28-.638.017-1.394-.589-1.691C18.658 2.328 17.062 2 15.235 2c-5.05 0-8.179 2.476-9.05 7.036H4.896c-.666 0-1.204.572-1.204 1.272 0 .703.538 1.275 1.204 1.275h1.04c0 .084-.009.162-.009.249 0 .336.014.661.034.983H4.896c-.666 0-1.204.569-1.204 1.272 0 .703.538 1.274 1.204 1.274h1.449c1.058 4.087 4.12 6.297 8.89 6.297 1.855 0 3.468-.333 4.801-.997.603-.3.858-1.059.575-1.695z"></path>
    </svg>
  );
};

EuroSymbolFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EuroSymbolFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EuroSymbolFilled;
