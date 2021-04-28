import React from 'react';
import PropTypes from 'prop-types';

const MuseumRegular = props => {
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
        d="M21.819 9.392a.61.61 0 01-.585.432V9.82h-1.799v7.851h1.745c.34 0 .614.278.614.617v2.938a.616.616 0 01-.614.616H2.825a.616.616 0 01-.614-.616V18.29c0-.34.275-.617.614-.617h1.778V9.822H2.774a.614.614 0 01-.35-1.12l9.23-6.432a.616.616 0 01.7 0l9.23 6.432a.627.627 0 01.235.691zm-3.61 8.283h-1.172V9.824h1.171v7.851zM3.44 20.614H20.57v-1.706H3.44v1.706zm3.563-2.939H5.833V9.824h1.17v7.851zm4.428 0h1.171V9.824h-1.17v7.851zm-1.224 0H8.233V9.824h1.975v7.851zm3.625 0h1.975V9.824h-1.975v7.851zm5.44-9.084l-7.27-5.064L4.736 8.59h.473l.006-.001.003-.002a.01.01 0 01.004.002l.004.001H7.61l.004-.001.004-.002a.01.01 0 01.004.002l.005.001h3.184l.005-.001.004-.002a.01.01 0 01.004.002l.004.001h2.384l.004-.001.005-.002a.01.01 0 01.004.002l.004.001h3.185l.004-.001a.01.01 0 01.004-.002.01.01 0 01.004.002l.005.001h2.383l.005-.001.004-.002.002.001.006.002h.443z"
      ></path>
    </svg>
  );
};

MuseumRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MuseumRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MuseumRegular;
