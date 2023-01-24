import styled from 'styled-components'
import addIconLight from '../../../images/icons/light/add.png';
import addIconDark from '../../../images/icons/dark/add.png';

export const Main = styled.div``
export const Button = styled.button`
    position: absolute;
    bottom: 40px;
    right: 95px;
    height: 60px;
    width: 60px;
    background-color: ${props => props.theme.primaryColor};
    background-image: url(${props => props.theme.title === 'light' ? addIconLight : addIconDark});
    border-radius: 30px;
    border: none;
    &:hover {
    cursor: pointer;
    outline: 2px solid ${props => props.theme.hoverColor}
  }
`

