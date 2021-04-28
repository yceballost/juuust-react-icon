import React from 'react';
import PropTypes from 'prop-types';

const ListDocumentRegular = props => {
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
        d="M19.385 3.751c0-.832-.664-1.591-1.393-1.591H6.012c-.728 0-1.392.759-1.392 1.59v16.505c0 .863.636 1.591 1.392 1.591h11.98c.754 0 1.393-.728 1.393-1.59V3.75zm-1.21 16.504V3.751c0-.193-.146-.367-.208-.39l-11.955.003a.545.545 0 00-.185.387v16.504c0 .205.132.364.19.387h11.976c.044-.014.182-.168.182-.387zM7.413 7.958a.805.805 0 001.608 0 .802.802 0 00-.804-.8.802.802 0 00-.804.8zm1.613 4.082a.802.802 0 00-.804-.802.802.802 0 100 1.603.802.802 0 00.804-.801zm1.922-3.43a.604.604 0 01-.605-.601c0-.334.271-.603.605-.603h5.563a.604.604 0 110 1.204h-5.563zm6.249 3.43a.604.604 0 00-.605-.603h-5.563a.604.604 0 00-.605.603c0 .333.272.602.605.602h5.563a.604.604 0 00.605-.602zm-8.975 3.21a.802.802 0 110 1.602.802.802 0 110-1.603zm8.975.8a.604.604 0 00-.605-.602h-5.563a.604.604 0 00-.605.603c0 .333.272.602.605.602h5.563a.604.604 0 00.605-.602z"
      ></path>
    </svg>
  );
};

ListDocumentRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ListDocumentRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ListDocumentRegular;
