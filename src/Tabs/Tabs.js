import React from 'react';

const Tabs = ({children, ...restProps}) =>     {
                    return (
                            <div {...restProps}>
                            {React.Children.map(children, (child, i) => {
                                if (i === 0) return child;
                                return React.cloneElement(child, {
                                    tabIndex: i,
                                });
                            })}
                            </div>
                            );
};

export default Tabs;