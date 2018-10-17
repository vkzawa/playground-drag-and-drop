import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import initialData from './initialData';
import ColorLibrary from './components/ColorLibrary';
import ColorCanvas from './components/ColorCanvas';

// Reorder the colors on the canvas
const reorderCanvas = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Create new colors on canvas
const addToCanvas = (lastId, source, destination, droppableSource, droppableDestination) => {
  const newId = lastId + 1;
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const newItem = {
    id: newId,
    color: sourceClone[droppableSource.index]
  };

  destClone.splice(droppableDestination.index, 0, newItem);

  const result = {};
  result.items = destClone;
  result.lastId = newId;

  return result;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: initialData.colors,
      items: initialData.canvas.items,
      lastId: initialData.canvas.lastId
    };
  }

  onDragEnd = result => {
    const { source, destination } = result;

    // Cancel if dropped outside list
    if (!destination) {
      return;
    }

    // If colors moved within same list
    if (source.droppableId === destination.droppableId) {
      const items = reorderCanvas(
        this.state.items,
        source.index,
        destination.index
      );

      let state = { items };
      this.setState(state);

    // If colors moved from sidebar to canvas
    } else {
      const result = addToCanvas(
        this.state.lastId,
        this.state.colors,
        this.state.items,
        source,
        destination
      );

      this.setState({
        items: result.items,
        lastId: result.lastId
      });
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <AppStyles>
          <AppSidebar>
            <ColorLibrary list='library' items={this.state.colors} />
          </AppSidebar>
          <AppMain>
            <ColorCanvas list='canvas' items={this.state.items} />
          </AppMain>
        </AppStyles>
      </DragDropContext>
    );
  }
}

const AppStyles = styled.div`
  background-color: #f0f0f0;
  display: flex;
  align-items: stretch;
  min-height: 100%;
`
const AppSidebar = styled.div`
  background-color: white;
  width: 25%;
  max-width: 280px;
  padding: 15px;
`
const AppMain = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export default App;
