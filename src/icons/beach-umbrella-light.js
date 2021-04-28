import React from 'react';
import PropTypes from 'prop-types';

const BeachUmbrellaLight = props => {
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
        d="M16.821 2.401c1.854.456 3.552 1.52 5.046 3.166.28.307.412.72.363 1.135-.067.435-.316.81-.693 1.038l-7.724 4.654 5.675 9.656.004.007a.42.42 0 01-.165.577.442.442 0 01-.602-.157l-5.657-9.633-7.505 4.522c-.24.144-.517.217-.786.217-.143 0-.29-.024-.46-.073-.435-.147-.76-.445-.917-.825-.845-2.037-1.061-3.996-.643-5.812.579-2.552 2.356-4.762 5.288-6.568l-.453-.775-.004-.007-.005-.008a.42.42 0 01.17-.57c.21-.12.48-.05.602.158l.442.754c2.835-1.573 5.53-2.06 8.024-1.456zm4.251 4.608l-1.728 1.04c-3.116-3.467-6.314-4.224-8.413-4.256 1.996-.798 3.9-.991 5.677-.558 1.678.412 3.224 1.388 4.601 2.905.111.12.164.29.147.45a.584.584 0 01-.284.419zM9.343 4.784c1.374-.251 5.368-.5 9.241 3.727l-5.21 3.137-4.03-6.864zm-.713.514c-.871 1.27-2.684 4.774-.655 9.604l4.651-2.804-3.996-6.8zM5.101 16.635a.603.603 0 01-.514.059.593.593 0 01-.368-.328c-.778-1.876-.98-3.66-.6-5.306.442-1.955 1.69-3.7 3.695-5.206-.95 1.883-1.929 5.262-.099 9.507l-2.114 1.274z"
      ></path>
    </svg>
  );
};

BeachUmbrellaLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BeachUmbrellaLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BeachUmbrellaLight;
