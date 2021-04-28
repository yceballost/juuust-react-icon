import React from 'react';
import PropTypes from 'prop-types';

const DigitalLibraryFilled = props => {
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
        d="M20.885 14.607c-.552.59-1.347.89-2.355.89l-4.062.006v.776h6.619a.609.609 0 01.602.62.612.612 0 01-.602.618h-6.616v.77a.612.612 0 01-.603.62c-2.996 0-5.253 1.175-5.35 1.225l-.002.001a.635.635 0 01-.258.065.03.03 0 00-.011.003.03.03 0 01-.012.002.612.612 0 01-.28-.072c-.022-.015-2.322-1.227-5.353-1.227a.61.61 0 01-.602-.62v-8.33a.607.607 0 01.555-.616c.067-.006.89-.065 2.028.059V7.033c0-1 .272-1.79.804-2.353.552-.58 1.341-.874 2.353-.874L18.53 3.8c1.01 0 1.8.291 2.352.874.533.56.804 1.35.804 2.35v5.224c0 1-.271 1.793-.8 2.359zm-7.622 3.073c-1.924.09-3.504.59-4.428.958v-7.152c1.661-.81 3.524-.927 4.428-.93v7.124zm-5.633.955a13.975 13.975 0 00-4.425-.958v-7.118a12.459 12.459 0 012.619.303c.014.002.028.007.042.01a.466.466 0 00.042.012c.168.042.336.084.507.137.078.025.16.053.24.081.124.04.244.079.368.127.204.078.409.165.61.263l-.003 7.143z"
      ></path>
    </svg>
  );
};

DigitalLibraryFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DigitalLibraryFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DigitalLibraryFilled;
