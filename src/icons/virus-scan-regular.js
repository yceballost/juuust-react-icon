import React from 'react';
import PropTypes from 'prop-types';

const VirusScanRegular = props => {
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
        d="M21.507 21.535a.604.604 0 000-.857l-5.818-5.77a7.696 7.696 0 001.96-5.127c0-4.282-3.503-7.756-7.823-7.756-4.319 0-7.823 3.474-7.823 7.756 0 4.286 3.501 7.76 7.823 7.76 1.9 0 3.636-.67 4.992-1.782l5.826 5.776a.613.613 0 00.863 0zm-5.081-11.75c0 3.61-2.964 6.546-6.602 6.546-3.64 0-6.6-2.936-6.603-6.547 0-3.608 2.964-6.543 6.603-6.543 3.641 0 6.602 2.935 6.602 6.543zm-6.602 2.89c1.462 0 1.862-.535 1.862-2.49 0-1.227-.176-1.88-.59-2.19-.27-.2-.684-.298-1.272-.298-.591 0-1.009.098-1.278.303-.409.31-.585.966-.585 2.185 0 1.955.4 2.49 1.863 2.49zM8.58 6.812c0-.35 0-.602 1.25-.602 1.248 0 1.248.252 1.248.6a.02.02 0 010 .006c-.002.003-.002.006-.002.01a3.95 3.95 0 00-1.252-.182c-.485 0-.891.065-1.244.182v-.014zM13.35 9.3c.294 0 .532.235.532.526v.748a.529.529 0 01-.532.527.527.527 0 01-.53-.527v-.221h-.072c-.006.535-.048 1.053-.174 1.518l.687.207c.232.07.389.289.375.53l-.062 1.126a.53.53 0 01-.53.498h-.027a.526.526 0 01-.502-.551l.04-.717-.437-.132c-.429.549-1.135.896-2.294.896-1.163 0-1.869-.35-2.297-.902l-.454.135.039.714a.53.53 0 01-.501.555h-.028a.53.53 0 01-.53-.499l-.061-1.126a.528.528 0 01.375-.532l.703-.213c-.12-.462-.165-.98-.17-1.513h-.074v.222a.528.528 0 01-.53.526.529.529 0 01-.531-.526V9.82c0-.292.238-.527.532-.527h.639a4.09 4.09 0 01.282-1.227l-.851-.258a.522.522 0 01-.375-.532l.061-1.126c.017-.291.283-.501.558-.496a.529.529 0 01.501.555l-.04.714.466.14-.008-.07c-.007-.06-.015-.122-.015-.187 0-1.653 1.62-1.653 2.311-1.653.692 0 2.311 0 2.311 1.653 0 .07-.007.136-.014.202l-.005.047.437-.132-.04-.717a.525.525 0 01.502-.552c.288.017.543.208.557.499l.062 1.126a.528.528 0 01-.375.53l-.835.249c.162.378.246.798.285 1.232h.64V9.3zm-3.025-.308a.527.527 0 00-.53-.527.525.525 0 00-.529.527v2.8c0 .292.235.527.53.527.29 0 .529-.235.529-.526V8.992z"
      ></path>
    </svg>
  );
};

VirusScanRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VirusScanRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VirusScanRegular;
