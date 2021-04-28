import React from 'react';
import PropTypes from 'prop-types';

const BugRegular = props => {
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
        d="M19.57 11.924c.337 0 .608.278.608.617v1.644a.613.613 0 01-.608.616.613.613 0 01-.607-.616v-1.028h-1.224l.001.088.001.088c0 1.586-.126 2.953-.498 4.062l1.975.608a.617.617 0 01.43.622l-.13 2.476a.612.612 0 01-.608.582h-.034a.616.616 0 01-.577-.647l.106-1.994-1.686-.518c-.832 1.316-2.28 2.05-4.745 2.05-2.473 0-3.922-.74-4.75-2.061l-1.726.529.106 1.994c.02.34-.24.63-.577.647h-.033a.615.615 0 01-.608-.582l-.132-2.476a.615.615 0 01.431-.622l2.017-.62c-.367-1.106-.493-2.47-.493-4.05 0-.03 0-.06.002-.09l.001-.086H4.991v1.028a.613.613 0 01-.608.616.613.613 0 01-.608-.616V12.54c0-.34.272-.617.608-.617h1.871c.078-1.285.297-2.554.863-3.568L4.688 7.61a.617.617 0 01-.431-.622l.131-2.476a.613.613 0 01.642-.583c.336.02.594.308.577.647l-.106 1.994 2.285.704c-.16-.384-.243-.83-.243-1.356 0-1.838.977-2.602 2.322-2.908a.619.619 0 01.028-.829.602.602 0 01.86 0l.644.653a13.503 13.503 0 011.148 0l.645-.653a.605.605 0 01.862 0c.224.227.23.583.031.824 1.356.3 2.342 1.064 2.342 2.91 0 .515-.081.955-.235 1.333l2.215-.68-.106-1.995a.614.614 0 01.577-.647c.322-.025.624.244.641.583l.132 2.476a.611.611 0 01-.431.622l-2.39.734c.49.862.77 2.014.866 3.582h1.877zM8.761 5.916c0-1.26.482-1.86 3.224-1.86s3.224.6 3.221 1.863c0 .344-.05.585-.114.776-.813-.4-1.838-.603-3.115-.603-1.272 0-2.297.197-3.11.597a2.426 2.426 0 01-.106-.773zm7.762 7.417c0 4.605-1.062 6.009-4.546 6.009-3.485 0-4.547-1.404-4.547-6.009 0-2.87.437-4.434 1.468-5.232.675-.524 1.684-.779 3.079-.779 1.383 0 2.383.25 3.059.765 1.042.793 1.487 2.364 1.487 5.246zM12.52 9.246a.613.613 0 00-.608-.616.61.61 0 00-.608.616v7.933c0 .34.272.617.608.617a.613.613 0 00.608-.617V9.246z"
      ></path>
    </svg>
  );
};

BugRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BugRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BugRegular;
