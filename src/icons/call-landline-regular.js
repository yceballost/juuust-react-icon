import React from 'react';
import PropTypes from 'prop-types';

const CallLandlineRegular = props => {
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
        d="M14.682 21.17c1.068.426 2.06.639 2.925.639.823 0 1.538-.194 2.104-.577.008-.009.016-.014.025-.02l.017-.011c.005-.005.012-.01.019-.014.15-.11.534-.389.813-.68.831-.87 1.243-1.757 1.226-2.634-.016-.849-.431-1.683-1.235-2.487a5.014 5.014 0 00-1-.787c-.695-.432-1.412-.589-2.132-.465-.72.123-1.423.523-2.095 1.196-.16.156-.305.322-.442.495-.118.065-.49.026-1.25-.495-.88-.605-1.918-1.611-2.624-2.317l-.084-.084c-.706-.706-1.715-1.745-2.317-2.625-.52-.761-.56-1.131-.496-1.249.174-.137.34-.286.496-.442.672-.673 1.073-1.376 1.196-2.096.123-.72-.033-1.437-.465-2.131a4.958 4.958 0 00-.787-1C7.772 2.582 6.935 2.167 6.09 2.15c-.877-.014-1.765.398-2.633 1.227-.292.279-.572.663-.681.813l-.014.02-.011.016-.017.025c-.796 1.151-.776 2.936.053 5.025.871 2.183 2.566 4.572 4.902 6.908l.006.006.075.072.006.006c2.336 2.336 4.725 4.03 6.907 4.902zm.412-1.04c-2.042-.814-4.3-2.422-6.526-4.65l-.04-.038-.01-.011-.04-.04c-2.227-2.227-3.835-4.484-4.65-6.526-.675-1.698-.742-3.143-.182-3.967l.025-.033c.219-.303.406-.53.558-.675 1.277-1.222 2.341-1.225 3.554-.012.238.23.443.493.614.776l.008.017c.289.465.392.908.317 1.359-.082.484-.378.986-.883 1.49-.14.143-.288.274-.448.395a.422.422 0 00-.064.059c-.219.238-.446.666-.275 1.344.096.384.311.815.656 1.317.655.958 1.711 2.047 2.448 2.784l.084.084c.737.737 1.826 1.793 2.781 2.448.502.345.933.558 1.317.656.678.173 1.106-.053 1.345-.275.02-.02.039-.042.058-.064.12-.16.252-.308.395-.448.505-.505 1.006-.802 1.49-.883.449-.075.894.028 1.359.317l.017.008c.283.171.543.376.776.614 1.215 1.213 1.213 2.277-.009 3.554a5.217 5.217 0 01-.675.558l-.033.022c-.824.56-2.27.496-3.967-.18z"
      ></path>
    </svg>
  );
};

CallLandlineRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CallLandlineRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CallLandlineRegular;
