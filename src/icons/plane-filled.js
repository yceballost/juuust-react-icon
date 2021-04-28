import React from 'react';
import PropTypes from 'prop-types';

const PlaneFilled = props => {
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
      <path d="M21.683 4.692c.031-.608-.215-1.224-.717-1.779-1.028-1.145-2.325-1.213-3.47-.185-.28.252-2.86 3.031-3.569 3.793L5.137 5.23a.426.426 0 00-.406.187L3.829 6.85a.396.396 0 00-.045.336.414.414 0 00.222.258l6.347 2.932c-.874.95-1.53 1.586-2.118 2.157-.79.768-1.423 1.381-2.232 2.412l-2.855-.207a.398.398 0 00-.372.185l-.709 1.072a.411.411 0 00.118.57l2.812 1.848 1.832 3.076c.11.181.339.249.53.16l1.249-.603a.408.408 0 00.23-.4l-.239-3.101c1.068-.835 1.687-1.457 2.46-2.236a49.37 49.37 0 012.174-2.092l3.016 6.353a.41.41 0 00.547.193h.002l1.443-.706a.408.408 0 00.224-.431L17.073 9.77c.703-.644 3.468-3.165 3.709-3.383.557-.505.87-1.09.901-1.695z"></path>
    </svg>
  );
};

PlaneFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlaneFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlaneFilled;
