import styled from "styled-components";

const CellContainer = styled.div`
    //background-color: red;
    font-size: 42px;
    margin: 8px;
`;

function Cell({cellData, onCellChange, rowIndex, cellIndex}) {
    console.log(rowIndex, cellIndex);
    return (
        <CellContainer onClick={() => onCellChange(rowIndex, cellIndex)}>
            {cellData}
        </CellContainer>
    )
}

export default Cell;