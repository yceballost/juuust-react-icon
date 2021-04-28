import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartFilled = props => {
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
        d="M21.552 6.849a.557.557 0 00-.443-.216H7.056c-.23-1.289-.4-2.501-.403-2.53-.219-1.218-1.367-2.1-2.737-2.1H2.56a.562.562 0 00-.56.56c0 .308.252.56.56.56h1.356c.812 0 1.513.507 1.633 1.177.23 1.285 1.507 8.708 1.636 9.535.162 1.025.543 1.829 1.137 2.389.566.535 1.311.815 2.149.815h6.008c.83 0 1.532-.283 2.092-.84.53-.53.885-1.294 1.182-2.308.132-.451 1.729-5.942 1.902-6.558a.547.547 0 00-.103-.484zM10.47 21.683c-.5 0-.901-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.292-.28.695-.422 1.194-.422.498 0 .902.143 1.193.423.305.294.46.706.46 1.23 0 .523-.155.935-.46 1.23-.291.28-.692.422-1.194.422zm4.27-.423c.29.28.691.423 1.193.423.501 0 .902-.143 1.193-.423.305-.294.46-.706.46-1.23 0-.523-.157-.935-.46-1.23-.291-.28-.695-.422-1.193-.422-.499 0-.902.143-1.194.423-.305.294-.459.706-.459 1.23 0 .523.154.935.46 1.23z"
      ></path>
    </svg>
  );
};

ShoppingCartFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ShoppingCartFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ShoppingCartFilled;
