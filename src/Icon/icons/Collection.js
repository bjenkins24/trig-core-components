import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Collection = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M31 12.441c0-.901-1.192-1.08-1.881-1.224l-1.719-.363 1.37-1.926c.73-1.026-.799-1.527-1.564-1.695L22.417 6.18l1.521-2.14c.71-.999-.47-1.56-1.329-1.748L17.145 1.09 12.6.09C11.487-.153 10.314.085 9.57.96L8.118 2.664 3.757 7.789 2.399 9.385c-.153.18-.318.358-.374.595-.182.77.682 1.19 1.288 1.342l5.317 1.326-1.076 1.265c-.425.5-1.142 1.134-.56 1.807.45.52 1.237.618 1.873.776l1.64.409-.859.97c-.093.107-.193.21-.282.32-.366.425-.226.961-.19 1.475.168 2.34.333 4.68.498 7.021.065.917-.064 1.958.926 2.388.313.135.663.204.993.29l3.595.93 4.205 1.088c1.675.434 3.949 1.335 5.151-.465 1.498-2.24 3.058-4.443 4.587-6.663.506-.734 1.011-1.47 1.518-2.202.262-.38.244-1.13.244-1.13S31 12.34 31 12.442zm-9.09 8.884l-10.196-2.412-.528-.125c-.05-.012-.232-.06-.188-.111l.4-.46c.078-.09.684-.918.781-.894l.596.15 5.862 1.461c1.125.28 2.74.393 3.504-.681l1.064-1.498 3.42-4.813c.016-.022.074-.134.104-.128l.732.157 1.115.237c.196.042.458.06.63.173l-6.3 8.342c-.27.357-.453.73-.996.602zM11.736 1.051c.464 0 .977.198 1.423.297l3.02.67 5.685 1.262c.033.007.539.137.521.155l-6.078 8.387-.231.318c-.201.278-.517.77-.887.77-.433.004-.917-.198-1.33-.3L7.558 11.05l-2.69-.665c-.064-.016-1.037-.234-.95-.338.995-1.19 1.99-2.38 2.986-3.568a15255.77 15255.77 0 0 1 4.13-4.933c.21-.253.33-.496.702-.496zM10.32 13.07l2.57.643c.962.24 1.926.565 2.93.386.62-.11 1.23-.365 1.603-.892l.495-.697 1.874-2.636 1.61-2.266.312-.44c.024-.033.477.103.52.112l2.949.656 1.327.294c.023.006.65.172.64.183l-6.216 8.578c-.303.419-.552 1.022-1.18.874-.423-.076-.844-.208-1.262-.312l-6.362-1.572-3.182-.786c-.076-.02-.279-.05-.279-.128 0-.134.307-.391.388-.488l1.263-1.509z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};

Collection.defaultProps = {
  title: 'Collection Icon',
};

Collection.propTypes = propTypes;

export default Collection;