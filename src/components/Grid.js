import React from 'react';
import Cell from './Cell';

const Grid = (props) => {

  const activeColor = props.activeColor;
  const cellList = props.cellList;
  const setCellList = props.setCellList;

  return ( <div className="grid">
    {cellList.map((cell, idx) => {

      return <Cell 
      key={'grid-', idx}
      color={cell.color}
      handleClick={() => {
        let copy = [...cellList];
        copy[idx].color = activeColor;
        setCellList(copy);
      }}
      />

    }
    )}

  </div>
  )
}

export default Grid;