import React from 'react';
import PropTypes from 'prop-types';

const DrinkLight = props => {
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
        d="M20.948 5.63a.407.407 0 00-.162-.558l-3.676-2.02a.415.415 0 00-.61.262l-.647 2.667h-9.6c-.693 0-1.256.554-1.253 1.281l1.628 13.505c0 .681.563 1.233 1.257 1.233h8.238c.691 0 1.254-.552 1.252-1.184L19.014 7.21c0-.679-.566-1.233-1.257-1.233h-1.049l.475-1.95 3.196 1.758c.202.11.454.04.569-.157zM6.25 6.796a.419.419 0 00-.423.414l.287 2.36h8.864l.675-2.774H6.25zm10.258 0h1.245c.235 0 .424.187.426.365l-.29 2.41h-2.059l.678-2.775zm1.284 3.593l-1.249 10.383a.42.42 0 01-.423.413H7.885c-.233 0-.424-.186-.426-.462L6.213 10.39h8.561l-2.22 9.12v.003a.408.408 0 00.308.489h.002a.415.415 0 00.5-.303l2.268-9.309h2.16zm-7.819 3.742c.782-.765.219-1.44.052-1.608l-.076-.076c-.099-.092-.402-.344-.8-.344-.25 0-.536.098-.834.39-.776.762-.207 1.449-.049 1.611l.08.079c.1.1.395.343.786.343.249.003.538-.097.841-.395zm.588.576c.978-.96.737-2.074.063-2.755a1.584 1.584 0 00-.099-.092c-.183-.173-.683-.573-1.38-.573-.357 0-.893.108-1.422.63-.968.949-.727 2.066-.063 2.752.02.022.04.042.062.063l.033.032c.183.176.678.581 1.374.581.358 0 .896-.11 1.432-.638zm.603 3.355c.435-.427.123-.803.03-.894-.013-.014-.03-.03-.043-.041a.68.68 0 00-.445-.192c-.137 0-.298.054-.462.219-.432.422-.115.806-.03.895l.043.043c.058.054.222.192.438.192.139 0 .3-.057.47-.222zm.626-1.462l-.068-.068a1.5 1.5 0 00-1.017-.41c-.267 0-.669.078-1.051.456-.71.698-.522 1.547-.041 2.039l.063.062c.278.268.65.424 1.019.424.27 0 .669-.078 1.057-.46.718-.705.521-1.554.038-2.043z"
      ></path>
    </svg>
  );
};

DrinkLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DrinkLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DrinkLight;
