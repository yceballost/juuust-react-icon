import React from 'react';
import PropTypes from 'prop-types';

const CarRegular = props => {
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
        d="M17.317 9.472c.753.112 2.66.574 3.767 2.434 1.398 2.342-.064 3.614-.129 3.67a.607.607 0 01-.4.145h-2.381c-.23 1.213-1.166 1.944-2.566 1.944s-2.342-.73-2.569-1.944H9.62c-.232 1.208-1.168 1.936-2.566 1.936-1.395 0-2.333-.728-2.563-1.936H2.773a.612.612 0 01-.597-.454l-.002-.012c-.028-.123-.237-1.051-.154-2.413-.012-1.062.669-2.843 2.21-4.345 1.084-1.059 2.966-2.32 5.781-2.32 4.465 0 6.692 2.477 7.306 3.295zm.857 5.056h2.095c.176-.272.409-.924-.25-2.028-1.033-1.734-3.005-1.871-3.09-1.874a.62.62 0 01-.492-.288c-.073-.118-1.916-2.97-6.429-2.97-2.392 0-3.991 1.068-4.91 1.967-1.227 1.196-1.86 2.683-1.854 3.535-.042.717 0 1.291.047 1.658h1.19c.225-1.221 1.166-1.96 2.572-1.96 1.406 0 2.348.739 2.572 1.96h3.411c.225-1.219 1.166-1.952 2.569-1.952s2.342.733 2.569 1.952zm-3.964.591c0 .91.454 1.353 1.395 1.353.938 0 1.395-.443 1.395-1.353 0-.91-.457-1.353-1.395-1.353s-1.395.443-1.395 1.353zm-7.157 1.347c-.941 0-1.395-.442-1.395-1.353 0-.913.457-1.355 1.395-1.355.939 0 1.398.442 1.398 1.355-.003.91-.46 1.353-1.398 1.353z"
      ></path>
    </svg>
  );
};

CarRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CarRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CarRegular;
