import React from 'react';
import PropTypes from 'prop-types';

const OnRegular = props => {
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
        d="M12.404 2.171c1.574.037 9.442.69 9.442 9.857 0 9.174-7.837 9.785-9.409 9.813-.168.002-.358.005-.551.005-.107 0-.21 0-.314-.003-1.572-.022-9.412-.605-9.412-9.87 0-1.625.451-9.735 9.347-9.813.297 0 .625.006.897.011zm.01 18.468c1.93-.037 8.228-.762 8.228-8.608s-6.328-8.608-8.266-8.653a17.2 17.2 0 00-.855-.008c-1.913.017-8.154.69-8.154 8.608 0 7.933 6.294 8.638 8.224 8.667.275.002.577 0 .824-.006zm-2.159-8.33c0 2.397-.834 2.72-1.65 2.72-.82 0-1.658-.323-1.658-2.72 0-2.412.838-2.737 1.658-2.737.768 0 1.65.31 1.65 2.736zm-1.65-3.83c1.258 0 2.762.664 2.762 3.83 0 3.156-1.501 3.82-2.762 3.82-1.263 0-2.77-.661-2.77-3.82 0-3.166 1.507-3.83 2.77-3.83zm8.743.527a.4.4 0 00-.4-.4h-.27a.4.4 0 00-.4.4v4.675l-3.241-4.896a.406.406 0 00-.336-.18h-.213a.4.4 0 00-.4.4v6.586c0 .222.178.4.4.4h.269a.4.4 0 00.4-.4V10.92l3.233 4.894c.075.112.201.179.336.179h.221a.4.4 0 00.4-.4V9.005z"
      ></path>
    </svg>
  );
};

OnRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OnRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OnRegular;
