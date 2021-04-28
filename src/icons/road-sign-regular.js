import React from 'react';
import PropTypes from 'prop-types';

const RoadSignRegular = props => {
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
        d="M21.836 11.996c0-6.443-3.406-9.846-9.846-9.846-6.437 0-9.84 3.403-9.84 9.846 0 6.437 3.403 9.84 9.84 9.84 6.443 0 9.846-3.403 9.846-9.84zm-1.207 0c0 5.728-2.908 8.633-8.639 8.633-5.728 0-8.633-2.905-8.633-8.633 0-5.731 2.905-8.639 8.633-8.639 5.734 0 8.639 2.908 8.639 8.639zm-6.706.014l2.143-2.073-2.143-2.076v.488c0 .333-.33.655-.664.655H9.366v7.62h1.692v-5.146c0-.334.271-.603.602-.603h1.597c.16 0 .344.09.456.202a.684.684 0 01.207.451v.482h.003zm3.252-2.68l-3.078-2.981a.838.838 0 00-.897-.107.828.828 0 00-.481.754v.793H9.307a1.142 1.142 0 00-1.143 1.146v8.285c0 .333.269.602.602.602h2.9c.33 0 .602-.269.602-.602v-5.143h.45v.79c0 .325.183.613.477.753.297.143.652.099.857-.072a.383.383 0 00.08-.062l.012-.011 3.003-2.905a.824.824 0 00.294-.633.812.812 0 00-.266-.608z"
      ></path>
    </svg>
  );
};

RoadSignRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RoadSignRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RoadSignRegular;
