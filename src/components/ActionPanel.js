import React from 'react';
import { buildCellList } from '../utils';

const ActionPanel = (props) => {
  
   const activeColor = props.activeColor
   const cellList = props.cellList
   const setCellList = props.setCellList

  return <div className="action-panel">
    {}
    <button onClick={
      () => {const newCellList = buildCellList();
      setCellList(newCellList)}
    }>clear all</button>
    {}
    <button onClick={
      () => {const newCellList = buildCellList();
      newCellList.map((cell) => cell.color=activeColor);
    setCellList(newCellList)}
    }>fill all</button>
    {}
    <button onClick={
      () => {
        const newCellList = cellList.map((cell, idx) => 
        {
          cell.color ? console.log(cell.color) : cell.color = activeColor;
          return cell;
        })
          setCellList(newCellList);
      }
      
    }>fill empty</button>
  </div>
}

export default ActionPanel;