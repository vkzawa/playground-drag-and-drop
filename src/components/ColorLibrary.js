import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ColorItem from './ColorItem';

const ColorLibrary = (props) => {
  return (
    <Droppable
      droppableId={props.list}
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          {props.items.map((item, index) => (
            <ColorItem
              key={item + index}
              id={item + index}
              index={index}
              color={item}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default ColorLibrary;
