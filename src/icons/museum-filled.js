import React from 'react';
import PropTypes from 'prop-types';

const MuseumFilled = props => {
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
        d="M21.818 9.392a.61.61 0 01-.586.432V9.82h-1.798v7.851h1.745c.339 0 .614.278.614.617v2.938a.616.616 0 01-.614.616H2.823a.616.616 0 01-.613-.616V18.29c0-.34.274-.617.613-.617h1.78V9.822h-1.83a.613.613 0 01-.586-.431.618.618 0 01.236-.69l9.23-6.43a.616.616 0 01.7 0l9.23 6.43a.627.627 0 01.235.692zM8.232 17.675h1.975V9.824H8.232v7.851zm5.6 0h1.975V9.824h-1.975v7.851z"
      ></path>
    </svg>
  );
};

MuseumFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MuseumFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MuseumFilled;
