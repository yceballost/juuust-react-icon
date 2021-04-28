import React from 'react';
import PropTypes from 'prop-types';

const PodiumRegular = props => {
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
        d="M8.824 6.06l.683.694-.16.989c-.078.487.118.966.519 1.252.216.15.462.23.714.23.202 0 .406-.051.591-.155l.815-.445.818.448c.41.224.925.193 1.306-.076.397-.282.596-.761.518-1.252l-.163-.991.684-.695c.339-.344.454-.846.302-1.308a1.25 1.25 0 00-1-.849l-.921-.137-.42-.885a1.235 1.235 0 00-1.124-.72 1.24 1.24 0 00-1.126.72l-.417.882-.922.14c-.465.07-.848.395-.997.849a1.28 1.28 0 00.3 1.308zM13.393 8l-.003-.003-1.084-.596a.645.645 0 00-.622-.011l-1.13.554.211-1.283a.668.668 0 00-.174-.557l-.888-.986 1.197-.182a.65.65 0 00.515-.362L12 3.406l.558 1.182a.65.65 0 00.47.345l1.244.266-.877.89a.664.664 0 00-.193.575l.193 1.333c0 .003-.002.003-.002.003zm2.3 12.6h4.926v-3.166h-4.927V20.6zm-12.306 0v-5.544H8.31V20.6H3.387zm11.078-8.58H9.538v2.686a.033.033 0 00.002.01v5.903h4.925v-8.6zM3.233 21.849h11.39v-.003h6.15c.63 0 1.073-.347 1.073-.818v-4.025c0-.462-.448-.798-1.07-.798h-5.081v-4.387c0-.549-.501-1.028-1.073-1.028H9.384c-.569 0-1.07.482-1.07 1.028v2.009H3.233c-.516 0-1.073.344-1.073.899v6.204c0 .496.482.919 1.073.919z"
      ></path>
    </svg>
  );
};

PodiumRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PodiumRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PodiumRegular;
