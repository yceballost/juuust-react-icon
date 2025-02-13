import React from 'react';
import PropTypes from 'prop-types';

const EmergencyCrossWithCircleFilled = props => {
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
        d="M12.255 2.011c1.927.045 9.431.807 9.431 9.86 0 9.07-7.512 9.776-9.392 9.81-.176.005-.378.005-.58.005-.106 0-.215 0-.32-.003-1.977-.028-9.391-.742-9.391-9.87 0-9.116 7.347-9.793 9.322-9.81.029 0 .057 0 .086-.002l.09-.001c.255 0 .524.006.754.011zm4.854 11.27h-3.221a.617.617 0 00-.616.615l.008 3.219c0 .151-.103.252-.137.258h-2.574c-.037-.009-.14-.107-.14-.258v-3.221a.616.616 0 00-.617-.617H6.591c-.157 0-.255-.103-.26-.137v-2.566c.008-.036.106-.14.26-.14h3.221a.616.616 0 00.617-.616V6.597c0-.14.1-.255.137-.266l2.557-.003c.045.014.149.129.149.269v3.218c0 .339.274.616.616.616h3.221c.135 0 .25.098.266.146l.003 2.555c-.014.044-.129.148-.269.148zM14.501 9.2h2.608c.798 0 1.499.64 1.499 1.368v2.577c0 .728-.7 1.367-1.499 1.367h-2.605l.006 2.602c0 .81-.625 1.49-1.367 1.49h-2.577c-.74 0-1.367-.68-1.367-1.487v-2.605H6.594c-.81 0-1.49-.628-1.49-1.367v-2.569c0-.742.68-1.367 1.49-1.367h2.605V6.605c0-.81.625-1.496 1.367-1.496h2.568c.729 0 1.367.698 1.367 1.496v2.597z"
      ></path>
    </svg>
  );
};

EmergencyCrossWithCircleFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmergencyCrossWithCircleFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmergencyCrossWithCircleFilled;
