import React from 'react';
import PropTypes from 'prop-types';

const BeachUmbrellaRegular = props => {
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
        d="M16.177 2.393c1.778.437 3.406 1.46 4.834 3.033.303.33.443.776.393 1.222-.07.476-.342.876-.746 1.123l-7.07 4.266 5.222 8.89.008.018a.596.596 0 01-.24.81.626.626 0 01-.847-.225l-5.196-8.86-6.849 4.135a1.695 1.695 0 01-.846.232c-.154 0-.316-.025-.49-.076-.468-.16-.82-.481-.989-.893-.809-1.955-1.014-3.832-.61-5.574.538-2.398 2.185-4.48 4.88-6.185L7.3 3.746l-.004-.007-.005-.007a.598.598 0 01.239-.81.627.627 0 01.845.224l.314.538c2.639-1.423 5.152-1.863 7.488-1.291zm3.826 4.35l-1.474.89c-2.484-2.71-5.016-3.635-6.946-3.868 1.504-.456 2.94-.526 4.294-.196 1.53.376 2.944 1.272 4.21 2.664.064.07.095.171.087.258a.352.352 0 01-.171.252zM9.446 4.978c1.43-.196 4.745-.16 8.013 3.3l-4.49 2.709c.003 0-3.523-6.009-3.523-6.009zm-1.003.72c-.818 1.322-2.104 4.305-.507 8.328 0 0 3.983-2.403 3.98-2.403L8.443 5.698zM5.039 15.776l-.017.011c-.069.043-.12.075-.294.026a.34.34 0 01-.218-.193c-.712-1.723-.9-3.356-.552-4.86.347-1.546 1.252-2.953 2.678-4.2-.74 1.847-1.204 4.66.232 8.11L5.04 15.777z"
      ></path>
    </svg>
  );
};

BeachUmbrellaRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BeachUmbrellaRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BeachUmbrellaRegular;
