import styled from 'styled-components'

export const Main = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    height: 700px;
    width: 250px;
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 12px;
    border: 2px solid black;
    margin-left: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
`