import React from 'react';
import styled from 'styled-components';

const DropContainer = (props) => {
  const items = props.items;

  return (
    <DropContainerStyles>
      {(items && items.length)?
        <div>
          {items.map((item) => {
            return(
              <DropContainerItem>{item}</DropContainerItem>
            )
          })}
        </div>
      :
        <div>Drop Items Here</div>
      }
    </DropContainerStyles>
  );
}

const DropContainerStyles = styled.div`
  border: 2px dashed silver;
  border-radius: 8px;
  padding: 10px;
`
const DropContainerItem = styled.div`
  & ~ & {
    margin-top: 10px;
  }
`;

export default DropContainer;
