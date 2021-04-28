import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpDownRegular = props => {
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
        d="M9.776 11.91H7.459a1.201 1.201 0 01-1.201-1.201l-.003-2.902-1.824-.014a.754.754 0 01-.683-.437.788.788 0 01.137-.871L8.06 2.277a.75.75 0 011.129 0l4.154 4.208a.793.793 0 01.135.874.758.758 0 01-.681.437l-1.821.014.003 2.899c0 .66-.538 1.201-1.202 1.201zm4.91 9.67a.753.753 0 001.034-.092l4.176-4.21a.788.788 0 00.137-.871.754.754 0 00-.683-.438l-1.826-.014-.003-2.905c0-.664-.538-1.201-1.202-1.201H14c-.664 0-1.202.537-1.202 1.201l.003 2.897-1.823.017a.758.758 0 00-.681.437c-.129.271-.09.599.098.832a.487.487 0 00.036.041l4.157 4.213c.031.034.062.065.098.093zm.468-1.115l-3.339-3.384 1.353-.011h.011a.768.768 0 00.745-.779l-.005-3.24c0-.045.036-.082.081-.082h2.32c.044 0 .08.037.08.081l.003 3.241a.769.769 0 00.748.779h.012l1.35.011-3.359 3.384zm-7.776-9.76l-.003-3.237a.768.768 0 00-.745-.779h-.01l-1.348-.011 3.353-3.381 3.336 3.38-1.35.012h-.012a.768.768 0 00-.745.779l.003 3.238a.081.081 0 01-.081.081H7.459a.081.081 0 01-.08-.081z"
      ></path>
    </svg>
  );
};

ArrowUpDownRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpDownRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpDownRegular;
