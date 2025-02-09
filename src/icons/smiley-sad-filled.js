import React from 'react';
import PropTypes from 'prop-types';

const SmileySadFilled = props => {
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
        d="M21.686 11.846C21.686 5.14 18.06 2 11.84 2 5.622 2 2 5.14 2 11.846c0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zM5.773 15.893c2.333-2.613 6.003-2.484 6.157-2.479 3.714.04 5.893 2.412 5.986 2.513a.613.613 0 01-.457 1.025.61.61 0 01-.456-.201L17 16.748c-.08-.085-1.977-2.074-5.1-2.107h-.03c-.328.001-3.33.004-5.178 2.07a.613.613 0 01-.868.05.613.613 0 01-.05-.867zm3.084-5.5c.356 0 .653-.113.86-.323.202-.207.305-.493.305-.846 0-.723-.448-1.17-1.165-1.17-.72 0-1.165.447-1.165 1.17 0 .353.103.639.305.846.207.21.504.322.86.322zm6.832-.323c-.207.21-.504.322-.86.322-.359 0-.655-.112-.857-.322-.202-.207-.305-.493-.305-.846 0-.723.445-1.17 1.165-1.17.717 0 1.165.447 1.165 1.17 0 .353-.104.639-.308.846z"
      ></path>
    </svg>
  );
};

SmileySadFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmileySadFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SmileySadFilled;
