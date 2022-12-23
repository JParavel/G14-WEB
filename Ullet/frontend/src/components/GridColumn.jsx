import React from 'react';

function GridColumn(props) {
    const { children, column, row, className } = props

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

export default GridColumn;