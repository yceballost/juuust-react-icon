import React from 'react';
import PropTypes from 'prop-types';

const ProcessLoadingLight = props => {
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
        d="M12.003 2.16c6.415 0 9.843 3.395 9.843 9.843s-3.395 9.843-9.843 9.843-9.843-3.395-9.843-9.843S5.555 2.16 12.003 2.16zm0 18.866c5.964 0 9.023-3.034 9.023-9.023S18 2.981 12.003 2.981s-9.022 3.058-9.022 9.022 3.025 9.023 9.022 9.023zm.41-16.404a.408.408 0 00-.41-.378.408.408 0 00-.409.409V7.74a.41.41 0 00.41.409.417.417 0 00.408-.41V4.623zm-4.264 7.325a.41.41 0 01-.41.409H4.62a.41.41 0 010-.818h3.118a.408.408 0 01.412.409zm1.087 2.76a.411.411 0 00-.58-.029S6.482 16.86 6.485 16.86a.41.41 0 00.286.695.381.381 0 00.31-.123l2.157-2.149.017-.017a.394.394 0 00-.017-.557l-.002-.003zm2.711 1.128a.41.41 0 01.41.409v3.076a.41.41 0 01-.819 0v-3.076a.406.406 0 01.41-.409zm5.518 1.081l-2.182-2.182a.41.41 0 00-.574 0l-.003.003c-.16.16-.157.42.003.58l2.185 2.182c.076.076.18.115.286.115a.42.42 0 00.285-.115l.003-.003a.41.41 0 00-.003-.58zm1.855-5.291a.41.41 0 010 .818h-3.076a.41.41 0 010-.818h3.076zm-4.583-2.32a.435.435 0 00.294.115.471.471 0 00.255-.114l2.216-2.182a.411.411 0 00-.574-.583l-2.191 2.182a.42.42 0 000 .583z"
      ></path>
    </svg>
  );
};

ProcessLoadingLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProcessLoadingLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProcessLoadingLight;
