import React from 'react';
import PropTypes from 'prop-types';

const NotesLight = props => {
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
        d="M19.392 8.072a.686.686 0 00-.204-.484l-5.367-5.233a.678.678 0 00-.473-.199h-7.51c-.636 0-1.213.577-1.213 1.21v17.275c0 .641.571 1.202 1.213 1.202H18.17c.659 0 1.221-.552 1.221-1.202V8.072zm-.815 12.569V8.756h-2.549c-.969 0-1.806-.322-2.417-.913-.62-.6-.944-1.432-.944-2.387V2.98h-6.83c-.178 0-.397.204-.397.386v17.275c0 .188.205.378.398.378h12.33c.213 0 .41-.18.41-.378zM13.48 3.159v2.297c0 .731.244 1.35.692 1.793.465.445 1.098.683 1.857.683h2.337L13.479 3.16zm2.972 10.199c.244-.247.384-.552.384-.88 0-.33-.146-.683-.384-.921a1.286 1.286 0 00-.854-.387h-.056c-.244 0-.569.073-.88.387-.177.18-2.298 2.077-3.965 3.569l-.004.003-1.047.938-.872 2.565c-.008.034 0 .068.026.084l.056.034a.03.03 0 00.012-.004.03.03 0 01.013-.004l2.515-.84.154-.132c4.04-3.614 4.804-4.314 4.902-4.412zm1.196-.88c0-.551-.226-1.112-.619-1.507-.722-.733-2.02-.93-2.944 0a1.69 1.69 0 01-.148.14l-.146.132H7.08a.411.411 0 000 .823h5.798a444.491 444.491 0 00-1.857 1.678H7.079a.41.41 0 00-.406.412c0 .221.187.412.406.412h3c-.212.184-.422.373-.634.564l-.352.316a.862.862 0 00-.252.386l-.138.412H7.076a.41.41 0 00-.406.412c0 .22.187.411.406.411h1.361l-.44 1.3a.924.924 0 00-.033.37h-.885a.411.411 0 000 .823h1.627a.198.198 0 00.039-.004.14.14 0 01.026-.004c.018 0 .034.005.048.01.012.003.023.007.033.007a.854.854 0 00.286-.05l2.507-.838a.887.887 0 00.316-.182l.123-.115c3.096-2.765 4.748-4.255 4.936-4.434.409-.412.619-.916.627-1.474z"
      ></path>
    </svg>
  );
};

NotesLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NotesLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NotesLight;
