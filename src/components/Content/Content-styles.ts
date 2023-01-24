import styled from 'styled-components'

export const Main = styled.div`
    height: 700px;
    width: 600px;
    margin-left: 20px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 12px;
    border: 2px solid black;
    box-sizing: border-box;
`