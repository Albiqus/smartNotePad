import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 400px;
    display: flex;
    justify-content: flex-end;
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 75px;
    margin-right: 40px;
    border-radius: 0px 0px 12px 12px;
    background-color: ${props => props.theme.primaryColor};
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
`

export const Header = styled.h1`
    color: ${props => props.theme.fontColor};
    font-family: 'custom';
    margin: 0;
`
export const Paragraph = styled.p`
    color: ${props => props.theme.fontColor};
    font-family: 'custom';
    margin: 0;
    margin-bottom: 5px
`