import React from 'react';
import PropTypes from 'prop-types';

const CafeFilled = props => {
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
        d="M7.482 5.625c0-.21-.081-.337-.236-.563-.165-.236-.37-.53-.372-.953-.003-.423.202-.706.355-.918l.01-.012c.148-.201.246-.336.243-.619a.54.54 0 01.546-.535h.006c.302 0 .549.236.551.524.006.625-.266.997-.448 1.244-.123.165-.162.227-.16.308 0 .1.065.196.185.37l.002.002c.179.257.424.61.421 1.152a.54.54 0 01-.551.529.538.538 0 01-.552-.53zm14.232 7.77c0-4.291-3.412-5.017-4.75-5.137h-.003V7.249a.625.625 0 00-.636-.613H2.66a.626.626 0 00-.636.613v10.558c0 1.288.342 2.243 1.048 2.916.7.666 1.683.991 3.011.991h6.818c1.328 0 2.31-.325 3.011-.991.566-.541.888-1.275.997-2.205 1.286-.095 4.804-.756 4.804-5.123zm-1.269 0c0 3.126-2.193 3.779-3.482 3.893V9.485c1.3.126 3.482.798 3.482 3.91zm-10.417-8.05c.059.09.17.26.188.327a.55.55 0 00.566.489l.02-.001a.537.537 0 00.512-.566c-.02-.301-.2-.576-.346-.8l-.01-.015a3.153 3.153 0 01-.067-.101 8.76 8.76 0 01.084-.123l.004-.006c.159-.229.354-.51.338-.84-.014-.294-.286-.524-.575-.533-.302.014-.535.236-.52.53-.013.042-.08.14-.133.218-.01.014-.02.027-.027.04l-.002.002c-.148.213-.318.455-.307.74.006.227.132.42.265.624l.01.015z"
      ></path>
    </svg>
  );
};

CafeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CafeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CafeFilled;
