import styled from 'styled-components'
import deleteIcon from '../../../images/icons/light/delete.png'

export const Main = styled.div`
&::-webkit-scrollbar {
    margin-left: 10px;
    width: 2px;
}

&::-webkit-scrollbar-track {
    background-color: ${props => props.theme.secondaryColor};
}

&::-webkit-scrollbar-thumb {
    background: ${props => props.theme.hoverColor}
}
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    height: 473px;
    width: 225px;
    overflow-y: auto;
    overflow: overlay;
`

export const Button = styled.button`
    height: 20px;
    width: 20px;
    margin: 10px 0px 0px 10px;
    border: none;
    display: none;
    background-image: url(${deleteIcon});
    background-color: ${props => props.theme.primaryColor};
    &:hover {
    cursor: pointer;
    opacity: 0.2;
    }
`

export const Title = styled.p`
    width: 125px;
    height: auto;
    font-family: 'custom';
    font-size: 20px;
    margin: 0;
    margin-top: 7px;
    overflow: hidden;
    white-space: nowrap;
    color: ${props => props.theme.fontColor}
`

export const Wrapper = styled.div`
    width: 40px;
    height: 40px;
`

export const Img = styled.img`
    margin-left: 10px;
`

export const NoteItem = styled.div`
    display: flex;
    position: relative;
    width: 205px;
    height: 40px;
    margin-top: 20px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 5px;
    &:hover {
        ${Button}{
        display: block
        }
    }
    &:hover {
    cursor: pointer;
    outline: 2px solid ${props => props.theme.hoverColor}
    }
    outline: ${props => props.isCurrent ? `2px solid ${props.theme.hoverColor}` : 'none'}  
`

export const Paragraph = styled.p`
    text-align: center;
    margin-top: 30px;
    color: ${props => props.theme.fontColor}
    }
`