import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import ColorItem from './ColorItem';

const ColorCanvas = (props) => {
  return (
    <ColorCanvasStyles>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
          >
            {(props.items.length)?
              props.items.map((item, index) => (
                <ColorItem
                  key={item.id}
                  id={item.id}
                  index={index}
                  color={item.color}
                />
              ))
            :
              <ColorCanvasEmpty>Place & Arrange Your Colors</ColorCanvasEmpty>
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </ColorCanvasStyles>
  );
}

const ColorCanvasStyles = styled.div`
  border: 2px dashed silver;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  max-width: 640px;

  > div {
    min-height: 27px;
  }
`

const ColorCanvasEmpty = styled.div`
  color: #555;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`

export default ColorCanvas;
