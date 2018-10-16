import React, { Component } from 'react';
import styled from 'styled-components';
import DraggableElements from './components/DraggableElements';
import DropContainer from './components/DropContainer';

class App extends Component {
  render() {
    return (
      <AppStyles>
        <AppSidebar>
          <DraggableElements />
        </AppSidebar>
        <AppMain>
          <DropContainer />
        </AppMain>
      </AppStyles>
    );
  }
}

const AppStyles = styled.div`
  background-color: #f0f0f0;
  display: flex;
  align-items: stretch;
  min-height: 100vh;
`
const AppSidebar = styled.div`
  background-color: white;
  width: 25%;
  max-width: 280px;
  padding: 20px;
`
const AppMain = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export default App;
