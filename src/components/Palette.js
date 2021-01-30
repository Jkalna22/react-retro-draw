import React from 'react';
import Cell from './Cell';
import { COLORS } from '../utils';

const Palette = (props) => {
 
  const activeColor = props.activeColor;
  const setActiveColor = props.setActiveColor;

  return ( 
  <div className="palette">
    {COLORS.map((color, idx) => {
      return <Cell key={'palette-', idx} 
      color={color}
      isActive={color === activeColor ? true : false} 
      handleClick={() => {
        return setActiveColor(color)
      }
      }
      />
    })}
  </div>
  )
}

export default Palette;