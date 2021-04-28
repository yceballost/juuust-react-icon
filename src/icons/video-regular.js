import React from 'react';
import PropTypes from 'prop-types';

const VideoRegular = props => {
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
        d="M21.709 6.542s.288-3.7-3.639-3.7c-3.927 0-12.437.005-12.437.005s-.07-.005-.196-.005c-.754 0-3.409.243-3.409 3.68 0 4.003.003 10.664.003 10.664s-.247 3.687 3.619 3.687h12.423s.12.016.314.016c.882 0 3.325-.31 3.325-3.722 0-4.166-.003-10.625-.003-10.625zM6.333 19.618V4.1l4.168-.003 6.908-.003v15.524H6.333zM4.112 4.45c-.199.126-.765.512-.837 1.806h1.829V4.12c-.286.034-.659.115-.992.33zm16.361 13.067c-.039.74-.288 1.977-1.834 2.1v-2.1h1.834zM3.838 19.002c-.432-.463-.541-1.113-.57-1.468h1.836v2.047c-.55-.075-.972-.266-1.266-.58zM19.922 4.723c.453.488.54 1.182.557 1.518h-1.843V4.133c.56.079.991.275 1.286.591zm-1.283 11.54h1.843v-2.086h-1.843v2.087zm1.84-6.68h-1.84v-2.09h1.84v2.09zm-1.84 3.339h1.84v-2.09h-1.84v2.09zM3.26 16.282h1.844v-2.087H3.26v2.087zm1.844-6.69H3.26v-2.08h1.844v2.08zM3.26 10.845v2.095h1.844v-2.095H3.26zm6.359 3.602l4.392-2.583L9.62 9.282v5.165zm6.238-2.583a.63.63 0 00-.308-.543L9.311 7.654a.607.607 0 00-.616 0 .63.63 0 00-.308.544v7.333a.63.63 0 00.308.543.607.607 0 00.616 0l6.238-3.666a.63.63 0 00.308-.544z"
      ></path>
    </svg>
  );
};

VideoRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VideoRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VideoRegular;
