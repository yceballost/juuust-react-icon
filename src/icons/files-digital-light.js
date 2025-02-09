import React from 'react';
import PropTypes from 'prop-types';

const FilesDigitalLight = props => {
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
        d="M11.5 15.779h9.934a.408.408 0 01.409.4v.003a.404.404 0 01-.41.4h-9.932v2.351c0 .473-.415.871-.905.871H3.061c-.482 0-.905-.406-.905-.871V8.687c0-.457.432-.872.905-.874h1.501V6.91c0-.858.23-1.521.687-1.978.47-.468 1.168-.709 2.08-.709l11.69-.005c.913 0 1.613.238 2.084.708.457.457.686 1.12.686 1.978v5.39c0 .86-.23 1.529-.683 1.991-.474.479-1.174.723-2.084.723l-7.521.002v.768zM5.838 5.496c-.3.3-.451.779-.451 1.417v.902h2.26a.576.576 0 01.407.16l3.271 3.104a.547.547 0 01.14.243.376.376 0 01.034.157v2.731l7.521-.003c.68 0 1.182-.16 1.493-.476.302-.308.457-.79.457-1.434v-5.39c0-.638-.152-1.117-.451-1.417-.311-.31-.813-.467-1.496-.467l-11.686.005c-.687 0-1.191.157-1.5.468zM3.06 19h7.535c.045.003.087-.045.087-.07v-6.89H9.285c-.636 0-1.188-.202-1.59-.586-.41-.386-.626-.916-.626-1.527v-1.31H3.061c-.025.002-.078.044-.087.072v10.244c.003.02.048.067.087.067zM7.887 8.936l2.429 2.302h-1.03c-.421 0-.774-.123-1.023-.361-.244-.232-.376-.56-.376-.95v-.991z"
      ></path>
    </svg>
  );
};

FilesDigitalLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilesDigitalLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FilesDigitalLight;
