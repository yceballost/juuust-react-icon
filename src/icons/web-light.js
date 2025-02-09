import React from 'react';
import PropTypes from 'prop-types';

const WebLight = props => {
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
        d="M20.725 4C21.428 4 22 4.555 22 5.235v12.53c0 .68-.572 1.235-1.275 1.235H3.275C2.572 19 2 18.445 2 17.765V5.235C2 4.555 2.572 4 3.275 4h17.45zM2.834 5.235c0-.233.199-.427.44-.427h17.451c.245 0 .441.19.441.427v2.04H2.834v-2.04zm18.332 12.527c0 .236-.199.427-.44.427H3.274a.433.433 0 01-.441-.427V8.084h18.332v9.678zM9.308 12.517L6.479 10.03a.432.432 0 00-.592.029.395.395 0 00.029.572l2.49 2.19-2.493 2.235a.397.397 0 00-.023.572.428.428 0 00.592.02l2.829-2.533a.402.402 0 00.134-.299.404.404 0 00-.137-.299zm8.39-.082c.23 0 .418.182.418.404a.412.412 0 01-.419.404h-6.704a.412.412 0 01-.419-.404.41.41 0 01.419-.404h6.704zM5.676 6.103c0 .307.259.56.58.56.322 0 .58-.253.58-.56a.57.57 0 00-.58-.563.572.572 0 00-.58.563zm2.322.56a.572.572 0 01-.58-.56c0-.31.258-.563.58-.563.321 0 .578.25.578.563a.57.57 0 01-.578.56zm-4.061-.56c0 .307.259.56.58.56.322 0 .581-.253.581-.56a.57.57 0 00-.58-.563.572.572 0 00-.581.563z"
      ></path>
    </svg>
  );
};

WebLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WebLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WebLight;
