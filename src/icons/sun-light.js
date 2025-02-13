import React from 'react';
import PropTypes from 'prop-types';

const SunLight = props => {
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
        d="M18.908 11.524h2.514c.238 0 .423.196.418.42 0 .236-.185.42-.423.42h-2.514c-.042 0-.076-.008-.11-.016-.041 1.998-.602 3.396-1.398 4.374a.21.21 0 01.104.068l1.6 1.586c.16.17.16.431 0 .6a.424.424 0 01-.305.117.41.41 0 01-.297-.117l-1.592-1.587a.323.323 0 01-.045-.061l-.014-.023c-1.55 1.427-3.59 1.654-4.422 1.679v2.438c0 .227-.194.42-.423.42a.424.424 0 01-.424-.42v-2.438c-.888-.034-2.853-.277-4.36-1.667l-.017.029a.157.157 0 01-.025.038l-1.6 1.592a.462.462 0 01-.177.1.45.45 0 01-.272.101.424.424 0 01-.297-.126.43.43 0 010-.6l1.754-1.734a.176.176 0 01.05-.034c-.764-.978-1.305-2.36-1.356-4.332l-.006.001a.261.261 0 01-.08.015H2.573a.417.417 0 01-.423-.42c0-.227.185-.42.423-.42h2.618c.022 0 .044.007.067.015a.431.431 0 00.034.01c.1-1.959.695-3.315 1.499-4.243a.176.176 0 00-.05-.033L4.977 5.52a.42.42 0 010-.6.413.413 0 01.594 0l1.762 1.755c.009.008.015.017.021.025a.222.222 0 00.021.025c1.491-1.264 3.363-1.457 4.201-1.474V2.57c0-.235.188-.42.424-.42.23 0 .423.185.423.42v2.682c.815.034 2.712.252 4.229 1.516.008-.008.016-.025.025-.042l1.821-1.805a.423.423 0 01.603 0c.16.163.16.432 0 .6L17.28 7.326c-.008.008-.025.017-.042.025.83.928 1.432 2.276 1.541 4.198l.047-.01a.332.332 0 01.082-.015zm-7.168 6.62h.594c1.693-.034 5.624-.684 5.622-6.012 0-5.327-3.955-5.994-5.659-6.036-.15-.009-.322-.009-.49-.009h-.118c-1.678.017-5.574.634-5.574 6.011 0 5.39 3.93 6.02 5.625 6.045z"
      ></path>
    </svg>
  );
};

SunLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SunLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SunLight;
