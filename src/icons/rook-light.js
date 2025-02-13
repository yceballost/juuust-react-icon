import React from 'react';
import PropTypes from 'prop-types';

const RookLight = props => {
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
        d="M16.252 18.316h1.02c.238 0 .429.188.429.426v2.689c0 .232-.19.42-.426.42H6.645a.423.423 0 01-.426-.42v-2.69c0-.232.19-.42.426-.42h1.02v-1.924c0-.232.19-.42.425-.42h.781a.417.417 0 01-.01-.146l.812-6.944h-.437a.423.423 0 01-.426-.42V6.66H7.47a.423.423 0 01-.425-.42V2.576c0-.232.19-.42.426-.42h1.877c.235 0 .425.188.425.42V3.73h.905V2.576c0-.232.19-.42.426-.42h1.627c.236 0 .426.188.426.42v1.227l.936-.014V2.576c0-.232.19-.42.425-.42h1.956c.235 0 .425.188.425.42v3.659c0 .232-.19.42-.425.42h-1.275v1.807c0 .232-.19.42-.426.42h-.434l.813 6.944c.005.05 0 .098-.014.145h.689c.235 0 .425.188.425.42v1.925zm.594 2.689H7.07v-1.849h9.776v1.849zm-8.328-2.69h6.883v-1.503H8.518v1.504zm2.014-9.43l-.823 7.039c-.002.011-.006.022-.01.033l-.007.017h4.628l-.007-.016a.138.138 0 01-.01-.034l-.824-7.04h-2.946zm-.868-.838h4.684V6.66H9.664v1.387zm-.748-5.053H7.894v2.823h8.148V2.991h-1.1v1.207c0 .23-.188.418-.42.42l-1.79.028a.45.45 0 01-.306-.12.417.417 0 01-.126-.3V2.994h-.776v1.151c0 .233-.19.42-.426.42H9.342a.423.423 0 01-.426-.42V2.994z"
      ></path>
    </svg>
  );
};

RookLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RookLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RookLight;
