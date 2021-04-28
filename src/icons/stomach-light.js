import React from 'react';
import PropTypes from 'prop-types';

const StomachLight = props => {
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
        d="M9.113 21.336c.767.337 1.613.499 2.507.499 1.98 0 4.173-.807 6.165-2.322 2.073-1.605 3.428-3.799 3.82-6.182a.46.46 0 01.005-.016l.004-.015a6.78 6.78 0 00.174-.874c.428-3.266-1.639-4.795-3.743-5.143a3.88 3.88 0 01-.28-.037l-.09-.013a5.17 5.17 0 00-.868-.034 3.488 3.488 0 01-.473-.667 3.466 3.466 0 01-.283-2.605 1.274 1.274 0 00-.017-.93c-.1-.232-.336-.546-.874-.73-1.084-.37-1.742.265-1.93.806a6.42 6.42 0 00.518 4.888c.082.146.166.286.255.423-.641.67-1.047 1.605-1.204 2.784a3.66 3.66 0 00-.05.605c-.064.362-.011.738.036 1.074l.003.022v.005c.056.393.108.76-.042.927-.093.104-.376.278-1.295.247a11.408 11.408 0 00-.507-.146c-.697-.157-1.759-.31-2.423-.28-.008-.003-.02-.003-.028-.003a6.245 6.245 0 00-2.93.569 6.342 6.342 0 00-3.302 3.577c-.165.364-.244 1.19.625 1.695.537.313 1.333.476 2.064-.533.107-.145.207-.29.308-.436l.006-.008c.451-.647.88-1.26 1.538-1.598l.123-.067c.204-.11.32-.168.465-.132.258.065.344.424.252 1.073-.11.776-.048 1.476.176 2.084.272.732.706 1.233 1.295 1.493zm-1.527-5.481a1.32 1.32 0 00-.286-.034c-.318 0-.567.132-.766.237a3.344 3.344 0 00-.018.01l-.104.055c-.848.435-1.358 1.166-1.851 1.874-.098.14-.2.283-.3.423-.325.446-.574.521-.964.297-.38-.22-.319-.504-.266-.636a5.515 5.515 0 012.874-3.126 5.368 5.368 0 012.535-.493h.037a.496.496 0 00.064.003c.574-.022 1.543.112 2.193.258.182.048.35.095.496.146.037.014.079.02.118.022 1.014.045 1.655-.126 2.011-.527.411-.458.326-1.068.251-1.609l-.002-.012c-.042-.292-.084-.591-.036-.902 0-.166.017-.356.048-.558.15-1.131.554-1.98 1.196-2.515a.43.43 0 00.07-.58 5.551 5.551 0 01-.863-4.86c.028-.084.202-.487.854-.263.137.047.311.129.373.263a.413.413 0 01.003.288l-.009.023a4.31 4.31 0 00.339 3.291c.207.381.462.717.756 1.003.087.084.21.129.328.118.398-.034.734-.003.885.014l.018.002c.127.02.267.04.36.048 1.048.174 3.44.93 3.012 4.188-.028.224-.07.448-.132.7a.46.46 0 00-.036.12c-.345 2.194-1.591 4.219-3.51 5.7-2.633 2.026-5.628 2.69-7.815 1.73-.37-.163-.653-.505-.84-1.012-.177-.474-.222-1.034-.132-1.667.201-1.442-.373-1.893-.891-2.02z"
      ></path>
    </svg>
  );
};

StomachLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StomachLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StomachLight;
