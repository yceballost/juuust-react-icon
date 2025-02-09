import React from 'react';
import PropTypes from 'prop-types';

const DocumentsLight = props => {
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
        d="M20.817 10.005c.099.092.16.218.18.353a.424.424 0 01.017.098v10.325c0 .566-.499 1.062-1.082 1.062H9.733c-.571 0-1.072-.502-1.072-1.062v-2.913H4.028c-.55 0-1.06-.493-1.06-1.037V3.193c0-.55.502-1.037 1.06-1.037h9.804c.574 0 1.058.476 1.058 1.037v2.339h1.05c.032 0 .057 0 .082.008a.592.592 0 01.361.17l4.434 4.295zM8.661 17.047V6.59c0-.551.507-1.061 1.072-1.061h4.337V3.193c0-.11-.124-.216-.239-.216H4.026c-.115 0-.238.126-.238.216v13.641c0 .081.131.213.238.213H8.66zm11.269 3.972c.131 0 .263-.12.263-.238v-9.69h-2.031c-.83 0-1.535-.262-2.059-.772-.524-.504-.804-1.202-.804-2.009V6.352H9.733c-.112 0-.252.149-.252.238v14.19c0 .099.12.239.252.239H19.93zm-3.81-14.42l.003.003V8.31c0 .577.196 1.07.557 1.423.359.353.874.535 1.482.535h1.756l-3.795-3.666v-.003h-.003z"
      ></path>
    </svg>
  );
};

DocumentsLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DocumentsLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DocumentsLight;
