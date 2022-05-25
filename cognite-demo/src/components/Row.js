import styled from "styled-components";
import Cell from "./Cell";

const RowContainer = styled.div`
    display: flex;
`;

function Row({rowData, onCellChange, rowIndex}) {
    //console.log("ROWDATA",rowData);
    return (
        <RowContainer>
            {rowData.map((cell, index) => <Cell cellIndex={index} rowIndex={rowIndex} onCellChange={onCellChange} cellData={cell} />)}
        </RowContainer>
    )
}

export default Row;