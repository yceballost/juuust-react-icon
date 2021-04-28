import React from 'react';
import PropTypes from 'prop-types';

const LongDistanceCallLight = props => {
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
        d="M11.954 21.807a.278.278 0 00.11-.022c1.3 0 2.588-.26 3.78-.765a9.771 9.771 0 005.964-8.991c.003-5.398-4.367-9.776-9.764-9.779a.278.278 0 00-.062.007.28.28 0 00-.308.279v18.991c0 .154.126.28.28.28zm.28-13.642V2.819c.51.044 1.007.268 1.488.672.54.454 1.027 1.106 1.448 1.944.342.682.625 1.454.843 2.288-1.185.28-2.455.429-3.779.442zm0 3.58v-3.02a17.896 17.896 0 003.91-.456c.24 1.084.373 2.26.39 3.477h-4.3zm0 .561v3.236c1.357.013 2.666.167 3.86.445.27-1.14.42-2.387.44-3.681h-4.3zm4.864 0a17.793 17.793 0 01-.458 3.819c1.102.3 2.093.712 2.913 1.22a9.16 9.16 0 001.694-5.04l-.021.001h-4.128zm4.149-.56a9.2 9.2 0 00-1.58-4.892c-.83.531-1.843.962-2.977 1.275.25 1.13.39 2.354.408 3.617h4.148zm-5.292 4.785a17.157 17.157 0 00-3.72-.428v5.113c.51-.045 1.008-.27 1.487-.672.537-.45 1.025-1.106 1.448-1.944.313-.622.576-1.319.785-2.07zm.545.138c-.22.791-.498 1.526-.829 2.183-.47.932-1.02 1.658-1.625 2.154a9.208 9.208 0 005.168-3.212c-.75-.456-1.68-.84-2.714-1.125zm.058-9.086c1.069-.298 2.022-.705 2.779-1.185a9.184 9.184 0 00-.784-.89 9.158 9.158 0 00-4.509-2.481c.605.496 1.157 1.223 1.627 2.156.361.717.659 1.526.887 2.4zM6.646 21.306c-.272 0-.579-.046-.719-.067l-.037-.006-.02-.003-.017-.002c-1.014-.188-1.941-1.146-2.61-2.7-.715-1.662-1.093-3.891-1.093-6.44v-.096c0-2.549.378-4.778 1.092-6.44.67-1.554 1.597-2.515 2.611-2.7l.017-.003.02-.002.013-.003c.136-.021.493-.078.796-.07 1.756.039 2.65.933 2.65 2.652.003.317-.034.636-.112.944-.193.821-.793 1.796-2.563 1.796-.174 0-.35-.008-.521-.03-.334.036-.507.702-.58 1.103-.154.832-.174 1.969-.174 2.753v.093c0 .784.017 1.924.174 2.756.076.4.25 1.07.58 1.104.173-.023.347-.031.52-.031 1.771 0 2.373.975 2.564 1.795.078.308.115.625.112.942 0 1.72-.89 2.613-2.65 2.652l-.053.003zm-.703-.6l.03.006c.297.048.538.07.712.067.756-.016 1.291-.201 1.639-.56.333-.344.495-.857.495-1.566a3.14 3.14 0 00-.095-.81l-.003-.008c-.218-.938-.888-1.392-2.05-1.392-.162 0-.325.009-.485.031-.014.003-.028.003-.042.003-.812-.034-1.023-1.158-1.094-1.534v-.004c-.163-.874-.183-2.045-.183-2.851v-.096c0-.806.02-1.977.182-2.851v-.004c.072-.376.283-1.5 1.095-1.531.014 0 .028 0 .042.003.16.022.323.03.485.03 1.162 0 1.835-.456 2.05-1.392l.003-.008c.067-.266.098-.538.095-.81 0-.708-.162-1.221-.495-1.566-.348-.36-.883-.543-1.639-.56a4.313 4.313 0 00-.711.067l-.031.006c-1.622.3-3.264 3.356-3.264 8.616v.095c0 3.132.572 5.118 1.05 6.23.586 1.364 1.393 2.235 2.214 2.39z"
      ></path>
    </svg>
  );
};

LongDistanceCallLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LongDistanceCallLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LongDistanceCallLight;
