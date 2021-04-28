import React from 'react';
import PropTypes from 'prop-types';

const HomeLight = props => {
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
        d="M15.008 21.842h2.938c.874 0 1.585-.644 1.585-1.437v-7.283h.726c.655 0 1.232-.359 1.473-.91.227-.519.107-1.093-.308-1.502l-8.26-8.115c-.597-.585-1.729-.585-2.325 0l-8.258 8.12a1.326 1.326 0 00-.311 1.502c.244.552.82.908 1.473.908h.611v7.283c0 .792.709 1.437 1.583 1.437h3.109a.42.42 0 00.426-.412v-4.045h5.112v4.042a.417.417 0 00.425.412zm2.938-.824h-2.513l-.002-4.044a.42.42 0 00-.426-.412H9.04a.42.42 0 00-.426.412v4.047H5.932c-.4 0-.728-.274-.728-.613v-7.695a.42.42 0 00-.426-.412H3.74c-.375 0-.6-.21-.686-.406a.528.528 0 01.132-.608l8.26-8.115c.278-.274.827-.274 1.107 0l8.257 8.112a.52.52 0 01.132.608c-.087.196-.31.406-.686.406h-1.154a.42.42 0 00-.426.412v7.695c0 .339-.328.613-.731.613z"
      ></path>
    </svg>
  );
};

HomeLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HomeLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HomeLight;
