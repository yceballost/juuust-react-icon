import React from 'react';
import PropTypes from 'prop-types';

const FolderRegular = props => {
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
        d="M3.465 20.237h16.76c.806 0 1.461-.656 1.461-1.462V7.489c0-.807-.655-1.462-1.462-1.462H12.07v-.731c0-.807-.658-1.463-1.465-1.463h-7.14C2.655 3.833 2 4.49 2 5.296v13.476c0 .81.658 1.465 1.465 1.465zM3.277 5.296c0-.107.082-.188.188-.188h7.14c.106 0 .188.081.188.188v1.37c0 .352.285.638.638.638h8.793c.107 0 .188.081.188.188v11.283a.188.188 0 01-.188.187H3.465a.184.184 0 01-.188-.187V5.295z"
      ></path>
    </svg>
  );
};

FolderRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderRegular;
