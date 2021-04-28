import React from 'react';
import PropTypes from 'prop-types';

const GarajeRegular = props => {
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
        d="M21.238 10.445l-8.104-7.94c-.683-.67-1.843-.67-2.526 0L2.5 10.447c-.459.451-.596 1.09-.361 1.67.258.63.896 1.039 1.625 1.039h.414v6.927c0 .885.779 1.605 1.737 1.605h1.443a.02.02 0 00.007-.001l.007-.002.004.002a.01.01 0 00.004.001h8.921c.009 0 .015-.003.02-.003h.004l.009.002h.008l.004.001h1.356c.958 0 1.737-.72 1.737-1.605v-6.927h.53c.727 0 1.366-.406 1.624-1.04.243-.582.103-1.22-.356-1.672zm-.753 1.213c-.054.135-.222.289-.51.289h-1.132a.601.601 0 00-.602.602v7.53c0 .218-.244.4-.532.4h-.754v-7.846a.601.601 0 00-.602-.602H7.36a.601.601 0 00-.602.602v7.846h-.84c-.289 0-.532-.182-.532-.4v-7.53a.601.601 0 00-.603-.602H3.767c-.29 0-.456-.157-.51-.289-.053-.126-.022-.243.09-.353l8.104-7.944c.216-.213.625-.213.84 0l8.104 7.944c.112.11.14.23.09.353z"
      ></path>
    </svg>
  );
};

GarajeRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GarajeRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default GarajeRegular;
