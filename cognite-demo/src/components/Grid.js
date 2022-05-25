import styled from 'styled-components';
import { useReducer } from 'react';

import Row from './Row';

const GridWrapper = styled.div`
    display: flex;
    background-color: blue;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
`;

function reducer(state, action) {
    console.log({action});
    //console.log(action.type);
    switch (action.type) {
        case 'changeCell':
          return [[0,0,1],[0,0,0],[0,0,0]];
        default:
          throw new Error();
      }
}

function Grid() {
    const [gameData, dispatch] = useReducer(reducer, [[0,0,0],[0,0,0],[0,0,0]]);
  return (
    <GridWrapper>{gameData.map((row, index) => {
        //console.log(gameData, row, typeof row, 'rowindex:', index);
        return(<Row rowData={row} rowIndex={index} onCellChange={() => dispatch({type: 'changeCell'})} />)}
        )}</GridWrapper>
  );
}

export default Grid;
