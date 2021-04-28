import React from 'react';
import PropTypes from 'prop-types';

const TvContentLight = props => {
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
        d="M5.315 17.297c-1.043 0-1.842-.275-2.383-.815-.518-.522-.782-1.28-.782-2.25V8.146c0-.97.264-1.722.782-2.235.536-.533 1.337-.802 2.38-.802L18.678 5.1c1.043 0 1.845.269 2.38.801.518.517.782 1.269.782 2.236v6.088c0 .97-.264 1.727-.782 2.249-.538.54-1.34.815-2.383.815l-13.36.008zM18.68 5.643l-13.366.009c-1.752 0-2.604.814-2.604 2.493v6.088c0 .825.21 1.453.625 1.871.429.432 1.093.65 1.979.65l13.366-.009c.883 0 1.55-.217 1.979-.649.415-.415.625-1.046.625-1.871V8.137c-.003-1.679-.852-2.494-2.604-2.494zm-9.422 13.24h5.47c.153 0 .28-.122.28-.271a.277.277 0 00-.28-.272h-5.47a.277.277 0 00-.28.271c0 .15.126.272.28.272z"
      ></path>
    </svg>
  );
};

TvContentLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TvContentLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TvContentLight;
