import React from 'react';

function GridColum(props) {

    const { children, className, column, row } = props

    const style = {
        gridColumn: column,
        gridRow: row
    }

    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
}

export default GridColum;