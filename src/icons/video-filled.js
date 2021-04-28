import React from 'react';
import PropTypes from 'prop-types';

const VideoFilled = props => {
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
        d="M21.678 6.542s.286-3.697-3.639-3.697l-12.428.002s-.073-.005-.196-.005c-.754 0-3.41.243-3.41 3.678 0 4.003.003 10.66.003 10.66s-.246 3.684 3.617 3.684h12.417s.12.017.314.017c.882 0 3.325-.308 3.325-3.72 0-4.162-.003-10.619-.003-10.619zM3.249 6.26c.073-1.294.639-1.68.838-1.807.333-.215.706-.296.991-.33v2.137H3.25zm15.359 13.356c1.546-.123 1.795-1.361 1.832-2.101h-1.832v2.1zM3.244 17.53c.028.356.137 1.005.568 1.468.294.31.717.504 1.266.58V17.53H3.244zM20.448 6.245c-.017-.336-.104-1.03-.555-1.518-.29-.317-.722-.513-1.282-.591v2.11h1.837zm0 10.02h-1.84v-2.087h1.84v2.087zm-1.84-6.68h1.84V7.496h-1.84v2.087zm1.84 3.338h-1.84v-2.087h1.84v2.087zM3.235 16.279h1.84v-2.087h-1.84v2.087zm1.843-6.687H3.235v-2.08h1.843v2.08zm-1.843 1.253v2.092h1.84v-2.092h-1.84zm6.356 3.599V9.282l4.39 2.582-4.39 2.58zm-.308-6.787l6.238 3.664c.19.112.305.32.305.543a.63.63 0 01-.308.544l-6.235 3.664a.607.607 0 01-.616 0 .622.622 0 01-.308-.541V8.2a.63.63 0 01.308-.544.607.607 0 01.616 0z"
      ></path>
    </svg>
  );
};

VideoFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VideoFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VideoFilled;
