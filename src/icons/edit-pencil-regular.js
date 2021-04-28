import React from 'react';
import PropTypes from 'prop-types';

const EditPencilRegular = props => {
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
        d="M4.221 18.748c.311.333.743.526 1.182.526.182 0 .359-.03.527-.095l4.373-1.557c.215-.076.411-.196.576-.359.082-.075 8.247-7.86 8.799-8.448a3.987 3.987 0 001.106-2.765 4.25 4.25 0 00-1.092-2.843c-.7-.753-1.672-1.187-2.664-1.187-.972 0-1.896.423-2.608 1.19-.291.314-4.678 4.507-8.653 8.291a1.742 1.742 0 00-.47.76l-1.465 4.703a1.823 1.823 0 00.39 1.784zm2.625-6.003L5.36 17.482l.045.115h.006l4.372-1.558c2.112-2.008 8.33-7.95 8.751-8.395a2.27 2.27 0 00.644-1.594 2.54 2.54 0 00-.638-1.672 2.108 2.108 0 00-1.51-.678c-.538 0-1.042.236-1.451.678-.482.516-8.398 8.048-8.734 8.367zm13.17 7.188c.443 0 .805.375.805.837 0 .465-.362.84-.804.84H4.482c-.443 0-.804-.375-.804-.84 0-.462.361-.837.804-.837h15.535z"
      ></path>
    </svg>
  );
};

EditPencilRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EditPencilRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EditPencilRegular;
