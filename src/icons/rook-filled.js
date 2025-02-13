import React from 'react';
import PropTypes from 'prop-types';

const RookFilled = props => {
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
        d="M7.472 6.661a.423.423 0 01-.426-.42v-3.66c0-.23.19-.421.426-.421H9.35c.235 0 .426.188.426.42v1.151h.904v-1.15c0-.23.19-.421.426-.421h1.628c.235 0 .425.188.425.42v1.227l.939-.014V2.58c0-.23.19-.42.426-.42h1.952c.235 0 .426.188.426.42v3.664c0 .232-.19.42-.426.42h-.289V6.66h-8.16v.005h-.554v-.003zm.196 9.737c0-.232.19-.42.426-.42h.781a.515.515 0 01-.014-.149l.813-6.94h-.437a.423.423 0 01-.426-.421V7.325h6.392v1.143c0 .23-.19.42-.426.42h-.437l.813 6.941c.005.05 0 .101-.014.149h.689c.235 0 .426.188.426.42v2.09H7.665v-2.09h.003zm10.034 3.18c0-.233-.19-.42-.426-.42H6.646a.424.424 0 00-.426.42v1.848c0 .233.19.42.426.42h10.63a.423.423 0 00.426-.42v-1.849z"
      ></path>
    </svg>
  );
};

RookFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RookFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RookFilled;
