import styled from 'styled-components'

import acceptButtonLight from '../../../images/icons/light/accept.png';
import acceptButtonDark from '../../../images/icons/dark/accept.png';
import rejectButtonLight from '../../../images/icons/light/reject.png';
import rejectButtonDark from '../../../images/icons/dark/reject.png';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.397);
`

export const Main = styled.div`
    position: absolute;
    left: 770px;
    top: 100px;
    height: 700px;
    width: 600px;
    margin-left: 20px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 12px;
    border: 2px solid black;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`

export const Input = styled.input`
    box-sizing: border-box;
    border: none;
    outline: none;
    width: 500px;
    height: 50px;
    margin-top: 27px;
    font-size: 2em;
    font-weight: bold;
    font-family: -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        sans-serif;
    background-color: ${props => props.error ? 'rgba(255, 0, 0, 0.253)' : props.theme.secondaryColor};
    color: ${props => props.theme.fontColor}
   
`

export const Textarea = styled.textarea`
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
    width: 500px;
    height: 456px;
    margin-top: 41px;
    font-family: "custom";
    font-size: 20px;
    background-color: ${props => props.error ? 'rgba(255, 0, 0, 0.253)' : props.theme.secondaryColor};
    color: ${props => props.theme.fontColor};
    border: none;
    outline: none;
    resize: none;
    box-sizing: border-box;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    height: 60px;
    margin-top: 26px;
`

export const Button = styled.button`
    height: 60px;
    width: 60px;
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 30px;
    border: none;
    &:hover {
    cursor: pointer;
    outline: 2px solid ${props => props.theme.hoverColor};
    }
`

export const AcceptButton = styled(Button)`
  background-image: url(${props => props.theme.title === 'light' ? acceptButtonLight : acceptButtonDark});
`

export const RejectButton = styled(Button)`
  background-image: url(${props => props.theme.title === 'light' ? rejectButtonLight : rejectButtonDark});
`

export const Paragraph = styled.p`
    margin: 0;
    position: absolute;
    bottom: 100px;
    left: 50px;
    color: rgb(255, 0, 0);
`
