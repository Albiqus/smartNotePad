import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    width: 210px;
    height: auto;
    margin-top: 14px;
`



export const Radio = styled.div`
    height: 20px;
    width: 20px;
    margin-top: 6px;
    border-radius: 5px;
    background-color: ${props => props.theme.primaryColor}
    &:hover {
        cursor: pointer;
    }
`

export const WrapperAll = styled.div`
    display: flex;
    &:hover {
        ${Radio} {
        background-color: rgba(243, 243, 243, 0.589);
        }
        cursor: pointer;
    }
`

export const WrapperFav = styled(WrapperAll)`
   margin-left: 10px;
`

export const Paragraph = styled.p`
    margin: 0;
    margin-left: 5px;
    font-size: 20px;
    color: ${props => props.theme.fontColor};
    &:hover {
        cursor: pointer;
    }
`

export const Selected = styled.div`
    height: 10px;
    width: 10px;
    margin: 5px 5px;
    border-radius: 2.5px;
    background-color: ${props => props.theme.secondaryColor}
`
