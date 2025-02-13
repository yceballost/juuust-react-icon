import React from 'react';
import PropTypes from 'prop-types';

const DigitalLibraryLight = props => {
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
        d="M21.087 14.413c-.524.535-1.285.807-2.258.807h-4.353v.843h6.939c.224 0 .406.18.409.404a.405.405 0 01-.41.403h-6.938v1.269a.405.405 0 01-.408.403c-3.134 0-5.512 1.194-5.56 1.218a.491.491 0 01-.179.043l-.012.002a.406.406 0 01-.19-.044h-.001c-.048-.025-2.426-1.219-5.557-1.219a.402.402 0 01-.409-.4v-8.12c0-.214.165-.387.378-.407a12.478 12.478 0 012.26.078V7.167c0-.919.258-1.642.763-2.152.523-.523 1.282-.79 2.254-.79l11.017-.005c.972 0 1.731.269 2.252.793.505.51.762 1.232.762 2.151v5.09c0 .918-.255 1.644-.759 2.16zM5.617 7.17c0-.7.179-1.236.529-1.589.361-.364.924-.549 1.67-.549l11.016-.005c.745 0 1.306.185 1.67.549.35.353.53.885.53 1.588v5.09c0 .703-.18 1.24-.53 1.599-.364.373-.925.56-1.667.56l-4.353.003v-4.398a.406.406 0 00-.378-.4c-.129-.011-3.151-.227-5.782 1.075-.899-.442-1.84-.711-2.7-.868L5.617 7.17zm2.294 4.218c-1.897-.921-4.073-1-4.93-.98v7.336c1.692.056 3.358.406 4.93 1.036v-7.392zm.818 7.392c.888-.364 2.689-.969 4.93-1.036v-7.336c-.863-.012-3.034.056-4.93.977v7.395z"
      ></path>
    </svg>
  );
};

DigitalLibraryLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DigitalLibraryLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DigitalLibraryLight;
