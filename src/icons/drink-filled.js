import React from 'react';
import PropTypes from 'prop-types';

const DrinkFilled = props => {
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
        d="M17.409 2.079l3.678 2.047c.3.174.409.546.238.84a.614.614 0 01-.849.241l-2.955-1.641-.347 1.45h.781c.807 0 1.465.656 1.465 1.46l-.258 2.188-.148 1.244L17.782 20.3c0 .728-.65 1.384-1.457 1.384h-8.23c-.81 0-1.465-.656-1.465-1.46L5.398 9.908l-.149-1.244L5 6.552c0-.877.658-1.532 1.465-1.532h9.428l.608-2.544a.6.6 0 01.359-.423.611.611 0 01.549.026zm.765 4.324c0-.042-.098-.14-.216-.14h-1.081l-.575 2.404h-1.288l.583-2.404h-9.13c-.122 0-.215.101-.215.216l.258 2.188h8.504l-2.457 10.235a.622.622 0 00.465.745l.02.003a.62.62 0 00.732-.468l2.528-10.515h1.605l.267-2.264zM10.902 17.71c.14 0 .3-.059.465-.224.442-.44.126-.821.03-.91l-.041-.043a.697.697 0 00-.448-.19c-.132 0-.292.05-.457.216-.434.428-.118.817-.025.91l.042.042a.635.635 0 00.434.199zm-1.557-3.813c-.393 0-.692-.249-.79-.347a.682.682 0 01-.076-.084c-.157-.165-.731-.863.05-1.633.292-.3.583-.398.832-.398.4 0 .7.258.799.348.025.025.05.05.075.084.165.165.723.846-.05 1.624-.305.306-.597.406-.84.406z"
      ></path>
    </svg>
  );
};

DrinkFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DrinkFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DrinkFilled;
