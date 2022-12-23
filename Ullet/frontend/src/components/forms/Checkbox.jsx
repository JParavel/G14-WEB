import React from 'react';

function Checkbox(props) {

    const { children } = props
    return (
        <label className="checkbox">
            <input type="checkbox" />{children}
        </label>
    );
}

export default Checkbox;