import React from 'react';
import PropTypes from 'prop-types';

const TabletLight = props => {
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
        d="M19.284 5.759s.005 8.51.005 12.438c0 3.426-2.676 3.645-3.36 3.645-.1 0-.156-.006-.156-.006s-3.758.003-7.717.003c-3.959 0-3.522-3.64-3.522-3.64v-.526l-.003-.015a.086.086 0 01-.005-.025c0-.008.002-.016.005-.024l.003-.015V5.773c0-3.43 2.757-3.623 3.38-3.623.078 0 .123.003.123.003s3.948-.003 7.755-.003c3.806.003 3.492 3.609 3.492 3.609zM5.33 5.773c0-1.163.35-1.948 1.07-2.396.611-.378 1.315-.406 1.516-.403h.07c.017.002.034.002.054.002l7.753-.002c.941 0 1.641.252 2.087.75.68.761.617 1.912.614 1.963v.002c-.003.022-.003.047-.003.073 0 0 .005 7.26.005 11.462H5.33V5.773zm13.166 12.424c0 2.457-1.605 2.824-2.563 2.824-.056 0-.09 0-.096-.003-.02-.003-.042-.003-.061-.003l-7.717.003c-1 0-1.734-.26-2.183-.779-.653-.754-.557-1.876-.552-1.936V18.3c.003-.033.006-.067.006-.1v-.155h13.166v.152zm-5.858 1.423c0-.476-.275-.76-.732-.76-.46 0-.731.284-.731.76 0 .233.064.418.19.552.13.137.317.207.541.207.224 0 .412-.07.541-.207.126-.134.19-.32.19-.552z"
      ></path>
    </svg>
  );
};

TabletLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TabletLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TabletLight;
