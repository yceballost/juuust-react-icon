import React from 'react';
import PropTypes from 'prop-types';

const EditPaperLight = props => {
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
        d="M21.842 4.9a2.845 2.845 0 00-.799-1.944 2.84 2.84 0 00-1.817-.798 2.706 2.706 0 00-2.014.798l-.544.496H6.326c-2.568-.023-4.165 1.482-4.165 3.89V17.97a3.682 3.682 0 001.076 2.79 4.285 4.285 0 003.103 1.076h9.26c1.14.07 2.261-.32 3.116-1.076a3.684 3.684 0 001.078-2.79V7.945l1.238-1.157a2.68 2.68 0 00.81-1.888zm-3.219 13.067a2.618 2.618 0 01-.717 1.956 3.24 3.24 0 01-2.316.75H6.326a3.227 3.227 0 01-2.316-.75 2.622 2.622 0 01-.695-1.956V7.343c0-1.712 1.076-2.757 3.023-2.757h9.053L10.878 8.57a1.343 1.343 0 00-.347.52l-1.065 3.183c-.154.431-.042.91.289 1.226.221.233.526.362.846.36.126.016.255.016.38 0l3.197-1.054c.154-.053.294-.135.417-.244 0 0 2.21-1.944 4.017-3.563l.011 8.97zm-7.025-8.53l-1.078 3.205s.103.06.103.062l3.196-1.053c.824-.729 6.056-5.359 6.404-5.684.291-.283.459-.67.462-1.075a1.585 1.585 0 00-1.504-1.575h-.07c-.407 0-.796.168-1.076.463-.314.3-4.712 4.165-6.437 5.658z"
      ></path>
    </svg>
  );
};

EditPaperLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EditPaperLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EditPaperLight;
