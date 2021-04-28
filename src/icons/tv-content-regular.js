import React from 'react';
import PropTypes from 'prop-types';

const TvContentRegular = props => {
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
        d="M18.396 17.368L5.593 17.36c-1.12 0-1.99-.311-2.58-.927-.574-.591-.863-1.437-.863-2.513V7.923c0-2.202 1.221-3.412 3.44-3.412l12.806.009c2.219 0 3.44 1.213 3.44 3.411v5.998c0 1.075-.288 1.921-.86 2.512-.593.616-1.462.927-2.58.927zM5.59 5.632c-.807 0-1.406.193-1.779.574-.358.367-.54.944-.54 1.717v5.997c0 1.583.736 2.32 2.319 2.32l12.804.008c1.582 0 2.319-.737 2.319-2.32V7.932c0-.773-.182-1.35-.543-1.717-.373-.38-.97-.574-1.78-.574l-12.8-.008zm3.941 13.94l4.916.01c.308 0 .56-.253.56-.561a.562.562 0 00-.56-.56l-4.916-.009a.562.562 0 00-.56.56c0 .309.252.56.56.56z"
      ></path>
    </svg>
  );
};

TvContentRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TvContentRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TvContentRegular;
