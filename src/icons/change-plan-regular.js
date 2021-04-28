import React from 'react';
import PropTypes from 'prop-types';

const ChangePlanRegular = props => {
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
        d="M19.908 20.658h-8.35c-.676 0-1.096-.423-1.096-1.1V4.758c0-.667.42-1.081 1.093-1.084h5.21a.55.55 0 01.395.165l4.37 4.37a.55.55 0 01.165.395v10.978c0 .21-.02.481-.182.708-.118.166-.35.364-.793.364-.269.003-.54.003-.812.003zm.666-11.49v10.37h-8.991V4.798h4.621v1.625c0 .82.255 1.513.743 2 .487.487 1.18.745 2.003.745h1.624zm-.793-1.12L17.326 5.59v.832c0 .518.143.936.415 1.207.271.272.689.418 1.21.418h.832zm-12.29.19a.42.42 0 01-.275-.74c.145-.124.3-.257.438-.378h-.73c-.686 0-1.199.157-1.52.468-.334.322-.505.846-.505 1.56v.832a.42.42 0 11-.84 0v-.832c0-.95.255-1.68.762-2.165.484-.465 1.19-.703 2.103-.703h.742c-.173-.151-.34-.294-.411-.355l-.037-.031a.418.418 0 01-.047-.591.418.418 0 01.59-.048l.055.046c.17.146.682.586.893.797.372.375.375.838.005 1.207-.098.098-.537.479-.79.698l-.16.137a.444.444 0 01-.274.098zm11.492 3.639h-5.81a.562.562 0 01-.56-.56c0-.309.253-.56.56-.56h5.81c.308 0 .56.251.56.56 0 .308-.252.56-.56.56zm0 2.736h-5.81a.562.562 0 01-.56-.56c0-.308.253-.56.56-.56h5.81c.308 0 .56.252.56.56 0 .308-.252.56-.56.56zm-5.81 2.754h5.81c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56h-5.81a.562.562 0 00-.56.56c0 .308.253.56.56.56zm-7.557 3.272H2.852c-.51 0-.852-.345-.852-.857v-8.157c0-.499.35-.85.852-.85H6.14c.149 0 .291.06.398.163l2.428 2.429a.55.55 0 01.166.395v6.03c0 .496-.345.841-.84.841l-2.676.006zm2.392-1.12H3.12v-7.623h2.295v.72c0 .6.165 1.068.487 1.39.322.322.79.487 1.39.487h.716v5.025zm-.344-5.866l-1.41-1.41v.373c0 .737.3 1.037 1.037 1.037h.373zM4.022 15.89h3.096a.42.42 0 100-.84H4.022a.42.42 0 100 .84zm0 1.456h3.096a.42.42 0 100-.84H4.022a.42.42 0 100 .84zm3.096 1.457H4.022a.42.42 0 110-.84h3.096a.42.42 0 110 .84z"
      ></path>
    </svg>
  );
};

ChangePlanRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChangePlanRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChangePlanRegular;
