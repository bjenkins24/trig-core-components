import React from 'react';

const TabList = ({children, ...restProps}) => {
    return (
        <div role="tablist" {...restProps}>
            {React.Children.map(children, (child, i) => {
                return React.cloneElement(child, {
                  tabIndex: i + 1
                })
             })}
        </div>
    );
}

export default TabList;