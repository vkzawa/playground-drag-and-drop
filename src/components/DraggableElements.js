import React from 'react';
import styled from 'styled-components';

const DraggableElements = (props) => {
  return (
    <DraggableElementsStyles>
      {(props.children)?
        <React.fragment>
          {props.children.map((child) => {
            return(
              <div className='DraggableElementsStyles-item'>{child}</div>
            )
          })}
        </React.fragment>
      :
        <div>Empty Library</div>
      }
    </DraggableElementsStyles>
  );
}

const DraggableElementsStyles = styled.div`
  .DraggableElementsStyles-item ~ .DraggableElementsStyles-item {
    margin-top: 10px;
  }
`;

export default DraggableElements;
