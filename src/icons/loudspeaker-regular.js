import React from 'react';
import PropTypes from 'prop-types';

const LoudspeakerRegular = props => {
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
        d="M16.025 18.583a.953.953 0 01-.264-.04L10.305 16.9l-.199.632a.802.802 0 01-.403.482.78.78 0 01-.625.056l-2.269-.711a.822.822 0 01-.538-1.028l.186-.59-3.21-.966a.535.535 0 01-1.056-.122V9.37a.535.535 0 011.055-.122L15.76 5.479a.895.895 0 01.802.143.98.98 0 01.392.79v11.201a.98.98 0 01-.39.788.905.905 0 01-.54.182zm-12.731-4.91l12.59 3.792V6.56l-12.59 3.79v3.322zm15.79-5.457a.545.545 0 01-.387-.933l1.546-1.546a.548.548 0 01.773.773L19.47 8.056a.545.545 0 01-.386.16zm.067 4.109a.545.545 0 110-1.092h2.185a.545.545 0 110 1.092H19.15zM7.397 16.401l1.748.549.07-.224-1.748-.55-.07.225zm12.838 1.355a.545.545 0 00.773 0 .548.548 0 000-.773L19.5 15.476a.548.548 0 00-.773.773l1.507 1.507z"
      ></path>
    </svg>
  );
};

LoudspeakerRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LoudspeakerRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LoudspeakerRegular;
