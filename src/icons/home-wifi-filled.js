import React from 'react';
import PropTypes from 'prop-types';

const HomeWifiFilled = props => {
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
        d="M21.56 12.132c.252-.586.12-1.233-.347-1.692l-8.081-7.95c-.664-.652-1.913-.652-2.575 0l-8.084 7.947c-.467.462-.599 1.11-.347 1.692.269.616.908 1.014 1.633 1.014h.39v6.933c0 .888.79 1.61 1.759 1.61h11.759c.969 0 1.756-.72 1.756-1.608v-6.932h.504c.726 0 1.364-.398 1.633-1.014zm-3.977-.244a.588.588 0 00.047-.852c-2.308-2.49-5.736-2.322-5.843-2.313-3.678.036-5.65 2.092-5.731 2.179a.588.588 0 00.042.852.644.644 0 00.885-.043h.001c.052-.054 1.711-1.75 4.842-1.784.034-.003 2.975-.134 4.869 1.913a.634.634 0 00.468.202c.15 0 .3-.05.42-.154zm-1.264 1.83a.59.59 0 00.07-.833c-.005-.008-.01-.014-.02-.022-1.744-1.883-4.481-1.799-4.576-1.79-2.779.03-4.41 1.742-4.476 1.815a.585.585 0 00.036.839l.011.01a.64.64 0 00.883-.04c.04-.041 1.37-1.392 3.576-1.414h.004c.103-.002 2.29-.039 3.607 1.386.233.25.628.272.885.048zm-1.423.993c.21.247.18.62-.07.83a.64.64 0 01-.88-.045c-.757-.822-2.042-.805-2.098-.804h-.002c-1.297.014-2.054.774-2.102.822l-.002.001a.631.631 0 01-.462.196.63.63 0 01-.423-.156l-.017-.017a.59.59 0 01-.028-.835c.045-.047 1.14-1.196 2.998-1.218.058-.003 1.89-.068 3.067 1.204.002.004.006.008.01.011a.075.075 0 01.01.011zm-3 3.984c.703-.012 1.412-.454 1.412-1.412 0-.953-.709-1.395-1.462-1.415-.006-.002-.056-.002-.056-.002-.703.005-1.412.445-1.412 1.411 0 .97.712 1.406 1.415 1.418h.103z"
      ></path>
    </svg>
  );
};

HomeWifiFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HomeWifiFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HomeWifiFilled;
