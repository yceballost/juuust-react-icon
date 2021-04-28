import React from 'react';
import PropTypes from 'prop-types';

const PlugFilled = props => {
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
        d="M16.858 7.499h.63c.547 0 .99.428.99.955v.07c0 2.725-1.227 4.16-2.337 4.896v1.252c0 .633-.196 1.126-.585 1.465-.333.297-.793.451-1.359.48v4.15c0 .524-.44.947-.98.947H11.43c-.54 0-.98-.423-.98-.947v-4.15c-.56-.032-1.017-.186-1.345-.48-.39-.33-.6-.837-.6-1.462v-1.247c-1.109-.736-2.336-2.173-2.336-4.935 0-.572.446-1 .992-1h.476V3.627c0-.885.745-1.602 1.658-1.602.914 0 1.659.72 1.659 1.602v3.866l2.588.003V3.627c0-.885.745-1.602 1.658-1.602.916 0 1.659.72 1.659 1.602V7.5zm-7.56-4.247a.389.389 0 00-.392.378v3.866h.784V3.63a.387.387 0 00-.392-.378zm3.639 17.24h-1.219v-3.66h1.219v3.66zM14.808 3.63c0-.207.18-.378.392-.378.216 0 .392.17.392.378V7.5h-.784V3.63z"
      ></path>
    </svg>
  );
};

PlugFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlugFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlugFilled;
