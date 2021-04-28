import React from 'react';
import PropTypes from 'prop-types';

const BuyHomeProductsFilled = props => {
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
        d="M16.734 17.04h-6.258c-.837 0-1.58-.284-2.148-.816-.591-.557-.975-1.361-1.138-2.39-.14-.89-1.484-8.683-1.635-9.526-.12-.672-.821-1.176-1.633-1.176h-1.35a.562.562 0 01-.56-.56c0-.309.251-.56.56-.56h1.352c1.367 0 2.519.882 2.737 2.1.049.273.222 1.267.439 2.521h3.05l3.472-3.65a.557.557 0 01.406-.173c.154 0 .3.064.406.173l.939.989v-.056c0-.308.252-.56.56-.56h1.638c.308 0 .56.252.56.56v2.752a.555.555 0 01.18-.03h2.793a.562.562 0 01.543.698c-.091.36-.23.917-.392 1.569v.001l-.002.005-.362 1.453a613.357 613.357 0 01-.883 3.53c-.266 1.025-.652 1.778-1.182 2.308-.56.554-1.263.837-2.092.837zm-7.451 4.212c.291.28.692.423 1.193.423.501 0 .905-.143 1.193-.423.306-.294.46-.706.46-1.23 0-.523-.154-.935-.46-1.23-.29-.28-.694-.422-1.193-.422-.498 0-.902.143-1.193.423-.305.294-.46.706-.46 1.23 0 .523.155.935.46 1.229zm5.462 0c.291.28.692.423 1.193.423.502 0 .905-.143 1.194-.423.305-.294.459-.706.459-1.23 0-.523-.157-.935-.46-1.23-.29-.28-.694-.422-1.193-.422-.498 0-.902.143-1.193.423-.305.294-.46.706-.46 1.23 0 .523.155.935.46 1.229zm2.266-8.61h-5.98V8.834a.562.562 0 00-.56-.56h-.334l3.891-4.09 1.498 1.58a.562.562 0 00.966-.387v-.902h.52v2.628c0 .145.055.283.153.386l.742.782h-.336a.562.562 0 00-.56.56v3.81z"
      ></path>
    </svg>
  );
};

BuyHomeProductsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BuyHomeProductsFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BuyHomeProductsFilled;
