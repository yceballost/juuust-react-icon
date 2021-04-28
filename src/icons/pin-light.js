import React from 'react';
import PropTypes from 'prop-types';

const PinLight = props => {
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
        d="M15.796 2.429l5.785 5.812a.899.899 0 01.266.636c0 .216-.084.42-.236.574-.767.77-1.59 1.219-2.468 1.35l-2.714 2.732c.39 2.036-.32 3.977-2.109 5.775-.255.255-.518.367-.798.367s-.546-.112-.745-.313L9.03 15.589l-6.145 6.134-.003.003a.422.422 0 01-.6-.006.429.429 0 01.003-.605l6.138-6.134-3.67-3.695a1.058 1.058 0 01.003-1.49l.333.272-.3-.303C7.02 7.521 9.122 7.328 10.556 7.6l2.715-2.731c.123-.877.557-1.698 1.296-2.44.188-.188.387-.27.6-.27a.899.899 0 01.63.27zm2.852 7.658a.415.415 0 01.255-.123c.736-.079 1.44-.448 2.092-1.101l-5.798-5.826c-.67.644-1.028 1.341-1.098 2.075a.437.437 0 01-.123.26l-2.98 3.004a.424.424 0 01-.399.112c-1.787-.432-3.538.204-5.201 1.882l-.031.03a.196.196 0 00-.006.28l3.955 3.981.009.005a.07.07 0 01.017.012l.007.013a.113.113 0 00.007.012l4.022 4.053c.04.04.092.062.146.062.056 0 .109-.022.145-.062 1.687-1.7 2.303-3.453 1.886-5.268a.433.433 0 01.111-.4l2.984-3z"
      ></path>
    </svg>
  );
};

PinLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PinLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PinLight;
