import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCellStatus } from '../actions';

const Cell = ({ rowIndex, cellIndex, value, status }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleCellStatus(rowIndex, cellIndex));
    };

    return (
        <div className={`cell ${status}`} onClick={handleClick}>
            {value}
        </div>
    );
};

export default Cell;
