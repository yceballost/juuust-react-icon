import React from 'react';
import PropTypes from 'prop-types';

const HomeRegular = props => {
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
        d="M14.787 21.686h2.877c.97 0 1.759-.722 1.759-1.61v-6.933h.504c.723 0 1.367-.398 1.633-1.014.255-.583.12-1.23-.347-1.69L13.132 2.49c-.664-.652-1.913-.652-2.575 0l-8.08 7.953c-.471.456-.603 1.106-.348 1.689.266.616.91 1.014 1.633 1.014h.386v6.932c0 .886.79 1.608 1.76 1.608h3.044a.616.616 0 00.625-.605v-3.759h4.585v3.76c.006.341.286.61.625.604zm2.877-1.21h-2.25v-3.759a.614.614 0 00-.624-.605H8.952a.616.616 0 00-.627.605v3.762H5.908c-.278 0-.505-.18-.505-.4V12.54a.614.614 0 00-.624-.605H3.762c-.266 0-.423-.14-.48-.272-.041-.095-.06-.235.085-.378l8.081-7.95c.196-.193.591-.193.787 0l8.084 7.944c.146.146.126.283.087.378-.056.135-.213.275-.479.275h-1.129a.616.616 0 00-.627.605v7.538c0 .221-.227.4-.507.4z"
      ></path>
    </svg>
  );
};

HomeRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HomeRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HomeRegular;
