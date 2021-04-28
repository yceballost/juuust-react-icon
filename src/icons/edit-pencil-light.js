import React from 'react';
import PropTypes from 'prop-types';

const EditPencilLight = props => {
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
        d="M4.916 19.425c-.387 0-.753-.165-1.022-.45a1.611 1.611 0 01-.345-1.553l1.524-4.837c.09-.26.24-.493.445-.672 4.19-3.958 8.692-8.264 9.003-8.589a3.346 3.346 0 012.434-1.168 3.518 3.518 0 012.566 1.157 4.13 4.13 0 011.112 2.731 3.852 3.852 0 01-1.112 2.661c-.555.625-9.025 8.644-9.112 8.726-.143.14-.314.243-.501.3l-4.535 1.607c-.149.065-.303.09-.457.087zm15.157 1.264c.308 0 .555.257.555.58 0 .319-.25.58-.555.58H3.96a.565.565 0 01-.555-.58c0-.32.25-.58.555-.58h16.112zM4.695 18.165a.388.388 0 01-.09-.392l1.521-4.866a.352.352 0 01.101-.151l1.168-1.111c2.806-2.669 7.513-7.144 7.868-7.534a2.36 2.36 0 011.712-.787 2.444 2.444 0 011.767.787c.474.524.74 1.213.745 1.933a2.722 2.722 0 01-.756 1.91c-.476.51-7.667 7.35-9.067 8.681a.313.313 0 01-.112.07l-4.535 1.552a.317.317 0 01-.322-.092z"
      ></path>
    </svg>
  );
};

EditPencilLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EditPencilLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EditPencilLight;
