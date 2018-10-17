import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const ColorItem = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided, snapshot) => (
        <ColorItemStyles
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            backgroundColor: props.color,
            boxShadow: snapshot.isDragging && '0 5px 10px rgba(0,0,0,0.2)',
            ...provided.draggableProps.style
          }}
        />
      )}
    </Draggable>
  );
}

const ColorItemStyles = styled.div`
  border-radius: 5px;
  height: 32px;
  margin-top: 1px;
  margin-bottom: 1px;
`;

export default ColorItem;
