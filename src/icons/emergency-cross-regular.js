import React from 'react';
import PropTypes from 'prop-types';

const EmergencyCrossRegular = props => {
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
        d="M15.272 8.44l4.86-.003c.829 0 1.582.658 1.582 1.384v4.045c0 .722-.756 1.38-1.582 1.38l-4.858.003.003 4.86c0 .857-.633 1.583-1.38 1.583H9.851c-.748 0-1.381-.726-1.381-1.583l-.003-4.857-4.86.003c-.86 0-1.583-.633-1.583-1.381l.003-4.045c0-.748.725-1.38 1.583-1.38l4.854-.004-.003-4.86c0-.829.658-1.582 1.381-1.582h4.045c.723 0 1.38.756 1.38 1.582l.004 4.855zm-.6 5.6l5.46-.004c.187 0 .358-.143.383-.207l-.002-4.017a.546.546 0 00-.379-.176l-5.465.003a.604.604 0 01-.602-.603l-.003-5.456c0-.188-.14-.359-.201-.378l-4.017.002a.546.546 0 00-.177.379l.003 5.462a.601.601 0 01-.602.602l-5.457.003c-.207 0-.36.134-.378.188v4.033c.014.04.168.174.376.174l5.462-.003a.604.604 0 01.602.602l.003 5.46c0 .21.131.361.188.378h4.03c.042-.017.177-.168.177-.378l-.003-5.463a.604.604 0 01.602-.602z"
      ></path>
    </svg>
  );
};

EmergencyCrossRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmergencyCrossRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmergencyCrossRegular;
